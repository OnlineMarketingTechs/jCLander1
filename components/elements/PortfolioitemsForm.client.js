// components/elements/PortfolioForm.js
import { useState } from 'react';

const PortfolioForm = ({ onSubmit }) => {
  const [file, setFile] = useState(null);
  const [projectId, setProjectId] = useState('');
  const [projectType, setProjectType] = useState('');
  const [clientId, setClientId] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemLink, setItemLink] = useState('');
  const [slug, setSlug] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('projectId', projectId);
    formData.append('projectType', projectType);
    formData.append('clientId', clientId);
    formData.append('itemTitle', itemTitle);
    formData.append('itemDescription', itemDescription);
    formData.append('itemLink', itemLink);
    formData.append('slug', slug);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Project ID" onChange={e => setProjectId(e.target.value)} />
      <input type="text" placeholder="Project Type" onChange={e => setProjectType(e.target.value)} />
      <input type="text" placeholder="Client ID" onChange={e => setClientId(e.target.value)} />
      <input type="text" placeholder="Item Title" onChange={e => setItemTitle(e.target.value)} />
      <input type="text" placeholder="Item Description" onChange={e => setItemDescription(e.target.value)} />
      <input type="text" placeholder="Item Link" onChange={e => setItemLink(e.target.value)} />
      <input type="text" placeholder="Slug" onChange={e => setSlug(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default PortfolioForm;