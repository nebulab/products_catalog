import { mapActions } from 'vuex'

import CommentForm from './comment_form'

export default {
  name: 'Comment',

  props: {
    comment: Object
  },

  data() {
    return {
      showEditForm: false
    }
  },

  methods: {
    ...mapActions({
      deleteComment: 'deleteComment'
    }),

    delete(event) {
      this.deleteComment(this.comment.id)
    },

    toggleEditForm(event) {
      this.showEditForm = !this.showEditForm
    }
  },

  render() {
    return (
      <div class="product-comment card mt-2">
        <div class="card-body">
          <h4 class="card-title">{this.comment.title}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{this.comment.created_at}</h6>
          <p class="card-text">{this.comment.description}</p>

          <span class="product-comment__actions">
            <button type="button" class="product-comment__edit btn btn-link"
              vOn:click_stop_prevent={this.toggleEditForm}>edit</button>
            <button type="button" class="product-comment__delete btn btn-link"
              vOn:click_stop_prevent={this.delete}>x</button>
          </span>
        </div>

        <transition name="slide">
          <div class="col-md-12">
            <CommentForm v-show={this.showEditForm} comment={this.comment} />
          </div>
        </transition>
      </div>
    )
  }
}
