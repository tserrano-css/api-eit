import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dos')
  getDos(): string {
    return 'Hola Escuela IT';
  }

  @Get('producto/:id')
  getProducto(@Param() params): string {
    return `El producto con ${params.id}`;
  }

  @Get('buscar/:query/:page')
  getBuscarPag(@Param() params): string {
    return `Buscar: ${params.query} - Pagina: ${params.page}`;
  }

  @Get('buscar/:query/:page/:limit')
  getBuscarPagLimit(
    @Param('query') query,
    @Param('page') page,
    @Param('limit') limit,
  ): string {
    return `Buscar: ${query} - Pagina: ${page} - Limite: ${limit}`;
  }
}
