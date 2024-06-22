import React from 'react';
import { useState } from 'react';
import axios from 'axios'; 


export default function FormComponent() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        website: '',
        email1: '',
        phone_mobile: '',
        lead_source: 'Web Site',
        account_name: '',
        campaign_id: '8e8c55a1-6f2b-0953-8614-6626948e137a',
        redirect_url: 'http://onlinemarketingtechs.com/thank-you',
        assigned_user_id: '1',
        moduleDir: 'Leads',
    });


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


const handleSubmit = async (event) => {
        event.preventDefault();

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
        } finally {
            window.location.href = formData.redirect_url;
        }
    };  

// end insert//
return (
    <form id="WebToLeadForm" name="WebToLeadForm" onSubmit={handleSubmit}> 
        <input type="text" className="form-control mb-2" name="first_name" id="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
        <input type="text" className="form-control mb-2" name="last_name" id="last_name" required="" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
        <input type="email" className="form-control mb-2"  name="email1" id="email1" placeholder="Enter Email Address" value={formData.email1} onChange={handleChange} />
        <input type="text" className="form-control mb-2"  name="phone_mobile" id="phone_mobile" placeholder="Phone Number" value={formData.phone_mobile} onChange={handleChange}/>

        <input type="text" className="form-control mb-2" name="website" id="website" placeholder="Website Address" value={formData.website} onChange={handleChange} />
        
         
        <input type="text" className='form-control' name="account_name" id="account_name" placeholder="Your Company" value={formData.account_name} onChange={handleChange} />
        <input name="campaign_id" id="campaign_id" type="hidden" value={formData.campaign_id}/> 
        <input name="redirect_url" id="redirect_url" type="hidden" value={formData.redirect_url} /> 
        <input name="assigned_user_id" id="assigned_user_id" type="hidden" value={formData.assigned_user_id}/> 
        <input name="moduleDir" id="moduleDir" type="hidden" value={formData.moduleDir}/>
        <button type="submit" value="Submit" className="theme-btn btn-style-one text-white radiusPoint mt-4 mb-5"><span className="btn-title" >Get your Marketing Assessement Now </span></button>
    </form>
);
    } 
