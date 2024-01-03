import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  //private readonly jwtService: JwtService
  constructor(private prisma: PrismaService) {}

  async test() {
    return 'test';
  }

  // async validateUser(username: string, password: string): Promise<any> {
  //   // TODO: Implement user validation logic here
  //   // You can check the username and password against your database or any other data source

  //   // For demonstration purposes, let's assume the username is "admin" and the password is "password"
  //   if (username === 'admin' && password === 'password') {
  //     return { username: 'admin' };
  //   }

  //   return null;
  // }

  // async login(user: any): Promise<string> {
  //   // Generate and return a JWT token for the authenticated user
  //   const payload = { username: user.username };
  //   return this.jwtService.sign(payload);
  // }
}
