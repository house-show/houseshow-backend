import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
// import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    console.log(dto, 'dto');
    return this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Body() loginDto: AuthDto) {
    const token = await this.authService.signin(loginDto);
    return { token };
  }
}
