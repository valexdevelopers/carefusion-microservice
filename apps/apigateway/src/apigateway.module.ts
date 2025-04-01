import { Module } from '@nestjs/common';
import { ApigatewayController } from './apigateway.controller';
import { ApigatewayService } from './apigateway.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ClientConfigModule } from './client-config/client-config.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule
    .forRoot({
      isGlobal: true,
    }),
    ClientConfigModule,
    CloudinaryModule,
    UsersModule,
  ],
  controllers: [ApigatewayController],
  providers: [ApigatewayService],
})
export class ApigatewayModule {}
