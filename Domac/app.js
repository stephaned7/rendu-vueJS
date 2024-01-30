let products = [
    {
        name: 'Big Mac',
        image: '../assets/domac/big-mac.png',
        price: 5.99,
        quantity: 0,
        id: 1,
        active: false,
    },
    {
        name: 'McChicken',
        image: '../assets/domac/mc-chicken.png',
        price: 4.99,
        quantity: 0,
        id: 2,
        active: false,
    },
    {
        name: 'Double Cheeseburger',
        image: '../assets/domac/double-cb.png',
        price: 4.99,
        quantity: 0,
        id: 3,
        active: false,
    },
    {
        name: 'fries',
        image: '../assets/domac/fries.png',
        price: 2.99,
        quantity: 0,
        id: 4,
        active: false,
    },
    {
        name: 'McNuggets',
        image: '../assets/domac/nuggets.png',
        price: 3.49,
        quantity: 0,
        id: 5,
        active: false,
    },
    {
        name: 'Salad',
        image: '../assets/domac/salad.png',
        price: 2.79,
        quantity: 0,
        id: 6,
        active: false,
    },
    {
        name: 'Coke',
        image: '../assets/domac/cola.png',
        price: 1.99,
        quantity: 0,
        id: 7,
        active: false,
    },
    {
        name: 'Ice Tea',
        image: '../assets/domac/lipton.png',
        price: 1.99,
        quantity: 0,
        id: 8,
        active: false,
    },
    {
        name: 'Water',
        image: '../assets/domac/water.png',
        price: 1.49,
        quantity: 0,
        id: 9,
        active: false,
    }
]

const app = Vue.createApp({
    data(){
        return({
            counter: 0,
            prods: products,
        })
    },

    methods:{
        toggle(item){
            item.active = !item.active;
            item.quantity = 1;
        },
        add(prod){
            prod.quantity++;
        },
        remove(prod){
            if(prod.active && prod.quantity > 1){
                prod.quantity--;
            }
        },
        calcTotalProduit(prod){
            let total = (prod.quantity * prod.price);
            return total.toFixed(2);
        },
        calcTotalCart(){
            return this.prods.reduce((acc,prod) => {
                if(prod.active){
                    return acc + +this.calcTotalProduit(prod);
                } else {
                    return acc;
                };
            },0).toFixed(2);
        },
    },
    
})

app.mount('#app')