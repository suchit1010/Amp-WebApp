/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ListnameWhereUniqueInput } from "./ListnameWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ListnameUpdateInput } from "./ListnameUpdateInput";

@ArgsType()
class UpdateListnameArgs {
  @ApiProperty({
    required: true,
    type: () => ListnameWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ListnameWhereUniqueInput)
  @Field(() => ListnameWhereUniqueInput, { nullable: false })
  where!: ListnameWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ListnameUpdateInput,
  })
  @ValidateNested()
  @Type(() => ListnameUpdateInput)
  @Field(() => ListnameUpdateInput, { nullable: false })
  data!: ListnameUpdateInput;
}

export { UpdateListnameArgs as UpdateListnameArgs };
