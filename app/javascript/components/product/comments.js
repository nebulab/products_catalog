import Comment from './comment'
import CommentForm from './comment_form'

export default {
  name: 'Comments',

  props: {
    comments: Array
  },

  data() {
    return {
      showCommentForm: false,
      buttonTitle: 'Add comment'
    }
  },

  methods: {
    areThereComments() {
      return this.comments.length > 0
    },

    toggleCommentForm() {
      this.showCommentForm = !this.showCommentForm
    }
  },

  render() {
    let buttonTitle = 'Add comment'
    if (this.showCommentForm) {
      buttonTitle = 'Close'
    }

    return (
      this.areThereComments() &&
        <div class="product-comments col-md-12 mt-3">
          <div class="product-comments__heading w-100">
            <h3 class="product-comments__title mb-3">
              Comments
            </h3>

            <button type="button" class="product-comments__add btn btn-primary"
              onClick={this.toggleCommentForm}>
              {buttonTitle}
            </button>
          </div>

          <transition name="slide">
            <CommentForm v-show={this.showCommentForm} />
          </transition>

          {this.comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </div>
    )
  }
}
