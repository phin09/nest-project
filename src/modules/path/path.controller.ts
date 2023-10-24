import { Controller, Get, Param } from '@nestjs/common';
import { PathService } from './path.service';

/**
 * routing : 어떤 요청을 어느 controller에서 받아 처리할지 결정하여 원하는 곳으로 보내는 것
 * handler : 어떠한 목적에 특화된 기능(function/method)
 */
@Controller('path') // 여기서 'path'는 경로 prefix
export class PathController {
  constructor(private readonly pathService: PathService) {}

  /**
   * @Get : HTTP request method decorator
   * findAll() : method
   * http://localhost:3000/path : API Endpoint
   */
  @Get() // http://localhost:3000/path ('/'가 생략된 루트 경로)
  findAll() {
    return this.pathService.findAll();
  }

  @Get('/hello') // http://localhost:3000/path/hello
  getHello(): string {
    return this.pathService.getHello();
  }

  @Get('/hello/world') // http://localhost:3000/path/hello/world
  getHelloWorld(): string {
    return this.pathService.getHelloWorld();
  }

  @Get(':id') // http://localhost:3000/path/1 (1 자리에 id 값을 넣습니다)
  findOne(@Param('id') id: string) {
    return this.pathService.findOne(+id);
  }

  // TODO 와일드카드
}
