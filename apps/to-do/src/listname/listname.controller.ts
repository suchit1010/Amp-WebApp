import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ListnameService } from "./listname.service";
import { ListnameControllerBase } from "./base/listname.controller.base";

@swagger.ApiTags("listnames")
@common.Controller("listnames")
export class ListnameController extends ListnameControllerBase {
  constructor(
    protected readonly service: ListnameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
