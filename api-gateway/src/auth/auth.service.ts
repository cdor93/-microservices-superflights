import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { UserMSG } from 'src/common/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientProxy: ClientProxySuperFlights,
    private readonly jwtService: JwtService,
  ) {}

  private _clientProxySuperFlights = this.clientProxy.clientProxyUsers()

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this._clientProxySuperFlights.send(UserMSG.VALID_USER, {username, password}).toPromise()
    
    if (user) return user;

    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };

    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDTO: UserDTO) {
    return await this._clientProxySuperFlights.send(UserMSG.CREATE, userDTO).toPromise();
  }
}
