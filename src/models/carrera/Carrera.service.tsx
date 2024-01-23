import {Carrera} from './Carrera.interface'
import axios, {AxiosResponse} from 'axios'

export class CarreraService {
  listarCarrera(): Promise<Carrera[]> {
    return axios.get(`carrera/`).then((response: AxiosResponse<Carrera[]>) => response.data)
  }
  
  buscarCarreraSegunUniversidad(pk:number): Promise<Carrera[]> {
    return axios.get(`carrera/universidad/${pk}`).then((response: AxiosResponse<Carrera[]>) => response.data)
  }

  crearCarrera(data:any): Promise<Carrera> {
    return axios.post(`carrera/`, data).then((response: AxiosResponse<Carrera>) => response.data)
  }

  buscarCarrera(pk:number): Promise<Carrera> {
    return axios.get(`carrera/${pk}`).then((response: AxiosResponse<Carrera>) => response.data)
  }
  
  actulizarCarrera(pk:number, data:any): Promise<Carrera> {
    return axios.put(`carrera/${pk}`, data).then((response: AxiosResponse<Carrera>) => response.data)
  }
  
  eliminarCarrera(pk:number): Promise<Carrera> {
    return axios.delete(`carrera/${pk}`).then((response: AxiosResponse<Carrera>) => response.data)
  }
}