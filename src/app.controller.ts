import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 여기에 지정하는 prefix는 global이 아닙니다
export class AppController {
  constructor(private readonly appService: AppService) {}

  // http://localhost:3000 ('/'가 생략된 루트 경로)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
