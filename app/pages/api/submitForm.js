// pages/api/submitForm.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Validate req.body before using it
            if (!req.body || typeof req.body !== 'object') {
                throw new Error('Invalid request body');
            }

            // Use req.body
            // Here you can perform the necessary operations like saving data to a database
            // ...

            res.status(200).json({ status: 'Form submitted' });
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ error: 'Error submitting form' });
        }
    } else {
        res.status(405).json({ error: 'Invalid request method' });
    }
}