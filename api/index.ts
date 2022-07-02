import { http, OnError, OnRequest } from './_request'
export * as ProductApi from './products'

export const setErrorHandler = (onError: OnError) => {
  http.setOnError(onError)
}

export const setRequestHandler = (onRequest: OnRequest) => {
  http.setOnRequest(onRequest)
}
