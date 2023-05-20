import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/findByEmail')
  findByEmail(@Query() query): Promise<User> {
    return this.userService.findByEmail(query.email);
  }

  @Get()
  findFrist(): Promise<User> {
    
    return this.userService.findFrist();
  }
}