import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h4 className="text-white font-bold text-lg">Scoopify</h4>
          <p className="mt-3 text-sm text-gray-400">
            Handcrafted ice creams made fresh daily. We deliver across the city.
          </p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Visit</h5>
          <p className="mt-3 text-sm text-gray-400">
            123 Creamery Lane
            <br /> Sweet Town, ST 45678
          </p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Contact</h5>
          <p className="mt-3 text-sm text-gray-400">
            hello@scoopify.fun
            <br /> +1 (555) 123-4567
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Scoopify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
