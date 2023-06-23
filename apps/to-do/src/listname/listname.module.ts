import { Module } from "@nestjs/common";
import { ListnameModuleBase } from "./base/listname.module.base";
import { ListnameService } from "./listname.service";
import { ListnameController } from "./listname.controller";
import { ListnameResolver } from "./listname.resolver";

@Module({
  imports: [ListnameModuleBase],
  controllers: [ListnameController],
  providers: [ListnameService, ListnameResolver],
  exports: [ListnameService],
})
export class ListnameModule {}
