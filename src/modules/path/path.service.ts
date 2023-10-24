import { Injectable } from '@nestjs/common';

@Injectable()
export class PathService {
  findAll() {
    return `This action returns all path`;
  }

  getHello(): string {
    return 'Hello Path!';
  }

  getHelloWorld(): string {
    return 'Hello World!';
  }

  findOne(id: number) {
    return `This action returns a #${id} path`;
  }
}
