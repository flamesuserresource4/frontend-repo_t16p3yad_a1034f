import React from 'react';
import { Plus, Star } from 'lucide-react';

const products = [
  {
    id: 'strawberry-dream',
    name: 'Strawberry Dream',
    price: 8.99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=1400&auto=format&fit=crop',
    description: 'Creamy strawberry with swirls of real fruit and a touch of vanilla.',
  },
  {
    id: 'choco-fudge',
    name: 'Choco Fudge Brownie',
    price: 9.49,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=1400&auto=format&fit=crop',
    description: 'Rich chocolate ice cream loaded with brownie chunks and fudge ripple.',
  },
  {
    id: 'mango-tango',
    name: 'Mango Tango Sorbet',
    price: 7.99,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop',
    description: 'Bright, dairy-free mango sorbet bursting with tropical flavor.',
  },
  {
    id: 'pistachio-delight',
    name: 'Pistachio Delight',
    price: 9.99,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop',
    description: 'Nutty and silky-smooth pistachio with roasted chunks.',
  },
];

const ProductCard = ({ product, onAdd }) => (
  <div className="group bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-md transition-shadow">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-800">
        {product.rating}
        <Star className="inline-block ml-1 h-3 w-3 text-yellow-500 fill-yellow-500" />
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
        <p className="text-pink-600 font-bold">${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAdd(product)}
        className="mt-4 inline-flex items-center gap-2 w-full justify-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <Plus className="h-4 w-4" /> Add to Cart
      </button>
    </div>
  </div>
);

const ProductGrid = ({ onAdd }) => {
  return (
    <section id="flavors" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Best Sellers</h2>
            <p className="mt-2 text-gray-600">Small-batch flavors crafted from the finest ingredients.</p>
          </div>
          <a href="#contact" className="hidden sm:inline text-pink-600 font-semibold hover:underline">Need catering?</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
