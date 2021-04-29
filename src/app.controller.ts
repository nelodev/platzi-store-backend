import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products query with brand ${brand}, limit ${limit} and offset ${offset}`;
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
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
