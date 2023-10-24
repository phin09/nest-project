import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PathModule } from './modules/path/path.module';

@Module({
  imports: [UsersModule, PathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
