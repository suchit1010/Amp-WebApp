import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ListnameServiceBase } from "./base/listname.service.base";

@Injectable()
export class ListnameService extends ListnameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
