import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ onCartToggle, cartCount = 0 }) => {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Flavors', href: '#flavors' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-pink-600 font-extrabold text-xl tracking-tight">
            <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 to-rose-400" />
            Scoopify
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartToggle}
              className="relative inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center rounded-full bg-rose-500 text-white text-xs w-5 h-5">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
