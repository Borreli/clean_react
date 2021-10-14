import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

// "AxiosHttpAdapter"
export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        headers: data.headers,
        data: data.body
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
