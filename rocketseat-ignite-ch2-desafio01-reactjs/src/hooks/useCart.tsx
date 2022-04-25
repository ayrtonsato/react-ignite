import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

function getCartFromLocalStorage(): Product[] {
  const storagedCart = localStorage.getItem('@RocketShoes:cart');
  if (storagedCart) {
    return JSON.parse(storagedCart);
  }
  return [];
}

function setNewItemToCartLocalStorage(cart: Product[]): void {
  localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
}

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    return getCartFromLocalStorage();
  });

  const addProduct = async (productId: number) => {
    try {
      const { data } = await api.get<Stock>(`/stock/${productId}`);
      const updatedCart = [...cart];
      const hasProduct = updatedCart.find(
        (product) => product.id === productId
      );
      const currentAmount = hasProduct ? hasProduct.amount : 0;
      const stocketAmount = data.amount;
      const amount = currentAmount + 1;

      if (amount > stocketAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if (hasProduct) {
        hasProduct.amount = amount;
      } else {
        const { data } = await api.get<Product>(`/products/${productId}`);
        const newProduct = { ...data, amount: 1 };
        updatedCart.push(newProduct);
      }
      setCart(updatedCart);
      setNewItemToCartLocalStorage(updatedCart);
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const product = cart.find((product) => product.id === productId);
      if (!product) {
        toast.error('Erro na remoção do produto');
        return;
      }
      const newCart = cart.filter((product) => product.id !== productId);
      setCart([...newCart]);
      setNewItemToCartLocalStorage(newCart);
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }
      const { data } = await api.get<Stock>(`/stock/${productId}`);
      const stockAmount = data.amount;
      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }
      const newCart = cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            amount,
          };
        }
        return product;
      });
      setCart(newCart);
      setNewItemToCartLocalStorage(newCart);
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
