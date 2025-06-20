'use client';
import React, { useEffect, useState } from 'react';

export default function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8001/api/properties/')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{property.title}</h2>
            <p>{property.description}</p>
            <p className="text-green-600 font-bold">₹{property.price}</p>
            <p>{property.location}</p>
            {property.image && (
              <img
                src={`http://127.0.0.1:8001${property.image}`}
                alt={property.title}
                className="mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
