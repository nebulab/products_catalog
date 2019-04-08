import axios from 'axios'

import product from './product'
import comment from './comment'

axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

export const instance = axios.create()

export const getErrors = (err) => {
  const errors = []

  Object.keys(err.response.data).map(key => (
    errors.push(`${key} ${err.response.data[key]}`)
  ))

  return errors.join('\n')
}

export default {
  product,
  comment
}
