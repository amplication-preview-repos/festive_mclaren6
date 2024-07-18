/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChangeLogService } from "../changeLog.service";
import { ChangeLogCreateInput } from "./ChangeLogCreateInput";
import { ChangeLog } from "./ChangeLog";
import { ChangeLogFindManyArgs } from "./ChangeLogFindManyArgs";
import { ChangeLogWhereUniqueInput } from "./ChangeLogWhereUniqueInput";
import { ChangeLogUpdateInput } from "./ChangeLogUpdateInput";

export class ChangeLogControllerBase {
  constructor(protected readonly service: ChangeLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChangeLog })
  async createChangeLog(
    @common.Body() data: ChangeLogCreateInput
  ): Promise<ChangeLog> {
    return await this.service.createChangeLog({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        entityType: true,
        changes: true,
        entity: true,
        changeType: true,
        version: true,
        createdBy: true,
        entityTypeField: true,
        versionField: true,
        entityField: true,
        changeTypeField: true,
        createdByField: true,
        createdAtField: true,
        changesField: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ChangeLog] })
  @ApiNestedQuery(ChangeLogFindManyArgs)
  async changeLogs(@common.Req() request: Request): Promise<ChangeLog[]> {
    const args = plainToClass(ChangeLogFindManyArgs, request.query);
    return this.service.changeLogs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        entityType: true,
        changes: true,
        entity: true,
        changeType: true,
        version: true,
        createdBy: true,
        entityTypeField: true,
        versionField: true,
        entityField: true,
        changeTypeField: true,
        createdByField: true,
        createdAtField: true,
        changesField: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChangeLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async changeLog(
    @common.Param() params: ChangeLogWhereUniqueInput
  ): Promise<ChangeLog | null> {
    const result = await this.service.changeLog({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        entityType: true,
        changes: true,
        entity: true,
        changeType: true,
        version: true,
        createdBy: true,
        entityTypeField: true,
        versionField: true,
        entityField: true,
        changeTypeField: true,
        createdByField: true,
        createdAtField: true,
        changesField: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChangeLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChangeLog(
    @common.Param() params: ChangeLogWhereUniqueInput,
    @common.Body() data: ChangeLogUpdateInput
  ): Promise<ChangeLog | null> {
    try {
      return await this.service.updateChangeLog({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          entityType: true,
          changes: true,
          entity: true,
          changeType: true,
          version: true,
          createdBy: true,
          entityTypeField: true,
          versionField: true,
          entityField: true,
          changeTypeField: true,
          createdByField: true,
          createdAtField: true,
          changesField: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChangeLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChangeLog(
    @common.Param() params: ChangeLogWhereUniqueInput
  ): Promise<ChangeLog | null> {
    try {
      return await this.service.deleteChangeLog({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          entityType: true,
          changes: true,
          entity: true,
          changeType: true,
          version: true,
          createdBy: true,
          entityTypeField: true,
          versionField: true,
          entityField: true,
          changeTypeField: true,
          createdByField: true,
          createdAtField: true,
          changesField: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
