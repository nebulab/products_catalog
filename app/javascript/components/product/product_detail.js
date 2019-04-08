import { mapState, mapActions, mapGetters } from 'vuex'
import * as types from '../../types'

import Comments from './comments'
import Carousel from '../shared/carousel'

export default {
  name: 'ProductDetail',

  props: {
    product_id: Number
  },

  data() {
    return {
      selectedVariantID: 0
    }
  },

  computed: {
    ...mapState({
      id: state => state.product.id,
      name: state => state.product.name,
      description: state => state.product.description,
      price: state => state.product.price,
      images: state => state.product.images,
      variants: state => state.product.variants,
      comments: state => state.product.comments
    }),

    selectedVariant() {
      const selectedVariant = {
        name: this.name,
        price: this.price,
        images: this.images
      }

      if (this.hasVariants()) {
        const foundVariant = this.getVariantByID()(this.selectedVariantID || this.variants[0].id)

        selectedVariant.name = `${this.name} ${foundVariant.name}`
        selectedVariant.price = foundVariant.price
        selectedVariant.images = [...foundVariant.images || [], ...this.images]
      }

      return selectedVariant
    }
  },

  methods: {
    ...mapActions({
      fetchProduct: 'fetchProduct'
    }),

    ...mapGetters([
      'getVariantByID'
    ]),

    hasVariants() {
      return this.variants.length > 0
    }
  },

  created() {
    this.fetchProduct(this.product_id)
  },

  render() {
    return (
      <div class="product-detail" class="row py-4">
        <div class="col-md-6">
          <Carousel images={this.selectedVariant.images} />
        </div>

        <div class="col-md-6">
          <h3 class="my-3">
            {this.selectedVariant.name}
          </h3>
          <p>
            {this.description}
          </p>

          {this.hasVariants() &&
            <div class='variant-selector'>
              <h3 class="my-3">
                Select the color
              </h3>
              <select class="form-control"
                onChange={(event) => this.selectedVariantID = event.target.value}>
                {this.variants.map(variant => (
                  <option value={variant.id}>
                    {variant.name}
                  </option>
                ))}
              </select>
            </div>
          }

          <h3 class="my-3">Product Details</h3>
          <ul class="list-group">
            <li class="list-group-item">
              <b>Price: </b>
              {this.selectedVariant.price}
              <b> euro</b>
            </li>
          </ul>
        </div>

        <Comments comments={this.comments} key={this.comments.length} />
      </div>
    )
  }
}
