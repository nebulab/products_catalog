import { mapState, mapActions } from 'vuex'

import ProductCard from './product_card'
import Pagination from '../shared/pagination'

export default {
  name: 'ProductList',

  computed: {
    ...mapState({
      products: state => state.products.products,
      count: state => state.products.count,
      current_page: state => state.products.current_page,
      pages: state => state.products.pages,
      per_page: state => state.products.per_page
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
        <h1 class="my-4">
          Products list <br />
          <small class="text-muted">
            Page number {this.current_page}
          </small>
        </h1>
        <div class="row">
          {this.products.map(product => (
            <ProductCard product={product} />
          ))}
        </div>

        <Pagination count={this.count} currentPage={this.current_page}
          pages={this.pages} perPage={this.per_page} />
      </div>
    )
  }
}
