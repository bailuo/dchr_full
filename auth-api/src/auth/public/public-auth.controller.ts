import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { PublicAuthService } from './public-auth.service';
import { Response } from 'express';

@Controller('public-auth')
export class PublicAuthController {
  constructor(private readonly publicAuthService: PublicAuthService) {}

  @Get('public-key')
  getPublicKey(@Res() res: Response) {
    const publicKey = this.publicAuthService.getPublicKey();
    res.set('Content-Type', 'text/plain');
    res.send(publicKey);
  }

  // @Post('login')
  // async login(@Body() loginDto: any) {
  //   return this.publicAuthService.login(loginDto);
  // }
}