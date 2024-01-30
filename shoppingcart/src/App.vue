<template>
  <nav>
    <router-link to="/">Produit</router-link>
    <router-link to="/cart">Panier({{ productsInCart.length }})</router-link>
  </nav>
  <router-view/>
</template>


<script>

  export default{
    computed: {
      productsInCart(){
        return this.$store.state.prodsInCart;
      }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
