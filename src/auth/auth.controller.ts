import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
// import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('test')
  async test(@Body() dto: AuthDto) {
    console.log(dto, 'dto');
    return this.authService.test();
  }

  // @Post('login')
  // async login(@Body() loginDto: LoginDto) {
  //   const token = await this.authService.login(loginDto);
  //   return { token };
  // }
}
