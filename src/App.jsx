import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((i) => i.id === product.id);
      if (existing) {
        return items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...items, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((items) => items.filter((i) => i.id !== id));
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCartToggle={() => setCartOpen((v) => !v)} cartCount={cartCount} />
      <main>
        <Hero />
        <ProductGrid onAdd={handleAddToCart} />
      </main>
      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
