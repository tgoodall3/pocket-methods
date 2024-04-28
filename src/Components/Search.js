import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    { name: 'Songs' },
    { name: 'Level' },
    { name: 'Resources' },
    { name: 'About' },
    { name: 'Login' },
    { name: 'Register' }

  ];

  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
  <div style={{ position:'absolute', right:'450px', width: '100%', textAlign: 'center', padding: '20px', textAlign:'center', borderRadius:'6px', color:'black' }}>
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      style={{ width: '200px', height: '30px', fontSize: '16px' }}
    />

    {searchTerm && filteredResources.map(resource => (
      <div key={resource.name} style={{fontSize: '22px', fontWeight:'bold' }}>
        {resource.name}
      </div>
    ))}
  </div>
);
}

export default Search;