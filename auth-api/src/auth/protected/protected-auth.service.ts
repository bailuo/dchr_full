import { Injectable } from '@nestjs/common';

@Injectable()
export class ProtectedAuthService {
  async login(loginDto: any) {
    // Implement your login logic here
    return 'Protected user logged in';
  }
}