let products = [
    {
        name: 'Iphone 12',
        price: 2000,
        quantity: 1,
        category: 'Téléphone',
    },
    {
        name: 'ASUS TUF a15',
        price: 1200,
        quantity: 1,
        category: 'Ordinateur Portable',
    },
    {
        name: 'Samsung Odyssey',
        price: 500,
        quantity: 1,
        category: 'Écran'
    }
]

const app = Vue.createApp({
    data() {
        return {
            inventory: products,
            tempTable: {},
            editIndex: -1,
            isVisible: false,
        }
    },

    methods: {
        addProduct(){
            if(this.tempTable.name && this. tempTable.price && this.tempTable.quantity && this.tempTable.category){
                this.inventory.push(this.tempTable)
                this.tempTable = {}
            } else {
                alert("Veuillez remplir tous les champs")
            }
        },
        deleteProduct(index){
            if(confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")){
                this.inventory.splice(index, 1)
            }
        },
        openModal(index){
            this.isVisible = true
            this.editIndex = index
            this.tempTable = {...this.inventory[index]}
        },
        closeModal(){
            this.isVisible = false
            this.editIndex = -1
            this.tempTable = {}
        },
        editProduct(){
            if(this.tempTable.name && this.tempTable.price && this.tempTable.quantity && this.tempTable.category){
                this.inventory[this.editIndex] = this.tempTable
                this.tempTable = {}
                this.closeModal()
            } else {
                alert("Veuillez remplir tous les champs")
            }
        },
        localSave(){
            localStorage.setItem('inventory', JSON.stringify(this.inventory))
        }
    },
    watch: {
        inventory:{
            deep: true,
            handler(){
                this.localSave()
            }
        }
    },
    created(){
        const storedSave = localStorage.getItem('inventory')
        if(storedSave){
            this.inventory = JSON.parse(storedSave)
        }
    }
})
app.mount('#app')