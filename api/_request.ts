import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const BASE_URL = `http://localhost:3001/api/v1`
const ERR_OK = 200

export type OnError = (options?: {
  code?: number
  message: string
  httpStatus: number
  config: AxiosRequestConfig
}) => any
export type OnRequest = (config: AxiosRequestConfig) => AxiosRequestConfig

export class Http {
  public instance: AxiosInstance
  private _onError: OnError
  private _onRequest: OnRequest

  constructor(options?: { onError?: OnError; onRequest?: OnRequest }) {
    options = options || {}

    const _config = {
      baseURL: BASE_URL,
      timeout: 35 * 1000,
    }

    this._onError =
      options.onError ||
      (payload => {
        throw new Error(payload.message)
      })

    this._onRequest = options.onRequest || (config => config)
    this.instance = axios.create(_config)
    this._init()
  }

  private _init() {
    this.instance.interceptors.request.use(config => this._onRequest(config))
    this.instance.interceptors.response.use(res => {
      const { status, config, data } = res
      if (status !== 200) {
        return this._onError({
          httpStatus: status,
          config,
          message: 'international error',
        })
      }

      const { code, data: _data, message } = data
      if (code !== ERR_OK) {
        return this._onError({
          httpStatus: status,
          config,
          message,
          code,
        })
      }

      return _data
    })
  }

  private _fetch<R, P = any>(
    method: AxiosRequestConfig['method'],
    endpoint: string,
    params?: P,
    config: AxiosRequestConfig = {},
  ) {
    const _config: AxiosRequestConfig = { ...config }
    _config.url = endpoint || _config.url
    if (method.toLowerCase() === 'get') {
      _config.params = params || config.params || {}
    } else {
      if (params || config.data) {
        _config.data = params || config.data
      }
    }

    return this.instance.request(_config) as Promise<R>
  }

  public get<R, P = any>(
    endpoint: string,
    params?: P,
    config: AxiosRequestConfig = {},
  ) {
    return this._fetch<R, P>('get', endpoint, params, config)
  }

  public post<R, P = any>(
    endpoint: string,
    params?: P,
    config: AxiosRequestConfig = {},
  ) {
    return this._fetch<R, P>('post', endpoint, params, config)
  }

  public put<R, P = any>(
    endpoint: string,
    params?: P,
    config: AxiosRequestConfig = {},
  ) {
    return this._fetch<R, P>('put', endpoint, params, config)
  }

  public delete<R, P = any>(
    endpoint: string,
    params?: P,
    config: AxiosRequestConfig = {},
  ) {
    return this._fetch<R, P>('delete', endpoint, params, config)
  }

  public setOnRequest(onRequest: OnRequest) {
    this._onRequest = onRequest
  }

  public setOnError(onError: OnError) {
    this._onError = onError
  }
}

export const http = new Http()
