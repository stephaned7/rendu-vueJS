<template>
  <div v-for="(item, index) in products" :key="index">
        <img v-bind:src="item.image" />
        <br />
        <h3>{{ item.title }}</h3>
        <h2>US$ {{ item.price }}</h2>
        <br />
        <a href="#" @click="openModal(index)">Voir les détails</a>
        <br>

        <Gbtn 
        label="ajouter au panier" 
        @generalEvent="addToCart(prod)"
        v-if="!isInBag(prod)"
        />

        <Gbtn
        label="Supprimer du panier"
        @generalEvent="remove(prod)"
        v-else
        />

        <div class="modal" v-if="openedModal" v-cloak>
          <div class="modal-content">
            <img v-bind:src="selectedProduct.image" />
            <span class="close" @click="closeModal">X</span>
            <br />
            <h2>{{ selectedProduct.title }}</h2>
            <br />
            <h2>US$ {{ selectedProduct.price }}</h2>
            <br />
            <h2>description</h2>
            <div>{{ selectedProduct.description }}</div>
            <br />

            <Gbtn 
            label='ajouter au panier' 
            @generalEvent="addToCart(selectedProduct)"
            v-if="!isInBag(selectedProduct)"
            />

            <Gbtn 
            label='supprimer du panier'
            @generalEvent="removeProd(selectedProduct)"
            v-else
            />

          </div>
        </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
import Gbtn from "../components/GeneralButton.vue";

export default {
  data() {
    return {
      openedModal: false,
      selectedProduct: {},
    };
  },

    components: {
        Gbtn,
    },

  methods: {
    openModal(index) {
      this.selectedProduct = this.products[index];

      this.openedModal = !this.openedModal;
    },

    closeModal() {
      this.openedModal = !this.openedModal;
    },

    addToCart(prod){
        this.$store.commit("addToCart", prod);      
    },

    isInBag(prod) {
    return (
        prod &&
        this.prodsInCart.find(prodInBag => {
        return prodInBag && prodInBag.id === prod.id;
        })
    );
    },

    removeProd(state, product) {
    const indexToRemove = state.prodsInCart.findIndex(prod => prod.id === product.id);
    if (indexToRemove !== -1) {
        state.prodsInCart.splice(indexToRemove, 1);
    }
    }

  },

  computed: {
    // products(){ return this.$store.state.products }

    ...mapState(["products", 'prodsInCart' ]),
  },

  mounted() {
    this.$store.dispatch("loadItems");
  },
};
</script>



<style>
fieldset {
  width: 30%;

  margin-bottom: 10px;
}

img {
  width: 150px;
}

h5 {
  color: blue;
}

.stock {
  font-weight: bold;
}

span {
  color: red;
}

.modal {
}

.modal-content {
}

.close {
}

[v-cloak] {
  display: none;
}

button {
  cursor: pointer;
}
</style>