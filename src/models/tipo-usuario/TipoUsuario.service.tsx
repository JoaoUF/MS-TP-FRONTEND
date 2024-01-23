import {TipoUsuario} from './TipoUsuario.interface'
import axios, {AxiosResponse} from 'axios'

export class UniversidadService {
  listarTipoUsuario(): Promise<TipoUsuario[]> {
    return axios.get(`tipo-usuario/`).then((response: AxiosResponse<TipoUsuario[]>) => response.data)
  }

  crearTipoUsuario(data:any): Promise<TipoUsuario> {
    return axios.post(`tipo-usuario/`, data).then((response: AxiosResponse<TipoUsuario>) => response.data)
  }

  buscarTipoUsuario(pk:number): Promise<TipoUsuario> {
    return axios.get(`tipo-usuario/${pk}`).then((response: AxiosResponse<TipoUsuario>) => response.data)
  }
  
  actulizarTipoUsuario(pk:number, data:any): Promise<TipoUsuario> {
    return axios.put(`tipo-usuario/${pk}`, data).then((response: AxiosResponse<TipoUsuario>) => response.data)
  }
  
  eliminarTipoUsuario(pk:number): Promise<TipoUsuario> {
    return axios.delete(`tipo-usuario/${pk}`).then((response: AxiosResponse<TipoUsuario>) => response.data)
  }
}