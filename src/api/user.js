
import { $get } from '../net/fetch'

export const getUserInfo = ({ url }) => {
  return $get({
    url: '/user/userInfo'
  })
}