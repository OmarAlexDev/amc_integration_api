import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { CustomRequest } from '../interfaces';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  private readonly logger = new Logger(TokenMiddleware.name);

  use(req: CustomRequest, res: FastifyReply['raw'], next: () => void) {
    this.logger.log('Extracting authorization header');
    const token = req.headers.authorization;
    if (token && token.toLowerCase().startsWith('bearer')) {
      req.token = token.substring(7);
    }
    next();
  }
}
