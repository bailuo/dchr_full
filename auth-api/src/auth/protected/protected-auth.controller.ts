import { Controller, Post, Body } from '@nestjs/common';
import { ProtectedAuthService } from './protected-auth.service';

@Controller('protected-auth')
export class ProtectedAuthController {
  constructor(private readonly protectedAuthService: ProtectedAuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    return this.protectedAuthService.login(loginDto);
  }
}
