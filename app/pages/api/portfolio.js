// pages/api/portfolio.js
import nextConnect from 'next-connect';
import multer from 'multer';
import { connectToDatabase } from '../../lib/db';

const upload = multer({ dest: '/tmp' });

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  // req.file is the 'file' file
  // req.body contains the other form data

  // Connect to the database
  const db = await connectToDatabase();

  // Prepare the SQL statement
  const stmt = db.prepare(
    `INSERT INTO Items (projectId, projectType, clientId, itemTitle, itemDescription, itemLink, slug) VALUES (?, ?, ?, ?, ?, ?, ?)`
  );

  // Run the SQL statement
  const info = stmt.run(req.body.projectId, req.body.projectType, req.body.clientId, req.body.itemTitle, req.body.itemDescription, req.body.itemLink, req.body.slug);

  // info contains information about the operation, such as the number of changes and the last insert ID

  res.status(200).json({ data: 'success' });
});

export default handler;