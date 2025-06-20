'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch('http://127.0.0.1:8001/api/properties/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <nav className="flex justify-end mb-6 space-x-4">
        <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
        <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
      </nav>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🏡 Property Listings
        </h1>

        {loading && <p className="text-blue-600 text-center">Loading properties...</p>}
        {error && <p className="text-red-600 text-center">Error: {error}</p>}

        {!loading && !error && (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <li key={property.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h2>
                <p className="text-green-600 font-medium">💰 ₹{property.price}</p>
                <p className="text-gray-600">📍 {property.location}</p>
                <p className="text-gray-700 mb-2">{property.description}</p>
                <img
                  src={`http://127.0.0.1:8001${property.image}`}
                  alt={property.title}
                  className="rounded-md w-full h-48 object-cover mt-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
