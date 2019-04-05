export default {
  name: 'Carousel',

  props: {
    images: Array
  },

  updated() {
    $('.owl-carousel').owlCarousel({
      margin: 10,
      nav: true,
      items: this.images.length,
      autoWidth: true,
      responsive: {
        0: {
          items: 1
        }
      }
    })
  },

  render() {
    return (
      <div class="owl-carousel owl-theme">
        {this.images.map(image => (
          <div class="item">
            <img src={image.url} style="width: 500px" alt="image" class="owl-carousel__image" />
          </div>
        ))}
      </div>
    )
  }
}
