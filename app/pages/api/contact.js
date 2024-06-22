import db from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

         // Post to CRM
    try {
        const response = await fetch('https://onlinemarketingapps.com/crm/public/index.php?entryPoint=WebToPersonCapture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }

    
        // Insert form data into the contact table
        try {
            await db.run('INSERT INTO contact (first_name, last_name, website, email1, phone_mobile, lead_source, account_name, campaign_id, redirect_url, assigned_user_id, moduleDir) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
                formData.first_name,
                formData.last_name,
                formData.website,
                formData.email1,
                formData.phone_mobile,
                formData.lead_source,
                formData.account_name,
                formData.campaign_id,
                formData.redirect_url,
                formData.assigned_user_id,
                formData.moduleDir,
            ]);

  // Redirect to thank you page
  res.writeHead(302, { Location: '/thankyou' });
  res.end();
} catch (error) {
  res.status(500).json({ error: 'Failed to insert form data' });
}
} else {
res.status(405).json({ error: 'Method not allowed' });
}
}