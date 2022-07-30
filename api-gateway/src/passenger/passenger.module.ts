import { Module } from '@nestjs/common';
import { ProxyModule } from '../common/proxy/proxy.module';
import { PassengerController } from 'src/passenger/passenger.controller';

@Module({
  imports: [ProxyModule],
  controllers: [PassengerController],
})
export class PassengerModule {}
