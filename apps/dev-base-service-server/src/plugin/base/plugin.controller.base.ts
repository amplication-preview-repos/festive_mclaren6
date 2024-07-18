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
import { PluginService } from "../plugin.service";
import { PluginCreateInput } from "./PluginCreateInput";
import { Plugin } from "./Plugin";
import { PluginFindManyArgs } from "./PluginFindManyArgs";
import { PluginWhereUniqueInput } from "./PluginWhereUniqueInput";
import { PluginUpdateInput } from "./PluginUpdateInput";

export class PluginControllerBase {
  constructor(protected readonly service: PluginService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Plugin })
  async createPlugin(@common.Body() data: PluginCreateInput): Promise<Plugin> {
    return await this.service.createPlugin({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        description: true,
        entryPoint: true,
        configField: true,
        isActive: true,
        installedAt: true,
        name: true,
        pluginVersion: true,
        configuration: true,
        updatedOn: true,
        pluginEntryPoint: true,
        pluginConfiguration: true,
        pluginIsActive: true,
        pluginName: true,
        pluginDescription: true,
        pluginInstalledAt: true,
        pluginUpdatedAt: true,
        pluginDesc: true,
        pluginInstalled: true,
        pluginVer: true,
        pluginEntry: true,
        pluginConf: true,
        pluginActive: true,
        pluginUpdated: true,
        pluginVerField: true,
        pluginDescField: true,
        pluginEntryField: true,
        pluginConfField: true,
        pluginInstalledField: true,
        pluginActiveField: true,
        pluginUpdatedField: true,
        pluginNameField: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Plugin] })
  @ApiNestedQuery(PluginFindManyArgs)
  async plugins(@common.Req() request: Request): Promise<Plugin[]> {
    const args = plainToClass(PluginFindManyArgs, request.query);
    return this.service.plugins({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        description: true,
        entryPoint: true,
        configField: true,
        isActive: true,
        installedAt: true,
        name: true,
        pluginVersion: true,
        configuration: true,
        updatedOn: true,
        pluginEntryPoint: true,
        pluginConfiguration: true,
        pluginIsActive: true,
        pluginName: true,
        pluginDescription: true,
        pluginInstalledAt: true,
        pluginUpdatedAt: true,
        pluginDesc: true,
        pluginInstalled: true,
        pluginVer: true,
        pluginEntry: true,
        pluginConf: true,
        pluginActive: true,
        pluginUpdated: true,
        pluginVerField: true,
        pluginDescField: true,
        pluginEntryField: true,
        pluginConfField: true,
        pluginInstalledField: true,
        pluginActiveField: true,
        pluginUpdatedField: true,
        pluginNameField: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Plugin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async plugin(
    @common.Param() params: PluginWhereUniqueInput
  ): Promise<Plugin | null> {
    const result = await this.service.plugin({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        description: true,
        entryPoint: true,
        configField: true,
        isActive: true,
        installedAt: true,
        name: true,
        pluginVersion: true,
        configuration: true,
        updatedOn: true,
        pluginEntryPoint: true,
        pluginConfiguration: true,
        pluginIsActive: true,
        pluginName: true,
        pluginDescription: true,
        pluginInstalledAt: true,
        pluginUpdatedAt: true,
        pluginDesc: true,
        pluginInstalled: true,
        pluginVer: true,
        pluginEntry: true,
        pluginConf: true,
        pluginActive: true,
        pluginUpdated: true,
        pluginVerField: true,
        pluginDescField: true,
        pluginEntryField: true,
        pluginConfField: true,
        pluginInstalledField: true,
        pluginActiveField: true,
        pluginUpdatedField: true,
        pluginNameField: true,
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
  @swagger.ApiOkResponse({ type: Plugin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePlugin(
    @common.Param() params: PluginWhereUniqueInput,
    @common.Body() data: PluginUpdateInput
  ): Promise<Plugin | null> {
    try {
      return await this.service.updatePlugin({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          version: true,
          description: true,
          entryPoint: true,
          configField: true,
          isActive: true,
          installedAt: true,
          name: true,
          pluginVersion: true,
          configuration: true,
          updatedOn: true,
          pluginEntryPoint: true,
          pluginConfiguration: true,
          pluginIsActive: true,
          pluginName: true,
          pluginDescription: true,
          pluginInstalledAt: true,
          pluginUpdatedAt: true,
          pluginDesc: true,
          pluginInstalled: true,
          pluginVer: true,
          pluginEntry: true,
          pluginConf: true,
          pluginActive: true,
          pluginUpdated: true,
          pluginVerField: true,
          pluginDescField: true,
          pluginEntryField: true,
          pluginConfField: true,
          pluginInstalledField: true,
          pluginActiveField: true,
          pluginUpdatedField: true,
          pluginNameField: true,
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
  @swagger.ApiOkResponse({ type: Plugin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePlugin(
    @common.Param() params: PluginWhereUniqueInput
  ): Promise<Plugin | null> {
    try {
      return await this.service.deletePlugin({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          version: true,
          description: true,
          entryPoint: true,
          configField: true,
          isActive: true,
          installedAt: true,
          name: true,
          pluginVersion: true,
          configuration: true,
          updatedOn: true,
          pluginEntryPoint: true,
          pluginConfiguration: true,
          pluginIsActive: true,
          pluginName: true,
          pluginDescription: true,
          pluginInstalledAt: true,
          pluginUpdatedAt: true,
          pluginDesc: true,
          pluginInstalled: true,
          pluginVer: true,
          pluginEntry: true,
          pluginConf: true,
          pluginActive: true,
          pluginUpdated: true,
          pluginVerField: true,
          pluginDescField: true,
          pluginEntryField: true,
          pluginConfField: true,
          pluginInstalledField: true,
          pluginActiveField: true,
          pluginUpdatedField: true,
          pluginNameField: true,
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
