/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IndexWhereInput } from "./IndexWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IndexListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IndexWhereInput,
  })
  @ValidateNested()
  @Type(() => IndexWhereInput)
  @IsOptional()
  @Field(() => IndexWhereInput, {
    nullable: true,
  })
  every?: IndexWhereInput;

  @ApiProperty({
    required: false,
    type: () => IndexWhereInput,
  })
  @ValidateNested()
  @Type(() => IndexWhereInput)
  @IsOptional()
  @Field(() => IndexWhereInput, {
    nullable: true,
  })
  some?: IndexWhereInput;

  @ApiProperty({
    required: false,
    type: () => IndexWhereInput,
  })
  @ValidateNested()
  @Type(() => IndexWhereInput)
  @IsOptional()
  @Field(() => IndexWhereInput, {
    nullable: true,
  })
  none?: IndexWhereInput;
}
export { IndexListRelationFilter as IndexListRelationFilter };
