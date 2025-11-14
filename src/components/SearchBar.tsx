'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function SearchBar() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div className="bg-orange-500 p-8 my-5 rounded-xl shadow-lg text-white">Loading products...</div>;
  }

  return (
    <div className="bg-orange-500 p-8 my-5 rounded-xl shadow-lg text-white">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-3 mb-5 border-0 rounded-md text-base bg-white text-gray-800 placeholder-gray-500"
      />
      
      <table className="w-full border-collapse bg-black rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="p-4 text-left font-bold">Image</th>
            <th className="p-4 text-left font-bold">Title</th>
            <th className="p-4 text-left font-bold">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id} className="border-b border-gray-600 hover:bg-gray-900">
              <td className="p-3 text-gray-300">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-12 h-12 object-contain rounded"
                />
              </td>
              <td className="p-3 text-gray-300">
                {product.title}
              </td>
              <td className="p-3 text-gray-300">
                ${product.price.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {filteredProducts.length === 0 && searchTerm && (
        <div className="text-center p-5 text-white italic">
          No products found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}