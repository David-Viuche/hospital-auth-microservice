import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const clientSecret: string | undefined = request.headers['client-secret'];
    const CLIENT_SECRET = process.env.CLIENT_SECRET;

    if (clientSecret && CLIENT_SECRET) {
      if (clientSecret === CLIENT_SECRET) {
        return true;
      } else {
        throw new ForbiddenException('Invalid client secret');
      }
    } else {
      throw new ForbiddenException('Client secret not provided');
    }
  }
}
