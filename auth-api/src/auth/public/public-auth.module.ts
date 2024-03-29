import { Module } from '@nestjs/common';
import { PublicAuthController } from './public-auth.controller';
import { PublicAuthService } from './public-auth.service';

@Module({
  controllers: [PublicAuthController],
  providers: [PublicAuthService],
  exports: [PublicAuthService], // Export the service if it will be used by other modules
})
export class PublicAuthModule {}