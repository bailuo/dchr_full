import { Module } from '@nestjs/common';
import { PublicAuthController } from './public-auth.controller';
import { ProtectedAuthService } from './protected-auth.service';

@Module({
  controllers: [ProtectedAuthController],
  providers: [ProtectedAuthService],
  exports: [ProtectedAuthService], // Export the service if it will be used by other modules
})
export class ProtectedAuthModule {}