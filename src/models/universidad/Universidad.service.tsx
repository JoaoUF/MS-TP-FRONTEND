import {Universidad} from './Universidad.interface'
import axios, {AxiosResponse} from 'axios'

export class UniversidadService {
  listarUniversidad(): Promise<Universidad[]> {
    return axios.get(`universidad/`).then((response: AxiosResponse<Universidad[]>) => response.data)
  }

  crearUniversidad(data:any): Promise<Universidad> {
    return axios.post(`universidad/`, data).then((response: AxiosResponse<Universidad>) => response.data)
  }

  buscarUniversidad(pk:number): Promise<Universidad> {
    return axios.get(`universidad/${pk}`).then((response: AxiosResponse<Universidad>) => response.data)
  }
  
  actulizarUniversidad(pk:number, data:any): Promise<Universidad> {
    return axios.put(`universidad/${pk}`, data).then((response: AxiosResponse<Universidad>) => response.data)
  }
  
  eliminarUniversidad(pk:number): Promise<Universidad> {
    return axios.delete(`universidad/${pk}`).then((response: AxiosResponse<Universidad>) => response.data)
  }
}