// pages/api/upload.js
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({ dest: '/tmp' });

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post((req, res) => {
  // req.file is the 'file' file
  res.status(200).json({ data: 'success' });
});

export default handler;