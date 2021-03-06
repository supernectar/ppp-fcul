import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export default defineStore('cart', {
  state: () => ({
    // all these properties will have their type inferred automatically
    cart: useLocalStorage('cart', [])
  }),
  getters: {
    getCart: (state) => state.cart
  }
});
