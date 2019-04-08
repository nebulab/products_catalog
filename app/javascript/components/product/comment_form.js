import { mapActions } from 'vuex'

export default {
  name: 'CommentForm',

  props: {
    comment: Object, default: {}
  },

  data() {
    return {
      title: '',
      description: ''
    }
  },

  methods: {
    ...mapActions({
      addComment: 'addComment',
      updateComment: 'updateComment'
    }),

    isEdit() {
      return this.comment
    },

    submit(event) {
      event.preventDefault()

      if (!this.isEdit()) {
        this.addComment({
          title: this.title,
          description: this.description
        })
      } else {
        this.updateComment({
          id: this.comment.id,
          title: this.title,
          description: this.description
        })
      }
    }
  },

  mounted() {
    if (this.isEdit()) {
      this.title = this.comment.title,
      this.description = this.comment.description
    }
  },

  render() {
    return (
      <form class="comment-form">
        <div class="form-group">
          <label for="commentTitle">Title</label>
          <input type="text" class="form-control" id="commentTitle" placeholder="Insert the comment title"
            vModel_trim={this.title} />
        </div>
        <div class="form-group">
          <label for="commentDescription">Description</label>
          <textarea class="form-control" id="commentDescription" placeholder="Insert the comment"
            vModel_trim={this.description} />
        </div>
        <button type="submit" class="btn btn-primary"
          vOn:click_stop_prevent={this.submit}>
          Submit
        </button>
      </form>
    )
  }
}
