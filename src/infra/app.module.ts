import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HTTPModule } from './http/http.module';

@Module({
  imports: [HTTPModule, DatabaseModule],
})
export class AppModule {}
