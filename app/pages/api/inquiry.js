import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = connectToDatabase();
    const stmt = db.prepare('INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)');
    stmt.run(req.body.name, req.body.email, req.body.message);
    // Post the data to your CRM
    const crmRes = await axios.post('https://onlinemarketingapps.com/crm/public/index.php?entryPoint=WebToPersonCapture', req.body);
    res.status(200).json({ message: 'Inquiry submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}