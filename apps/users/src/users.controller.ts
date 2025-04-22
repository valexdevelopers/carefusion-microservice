import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { CreateUserDto, LoginUserDto, USERPATTERN } from '@shared/contracts/users';
import { catchError, from, throwError } from 'rxjs';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @MessagePattern(USERPATTERN.CREATE)
  create(@Payload() createUserDto: CreateUserDto) {
      return from(this.userService.create(createUserDto)).pipe(
          catchError((err) => {
              console.error("Error in UsersService:", err);
              return throwError(() => new RpcException({
                  statusCode: err.response.statusCode || 500,
                  message: err.message || "Internal Server Error",
                  error: err.response.error || "Sever error",
              }));

          })
      )
  }

  @MessagePattern(USERPATTERN.LOGIN)
  login(@Payload() loginUserDto: LoginUserDto) {
      return from(this.userService.login(loginUserDto)).pipe(
          catchError((err) => {
              console.error("Error in UsersService:", err);
              return throwError(() => new RpcException({
                  statusCode: err.response.statusCode || 500,
                  message: err.message || "Internal Server Error",
                  error: err.response.error || "Sever error",
              }));

          })
      );
  }


  // @MessagePattern(USERPATTERN.VERIFY)
  // verify(@Payload() { id, token }) {
  //     return from(this.userService.verify(id, token)).pipe(
  //         catchError((err) => {
  //             console.error("Error in UsersService:", err);
  //             return throwError(() => new RpcException({
  //                 statusCode: err.response.statusCode || 500,
  //                 message: err.message || "Internal Server Error",
  //                 error: err.response.error || "Sever error",
  //             }));

  //         })
  //     );
  // }

  // @MessagePattern(USERPATTERN.RESEND)
  // resend(@Payload() { id }) {
  //     return from(this.userService.resendVerificationToken(id)).pipe(
  //         catchError((err) => {
  //             console.error("Error in UsersService:", err);
  //             return throwError(() => new RpcException({
  //                 statusCode: err.response.statusCode || 500,
  //                 message: err.message || "Internal Server Error",
  //                 error: err.response.error || "Sever error",
  //             }));

  //         })
  //     );
  // }

  @MessagePattern(USERPATTERN.FINDALL)
  findAll(@Payload() data: {limit: number, offset: number, status?: string}) {
      return from(this.userService.findAll(data.limit, data.offset, data.status)).pipe(
          catchError((err) => {
              console.error("Error in UsersService:", err);
              return throwError(() => new RpcException({
                  statusCode: err.response.statusCode || 500,
                  message: err.message || "Internal Server Error",
                  error: err.response.error || "Sever error",
              }));

          })
      );
  }

  @MessagePattern(USERPATTERN.FINDONEBYID)
  findOne(@Payload() id: string) {
      return from(this.userService.findOne(id)).pipe(
          catchError((err) => {
              console.error("Error in UsersService:", err);
              return throwError(() => new RpcException({
                  statusCode: err.response.statusCode || 500,
                  message: err.message || "Internal Server Error",
                  error: err.response.error || "Sever error",
              }));

          })
      );
  }



  // @MessagePattern(USERPATTERN.UPDATE)
  // update(@Payload() data: {id: string, updateUserDto: UpdateUserDto}) {
  //     return from(this.userService.update(data.id, data.updateUserDto)).pipe(
  //         catchError((err) => {
  //             console.error("Error in UsersService:", err);
  //             return throwError(() => new RpcException({
  //                 statusCode: err.response.statusCode || 500,
  //                 message: err.message || "Internal Server Error",
  //                 error: err.response.error || "Sever error",
  //             }));

  //         })
  //     );
  // }

  @MessagePattern(USERPATTERN.DELETE)
  remove(@Payload() id: string, @Payload() updaterId: string) {
      return from(this.userService.remove(id, updaterId)).pipe(
          catchError((err) => {
              console.error("Error in UsersService:", err);
              return throwError(() => new RpcException({
                  statusCode: err.response.statusCode || 500,
                  message: err.message || "Internal Server Error",
                  error: err.response.error || "Sever error",
              }));

          })
      );
  }


  @MessagePattern(USERPATTERN.PERMANENTDELETE)
  permanentDelete(@Payload() id: string) {
      return from(this.userService.permanentDelete(id)).pipe(
          catchError((err) => {
              console.error("Error in UsersService:", err);
              return throwError(() => new RpcException({
                  statusCode: err.response.statusCode || 500,
                  message: err.message || "Internal Server Error",
                  error: err.response.error || "Sever error",
              }));

          })
      );
  }


  // @MessagePattern(USERPATTERN.RESETPASSWORD)
  // forgotPassword(@Payload() email: string) {
  //     return from(this.userService.forgotPassword(email)).pipe(
  //         catchError((err) => {
  //             console.error("Error in UsersService:", err);
  //             return throwError(() => new RpcException({
  //                 statusCode: err.response.statusCode || 500,
  //                 message: err.message || "Internal Server Error",
  //                 error: err.response.error || "Sever error",
  //             }));

  //         })
  //     );
  // }

  // @MessagePattern(USERPATTERN.CHANGEPASSWORD)
  // changePassword(@Payload() updateUserPasswordDto: UpdateUserPasswordDto) {
  //     return from(this.userService.changePassword(updateUserPasswordDto)).pipe(
  //         catchError((err) => {
  //             console.error("Error in UsersService:", err);
  //             return throwError(() => new RpcException({
  //                 statusCode: err.response.statusCode || 500,
  //                 message: err.message || "Internal Server Error",
  //                 error: err.response.error || "Sever error",
  //             }));

  //         })
  //     );
  // }
}
