import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductList',

  computed: {
    ...mapState({
      products: state => state.products.products
    }),
  },

  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    })
  },

  created() {
    this.fetchProducts()
  },

  render() {
    return (
      <div>
        <h1>Product list</h1>
        <ul>
          {this.products.map(product => (
            <li>
              { product.name }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
