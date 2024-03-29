import { Module } from '@nestjs/common';
import { PublicAuthModule } from './public/public-auth.module';
import { ProtectedAuthModule } from './protected/protected-auth.module';

@Module({
  imports: [PublicAuthModule, ProtectedAuthModule],
  exports: [PublicAuthModule, ProtectedAuthModule], // Export the child modules
})
export class AuthModule {}