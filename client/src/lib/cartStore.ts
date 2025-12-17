import { create } from 'zustand';
import { CartItem, Product } from './types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, quantity = 1, selectedColor) => {
    const currentItems = get().items;
    const existingItem = currentItems.find(
      (item) => item.id === product.id && item.selectedColor === selectedColor
    );

    if (existingItem) {
      set({
        items: currentItems.map((item) =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({ items: [...currentItems, { ...product, quantity, selectedColor }] });
    }
  },
  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) });
  },
  updateQuantity: (productId, quantity) => {
    set({
      items: get().items.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  count: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));
