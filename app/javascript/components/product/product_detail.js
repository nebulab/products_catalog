import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductDetail',

  props: {
    product_id: Number
  },

  computed: {
    ...mapState({
      id: state => state.product.id,
      name: state => state.product.name
    }),
  },

  methods: {
    ...mapActions({
      fetchProduct: 'fetchProduct'
    })
  },

  created() {
    this.fetchProduct(this.product_id)
  },

  render() {
    return (
      <div class="product-detail">
        <h1 class="product-detail__name">
          { this.name }
        </h1>
      </div>
    )
  }
}
