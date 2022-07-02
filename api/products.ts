import { http } from './_request'

export function getAllProduct() {
  return http.get<any[]>('/products')
}
