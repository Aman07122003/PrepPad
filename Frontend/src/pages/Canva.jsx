import React, { useRef, useEffect, useState } from 'react';
import { saveCanvasImage, loadCanvasImage } from '../api/Canva.api';


const Canva = (noteId) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState('#000000');
  const [savedImage, setSavedImage] = useState(null);
  const [isEraser, setIsEraser] = useState(false); 
  const [eraserSize, setEraserSize] = useState(10);
  const [presentNoteId, setPresentNoteId] = useState(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = isEraser ? '#FFFFFF' : color; // ✅ Use white if eraser is on

    if (savedImage) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
      img.src = savedImage;
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [savedImage, color, lineWidth, isEraser]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = isEraser ? eraserSize : lineWidth; // ✅ Use eraserSize if erasing
    ctx.strokeStyle = isEraser ? '#FFFFFF' : color;
  }, [lineWidth, color, isEraser, eraserSize]); // ✅ Include eraserSize in dependencies
  
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
    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const saveCanvas = async () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');

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
        ctx.drawImage(img, 0, 0);
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
        />
      </div>
    </div>
  );
};

export default Canva;
