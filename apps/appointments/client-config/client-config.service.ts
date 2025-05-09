import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config({ path: './apps/users/.env' });
@Injectable()
export class ClientConfigService {

    constructor(private configService: ConfigService) { }
    
    getUsersClientUrl(): string {
        return this.configService.get<string>('NOTIFICATIONURL')
    }

    getUsersClientQueue(): string {
        return this.configService.get<string>('NOTIFICATIONQUEUE')
    }

    get NotificationsClientOptions(): ClientOptions {
        return {
            transport: Transport.RMQ,
            options: {
                urls: [process.env.NOTIFICATIONURL],  // RabbitMQ URL for the Notification Microservice
                queue: process.env.NOTIFICATIONQUEUE, // The queue name
                queueOptions: {
                    durable: false,
                }
            }
        }
    }

    get ManagementClientOptions(): ClientOptions {
        return {
            transport: Transport.RMQ,
            options: {
                urls: ['amqps://ufmbkfxp:WgpbVbiwAwpAqi0_1I243ebBVa5Mb5x3@shrimp.rmq.cloudamqp.com/ufmbkfxp'],
                queue: 'management_queue',
                queueOptions: {
                    durable: false,
                }
            }
        }
    }

}
