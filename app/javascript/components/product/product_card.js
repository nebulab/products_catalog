import routes from '../../routes'

export default {
  name: 'ProductCard',

  props: {
    product: Object
  },

  computed: {
    mainImage() {
      let mainImage = 'http://placehold.it/700x400?text=Default Image'

      if (this.product.images[0]) {
        mainImage = this.product.images[0].url
      }

      return mainImage
    },

    shortDescription() {
      const maxChar = 50
      return this.product.description.length > maxChar
        ? `${this.product.description.substring(0, maxChar)}...`
        : this.product.description
    }
  },

  methods: {
    productPath() {
      return routes.product(this.product.id)
    }
  },

  render() {
    return (
      <div class="product-card col-lg-4 col-sm-6 mb-4">
        <div class="card h-100">
          <a href={this.productPath()}>
            <img class="product-card__image card-img-top" src={this.mainImage} alt="Product image" />
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href={this.productPath()}>
                {this.product.name}
              </a>
            </h4>
            <p class="card-text">
              {this.shortDescription}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
