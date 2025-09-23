import React, { useRef, useEffect, useState, useCallback } from 'react';
import { saveCanvasImage, loadCanvasImage } from '../../../api/Canva.api';

const Canva = (noteId) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState('#000000');
  const [savedImage, setSavedImage] = useState(null);
  const [isEraser, setIsEraser] = useState(false); 
  const [eraserSize, setEraserSize] = useState(10);
  const [presentNoteId, setPresentNoteId] = useState(false);
  const [dpr, setDpr] = useState(1); // Device pixel ratio

  // Function to properly scale the canvas for high resolution displays
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    
    // Get device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 10;
    setDpr(devicePixelRatio);
    
    // Set the canvas size, scaled by DPR
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    
    // Scale the context to ensure proper drawing operations
    ctx.scale(devicePixelRatio, devicePixelRatio);
    
    // Set drawing styles
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = isEraser ? eraserSize : lineWidth;
    ctx.strokeStyle = isEraser ? '#FFFFFF' : color;
    
    // Improve image rendering quality
    ctx.imageSmoothingEnabled = false;
    
    // If there's a saved image, draw it on the canvas
    if (savedImage) {
      const img = new Image();
      img.onload = () => {
        // Clear and redraw the image at the correct scale
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
      };
      img.src = savedImage;
    }
  }, [savedImage, color, lineWidth, isEraser, eraserSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setupCanvas();
    
    const handleResize = () => {
      setupCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setupCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = isEraser ? eraserSize : lineWidth;
    ctx.strokeStyle = isEraser ? '#FFFFFF' : color;
    ctx.imageSmoothingEnabled = false; // Disable anti-aliasing for crisp lines
  }, [lineWidth, color, isEraser, eraserSize, dpr]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const coords = getCoordinates(e);
    
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const coords = getCoordinates(e);
    
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
    setIsDrawing(false);
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    if (e.touches) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX / dpr,
        y: (e.touches[0].clientY - rect.top) * scaleY / dpr
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX / dpr,
      y: (e.clientY - rect.top) * scaleY / dpr
    };
  };

  const saveCanvas = async () => {
    const canvas = canvasRef.current;
    
    // Create a temporary canvas to save at a high resolution
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    
    // Draw the original canvas content to the temporary canvas
    tempCtx.drawImage(canvas, 0, 0);
    
    // Get the data URL from the temporary canvas
    const dataURL = tempCanvas.toDataURL('image/png');

    try {
      const response = await saveCanvasImage(noteId, { image: dataURL });
      console.log("Response from saveCanvasImage:", response);
      setSavedImage(dataURL);
    } catch (error) {
      console.error('Error saving canvas:', error);
      alert('Failed to save drawing.');
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const loadSavedImage = async () => {
    try {
      const response = await loadCanvasImage(noteId);
      console.log("Response from loadCanvasImage:", response);
      const image = response;
      setPresentNoteId(true);
      setSavedImage(image);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the image at the correct scale
        const { width, height } = canvas.getBoundingClientRect();
        ctx.drawImage(img, 0, 0, width, height);
      };
      img.src = image;
    } catch (error) {
      setPresentNoteId(false);
    }
  };

  useEffect(() => {
    if (!presentNoteId) {
      loadSavedImage();
    }
  }, [presentNoteId]);

  return (
    <div className="flex flex-col h-[1000px] bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-indigo-800 text-white p-2 shadow-lg">
      <div className="flex flex-wrap justify-end items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <label htmlFor="color-picker" className="font-medium">Color:</label>
          <input
            id="color-picker"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 border-none rounded cursor-pointer"
            disabled={isEraser}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="brush-size" className="font-medium">Brush Size:</label>
          <input
            id="brush-size"
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => setLineWidth(parseInt(e.target.value))}
            className="w-24"
          />
          <span className="w-8">{lineWidth}px</span>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="eraser-size" className="font-medium">Eraser Size:</label>
          <input
            id="eraser-size"
            type="range"
            min="1"
            max="50"
            value={eraserSize}
            onChange={(e) => setEraserSize(parseInt(e.target.value))}
            className="w-24"
            disabled={!isEraser}
          />
          <span className="w-8">{eraserSize}px</span>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={saveCanvas} 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Save
          </button>
          <button 
            onClick={clearCanvas} 
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
          >
            Clear
          </button>
          <button 
            onClick={() => setIsEraser(!isEraser)} 
            className={`px-4 py-2 ${isEraser ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-600 hover:bg-gray-700'} text-white rounded transition-colors`}
          >
            {isEraser ? 'Drawing' : 'Eraser'}
          </button>
        </div>
      </div>

      </div>
      
      <div className="flex-1 p-2 overflow-hidden">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="bg-white rounded-lg shadow-md w-full h-full touch-none"
          style={{
            width: '100%',
            height: '100%',
            imageRendering: 'pixelated' // Ensures crisp rendering
          }}
        />
      </div>
    </div>
  );
};

export default Canva;