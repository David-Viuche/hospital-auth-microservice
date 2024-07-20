import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RequestLogger implements NestInterceptor {
  private readonly logger = new Logger(RequestLogger.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      tap({
        next: (value) => {
          setTimeout(() => {
            this.logger.log(
              `REQUEST ${req.path} ${req.method} RES ${res.statusCode} HEADERS ${JSON.stringify(req.headers)} RESPONSE ${JSON.stringify(value)}`,
            );
          }, 0);
        },
        error: (err) => {
          setTimeout(() => {
            this.logger.error(
              `REQUEST ${req.path} ${req.method} RES ${res.statusCode} HEADERS ${JSON.stringify(req.headers)} ERROR ${err}`,
            );
          }, 0);
        },
      }),
    );
  }
}
