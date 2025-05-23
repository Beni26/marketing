import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    productFirstImage:string;
  }
  
  interface CartState {
    items: CartItem[];
  }
  
  const initialState: CartState = {
    items: [],
  };
  
const cartSlice  = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,  action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item=> item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }
            else{
                state.items.push(action.payload);
            }
        },
        removeItem: (state,  action: PayloadAction<number>) => {
          state.items = state.items.filter(item => item.id !== action.payload);

        },
        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
          const itemToUpdate = state.items.find(item => item.id === action.payload.id);
          if (itemToUpdate) {
              itemToUpdate.quantity = action.payload.quantity;
          }
      },
    },
});

export const { addItem, removeItem,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
