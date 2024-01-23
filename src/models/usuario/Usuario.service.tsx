import {Usuario} from './Usuario.interface'
import axios, {AxiosResponse} from 'axios'

export class UsuarioService {
  listarUsuario(): Promise<Usuario[]> {
    return axios.get(`usuario/`).then((response: AxiosResponse<Usuario[]>) => response.data)
  }

  crearUsuario(data:any): Promise<Usuario> {
    return axios.post(`usuario/`, data).then((response: AxiosResponse<Usuario>) => response.data)
  }

  buscarUsuario(pk:number): Promise<Usuario> {
    return axios.get(`usuario/${pk}`).then((response: AxiosResponse<Usuario>) => response.data)
  }
  
  actulizarUsuario(pk:number, data:any): Promise<Usuario> {
    return axios.put(`usuario/${pk}`, data).then((response: AxiosResponse<Usuario>) => response.data)
  }
  
  eliminarUsuario(pk:number): Promise<Usuario> {
    return axios.delete(`usuario/${pk}`).then((response: AxiosResponse<Usuario>) => response.data)
  }

  sendEmail(pk:number) {
    return axios.post(`sendEmail/${pk}`).then((response) => response.status)
  }
}