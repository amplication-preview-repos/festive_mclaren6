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
import { CollectionWhereInput } from "./CollectionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CollectionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CollectionWhereInput,
  })
  @ValidateNested()
  @Type(() => CollectionWhereInput)
  @IsOptional()
  @Field(() => CollectionWhereInput, {
    nullable: true,
  })
  every?: CollectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => CollectionWhereInput,
  })
  @ValidateNested()
  @Type(() => CollectionWhereInput)
  @IsOptional()
  @Field(() => CollectionWhereInput, {
    nullable: true,
  })
  some?: CollectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => CollectionWhereInput,
  })
  @ValidateNested()
  @Type(() => CollectionWhereInput)
  @IsOptional()
  @Field(() => CollectionWhereInput, {
    nullable: true,
  })
  none?: CollectionWhereInput;
}
export { CollectionListRelationFilter as CollectionListRelationFilter };
