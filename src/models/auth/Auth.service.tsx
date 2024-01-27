/* eslint-disable @typescript-eslint/no-unused-expressions */
import {AxiosResponse} from 'axios'
import AxiosConfig from '../AxiosConfig'
import {Auth} from './Auth.interface'

export class AuthService {
  activateAccount(frs: any, snd: any) {
    return AxiosConfig.post(`activate/${frs}/${snd}/`)
  }

  loginAccont(data:any): Promise<{message:string}> {
    return AxiosConfig.post('login/',data).then((response: AxiosResponse<{message:string}>) => response.data)
  }

}