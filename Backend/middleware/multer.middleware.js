import multer from "multer";


// PDF storage
const pdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Files/"); // Save PDFs in Files/
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Unique name
    },
  });


  export const uploadPDF = multer({ storage: pdfStorage });