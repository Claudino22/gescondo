import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // Implementar verificação de papel do usuário
    // Exemplo: return user.role === 'administrador';
    return true;
  }
}