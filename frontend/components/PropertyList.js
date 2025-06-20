import { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard'; // adjust path if needed

export default function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8001/api/properties/");
        const data = await response.json();
        console.log(data.results); // logs the property list
        setProperties(data.results);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
