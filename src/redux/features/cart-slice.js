import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getLocalStorage, setLocalStorage } from '../../utils/localstorage';

const initialState = {
  cart_products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
      const index = state.cart_products.findIndex(item => Number(item.id) === Number(payload.id));
      if (index >= 0) {
        state.cart_products[index].quantity += 1;
        // msg
        toast.info(`${payload.title} increase Quantity`, {
          position: 'top-left'
        })
      }
      else {
        state.cart_products.push({ ...payload, quantity: 1 });
        // msg
        toast.success(`${payload.title} added to cart`, {
          position: 'top-left'
        })
      }
      setLocalStorage('cart_products', state.cart_products)
    },
    decrease_quantity: (state, { payload }) => {
      const index = state.cart_products.findIndex(item => Number(item.id) === Number(payload.id));
      if (state.cart_products[index].quantity > 1) {
        state.cart_products[index].quantity -= 1;
        //  msg
        toast.warning(`${payload.title} decrease quantity`, {
          position: 'top-left'
        })
      }
      // set local storage
      setLocalStorage('cart_products', state.cart_products)
    },
    remove_cart_product: (state, { payload }) => {
      state.cart_products = state.cart_products.filter(item => Number(item.id) !== Number(payload.id))
      //  msg
      toast.error(`${payload.title} remove from cart`, {
        position: 'top-left'
      })
      // set local storage
      setLocalStorage('cart_products', state.cart_products);
    },
    clear_cart: (state, action) => {
      const confirmMsg = window.confirm('Are you sure deleted your all cart items ?');
      if (confirmMsg) state.cart_products = [];
      // set local storage
      setLocalStorage('cart_products', state.cart_products);
    },
    get_cart_products: (state, { payload }) => {
      // get local storage
      state.cart_products = getLocalStorage('cart_products');
    }
  }
})

export const { add_cart_product, get_cart_products, decrease_quantity, remove_cart_product, clear_cart } = cartSlice.actions;
export default cartSlice.reducer;