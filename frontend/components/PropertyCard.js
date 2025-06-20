export default function PropertyCard({ property }) {
  console.log('Property image:', property.image);

  const imageUrl = property.image
    ? property.image.startsWith('http')
      ? property.image
      : `http://127.0.0.1:8001${property.image.startsWith('/') ? property.image : `/media/${property.image}`}`
    : '/no-image.jpg'; // fallback image from public folder

  return (
    <div className="border p-4 shadow rounded">
      <img
        src={imageUrl}
        alt={property.title}
        className="rounded w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/no-image.jpg'; // fallback if image fails to load
        }}
      />
      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p className="text-gray-700">{property.description}</p>
      <p className="text-green-600 font-semibold mt-1">₹{property.price}</p>
    </div>
  );
}



