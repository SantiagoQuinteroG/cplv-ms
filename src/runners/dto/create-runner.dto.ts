import { IsDate, IsString } from 'class-validator';

export class CreateRunnerDto {
  @IsString()
  docNumber: string;
  @IsDate()
  birthday: Date;
  @IsString()
  gender: string;
  @IsString()
  country: string;
  @IsString()
  state: string;
  @IsString()
  city: string;
  @IsString()
  address: string;
  @IsString()
  eps: string;
  @IsString()
  rh: string;
}
