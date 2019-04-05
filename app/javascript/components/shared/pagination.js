import { mapActions } from 'vuex'

export default {
  name: 'Pagination',

  props: {
    count: Number,
    currentPage: Number,
    pages: Number,
    perPage: Number
  },

  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    }),

    changePage(event, page) {
      event.preventDefault()

      if (page !== this.currentPage) {
        this.fetchProducts(page)
      }
    },

    itemClasses(page) {
      let classes = ['page-item']

      if (page === this.currentPage) {
        classes.push('active')
      }

      return classes.join(' ')
    },

    prevItemClasses() {
      let classes = ['page-item']

      if (this.currentPage === 1) {
        classes.push('disabled')
      }

      return classes.join(' ')
    },

    nextItemClasses() {
      let classes = ['page-item']

      if (this.pages === this.currentPage) {
        classes.push('disabled')
      }

      return classes.join(' ')
    }
  },

  render() {
    const pages = Array.from(Array(this.pages).keys()).map(value => (
      <li class={this.itemClasses(value + 1)}>
        <a class="page-link" href="#"
          onClick={(event) => this.changePage(event, value + 1)}>
          {value + 1}
        </a>
      </li>
    ))

    return (
      <nav aria-label="Products navigation" class="d-flex justify-content-center">
        <ul class="pagination">
          <li class={this.prevItemClasses()}>
            <a class="page-link" href="#"
              onClick={(event) => this.changePage(event, this.currentPage - 1)}>
              Previous
            </a>
          </li>
          {pages}
          <li class={this.nextItemClasses()}>
            <a class="page-link" href="#"
              onClick={(event) => this.changePage(event, this.currentPage + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
