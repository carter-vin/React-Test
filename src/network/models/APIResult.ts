export default interface APIResult<T> {
  success: boolean
  message?: string
  data?: T
}
