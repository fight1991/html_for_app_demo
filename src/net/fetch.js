import Base from './base'

export const $get = ({ url }) => {
  return new Base(url).get()
}
export const $post = ({ url, data }) => {
  return new Base(url).post(data)
}