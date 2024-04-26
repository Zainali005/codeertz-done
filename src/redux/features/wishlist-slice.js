import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getLocalStorage, setLocalStorage } from '../../utils/localstorage';


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlists: [],
  },
  reducers: {
    add_wishlist: (state, { payload }) => {
      if (payload.changeType === 'remove') {
        state.wishlists = state.wishlists.filter(item => item.id !== payload.item.id);
        // message
        toast.error(`${payload.item.title} remove to wishlist`, {
          position: 'top-left'
        })
      }
      else if (payload.changeType === 'added') {
        state.wishlists.push(payload.item);
        // message
        toast.success(`${payload.item.title} added to wishlist`, {
          position: 'top-left'
        })
      }
      // set local storage
      setLocalStorage('wishlist_products', state.wishlists)
    },
    remove_wishlist: (state, { payload }) => {
      state.wishlists = state.wishlists.filter(item => Number(item.id) !== Number(payload.id));
      // message
      toast.error(`${payload.title} remove to wishlist`, {
        position: 'top-left'
      })
      // set local storage
      setLocalStorage('wishlist_products', state.wishlists)
    },
    get_wishlist_products: (state, { payload }) => {
      state.wishlists = getLocalStorage('wishlist_products')
    }
  }
})

export const { add_wishlist, get_wishlist_products,remove_wishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;