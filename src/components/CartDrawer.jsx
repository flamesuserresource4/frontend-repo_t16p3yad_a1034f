import React from 'react';
import { X, Trash2 } from 'lucide-react';

const CartDrawer = ({ open, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
          {items.length === 0 ? (
            <p className="text-gray-600">Your cart is empty. Add some scoops!</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{item.name}</h4>
                    <span className="text-pink-600 font-bold">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-600">Qty: {item.qty}</div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-red-50"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="h-16 border-t px-6 flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="text-pink-600 font-extrabold">${total.toFixed(2)}</span>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
