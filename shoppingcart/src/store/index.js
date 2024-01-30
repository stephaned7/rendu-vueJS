import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    products: [],
    prodsInCart: [],
  },

  getters: {
  },

  mutations: {
    setProducts(state, allProducts){
      state.products = allProducts
    },

    addToCart(state, products){
      state.prodsInCart.push(products)
    },

    removeProd(state, product){
      state.prodsInCart.splice(product, 1)
    }

  },

  actions: {
    loadItems(context) {
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response.data);
        context.commit('setProducts', response.data)
      })
  },


},
})
