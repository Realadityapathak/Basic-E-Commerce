import React from 'react';
import { X, Plus, Minus, ShoppingCart as CartIcon, Trash2 } from 'lucide-react';
import { Cart, CartItem } from '../types';

interface ShoppingCartProps {
  cart: Cart;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => void;
  onRemoveItem: (productId: string, selectedSize?: string, selectedColor?: string) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <CartIcon className="h-5 w-5 mr-2" />
              Shopping Cart ({cart.itemCount})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4">
          {cart.items.length === 0 ? (
            <div className="text-center py-8">
              <CartIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item, index) => (
                <CartItemComponent
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-blue-600">${cart.total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CartItemComponent: React.FC<{
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => void;
  onRemoveItem: (productId: string, selectedSize?: string, selectedColor?: string) => void;
}> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex space-x-4">
        <img
          src={item.product.images[0]}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 text-sm">{item.product.name}</h3>
          <p className="text-gray-600 text-sm">${item.product.price}</p>
          
          {item.selectedSize && (
            <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
          )}
          {item.selectedColor && (
            <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onUpdateQuantity(
                  item.product.id, 
                  item.quantity - 1, 
                  item.selectedSize, 
                  item.selectedColor
                )}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Minus className="h-4 w-4 text-gray-600" />
              </button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(
                  item.product.id, 
                  item.quantity + 1, 
                  item.selectedSize, 
                  item.selectedColor
                )}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Plus className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <button
              onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;