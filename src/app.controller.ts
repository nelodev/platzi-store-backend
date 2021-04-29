import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/alive')
  getAliveCheck() {
    return '¡Ping pong!';
  }

  @Get('/products/:productId')
  getProducts(@Param('productId') productId: string) {
    return `There you go! Product with id ${productId}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `There you go! Product with id ${productId} in category ${categoryId}`;
  }
}
