import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  async signup(dto: SignupDto) {
    // Implementar cadastro de usuário
    return { message: 'Usuário cadastrado.' };
  }

  async signin(dto: SigninDto) {
    // Implementar login
    return { token: 'jwt-token-mock' };
  }
}