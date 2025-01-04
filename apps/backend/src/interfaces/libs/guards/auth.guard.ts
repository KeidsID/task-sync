import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { type Request } from "express";

import { AppJwtPayload } from "~/libs/types/index.js";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const token = this._extractToken(request);
    if (!token) {
      throw new UnauthorizedException("Need auth token on request header");
    }

    try {
      const payload = await this._jwtService.verifyAsync<AppJwtPayload>(token);

      request.userId = payload.userId;
    } catch {
      throw new UnauthorizedException("Invalid auth token");
    }
    return true;
  }

  private _extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    return type === "Bearer" ? token : undefined;
  }
}
