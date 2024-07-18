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
import { EndpointService } from "../endpoint.service";
import { EndpointCreateInput } from "./EndpointCreateInput";
import { Endpoint } from "./Endpoint";
import { EndpointFindManyArgs } from "./EndpointFindManyArgs";
import { EndpointWhereUniqueInput } from "./EndpointWhereUniqueInput";
import { EndpointUpdateInput } from "./EndpointUpdateInput";
import { ApiDocumentationFindManyArgs } from "../../apiDocumentation/base/ApiDocumentationFindManyArgs";
import { ApiDocumentation } from "../../apiDocumentation/base/ApiDocumentation";
import { ApiDocumentationWhereUniqueInput } from "../../apiDocumentation/base/ApiDocumentationWhereUniqueInput";

export class EndpointControllerBase {
  constructor(protected readonly service: EndpointService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Endpoint })
  async createEndpoint(
    @common.Body() data: EndpointCreateInput
  ): Promise<Endpoint> {
    return await this.service.createEndpoint({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        path: true,
        method: true,
        description: true,
        authentication: true,
        rateLimit: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Endpoint] })
  @ApiNestedQuery(EndpointFindManyArgs)
  async endpoints(@common.Req() request: Request): Promise<Endpoint[]> {
    const args = plainToClass(EndpointFindManyArgs, request.query);
    return this.service.endpoints({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        path: true,
        method: true,
        description: true,
        authentication: true,
        rateLimit: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Endpoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async endpoint(
    @common.Param() params: EndpointWhereUniqueInput
  ): Promise<Endpoint | null> {
    const result = await this.service.endpoint({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        path: true,
        method: true,
        description: true,
        authentication: true,
        rateLimit: true,
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
  @swagger.ApiOkResponse({ type: Endpoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEndpoint(
    @common.Param() params: EndpointWhereUniqueInput,
    @common.Body() data: EndpointUpdateInput
  ): Promise<Endpoint | null> {
    try {
      return await this.service.updateEndpoint({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          path: true,
          method: true,
          description: true,
          authentication: true,
          rateLimit: true,
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
  @swagger.ApiOkResponse({ type: Endpoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEndpoint(
    @common.Param() params: EndpointWhereUniqueInput
  ): Promise<Endpoint | null> {
    try {
      return await this.service.deleteEndpoint({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          path: true,
          method: true,
          description: true,
          authentication: true,
          rateLimit: true,
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

  @common.Get("/:id/apiDocumentations")
  @ApiNestedQuery(ApiDocumentationFindManyArgs)
  async findApiDocumentations(
    @common.Req() request: Request,
    @common.Param() params: EndpointWhereUniqueInput
  ): Promise<ApiDocumentation[]> {
    const query = plainToClass(ApiDocumentationFindManyArgs, request.query);
    const results = await this.service.findApiDocumentations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        version: true,
        updatedAtField: true,
        content: true,
        createdAtField: true,

        endpoint: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/apiDocumentations")
  async connectApiDocumentations(
    @common.Param() params: EndpointWhereUniqueInput,
    @common.Body() body: ApiDocumentationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiDocumentations: {
        connect: body,
      },
    };
    await this.service.updateEndpoint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/apiDocumentations")
  async updateApiDocumentations(
    @common.Param() params: EndpointWhereUniqueInput,
    @common.Body() body: ApiDocumentationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiDocumentations: {
        set: body,
      },
    };
    await this.service.updateEndpoint({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/apiDocumentations")
  async disconnectApiDocumentations(
    @common.Param() params: EndpointWhereUniqueInput,
    @common.Body() body: ApiDocumentationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiDocumentations: {
        disconnect: body,
      },
    };
    await this.service.updateEndpoint({
      where: params,
      data,
      select: { id: true },
    });
  }
}
