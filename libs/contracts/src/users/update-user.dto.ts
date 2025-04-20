import { ApiProperty } from "@nestjs/swagger";
import { CreateHospitalDto, CreateResourceDto, CreateRoleDto, CreateRolePermissionDto, CreateUserDto } from "./create-user.dto";
import { IsOptional, IsUUID } from "class-validator";

export class UpdateHospitalDto extends CreateHospitalDto {}
export class UpdateRoleDto extends CreateRoleDto {
    @ApiProperty({ type: 'string', required: false, example: 'b56e1d2c-6d6f-4d5b-bfed-91b7344561ad', format: 'uuid', })
    @IsOptional()
    @IsUUID()
    updatedBy?: string;

    @ApiProperty({ type: 'string', required: false, example: 'b56e1d2c-6d6f-4d5b-bfed-91b7344561ad', format: 'uuid', })
    @IsOptional()
    @IsUUID()
    deletedBy?: string;
}

export class UpdateResourceDto  extends CreateResourceDto{
    @ApiProperty({
      type: String,
      description: 'User ID of the person updating the resource',
      example: 'user-1234',
      required: false,
    })
    @IsOptional()
    @IsUUID()
    updatedBy?: string;
  
    @ApiProperty({
      type: String,
      description: 'User ID of the person who deleted the resource',
      example: 'user-5678',
      required: false,
    })
    @IsOptional()
    @IsUUID()
    deletedBy?: string;
}

export class UpdateRolePermissionDto  extends CreateRolePermissionDto{
    @ApiProperty({
      type: String,
      description: 'User ID of the person updating the resource',
      example: 'user-1234',
      required: false,
    })
    @IsOptional()
    @IsUUID()
    updatedBy?: string;
  
    @ApiProperty({
      type: String,
      description: 'User ID of the person who deleted the resource',
      example: 'user-5678',
      required: false,
    })
    @IsOptional()
    @IsUUID()
    deletedBy?: string;
}
 
export class UpdateUserDto extends CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'User ID of the person updating the resource',
        example: 'user-1234',
        required: false,
      })
      @IsOptional()
      @IsUUID()
      updatedBy?: string;
    
      @ApiProperty({
        type: String,
        description: 'User ID of the person who deleted the resource',
        example: 'user-5678',
        required: false,
      })
      @IsOptional()
      @IsUUID()
      deletedBy?: string;
}
  