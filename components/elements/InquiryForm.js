import { useState } from 'react';
import axios from 'axios';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // Add any other fields you need
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/inquiry', formData);
      console.log(res.data);
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
        // Reset any other fields
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} required />
      <input name="email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" value={formData.message} onChange={handleChange} required />
      {/* Add any other fields */}
      <button type="submit">Submit</button>
    </form>
  );
}