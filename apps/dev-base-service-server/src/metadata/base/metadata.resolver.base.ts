/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Metadata } from "./Metadata";
import { MetadataCountArgs } from "./MetadataCountArgs";
import { MetadataFindManyArgs } from "./MetadataFindManyArgs";
import { Query } from "../../query/base/Query";
import { MetadataFindUniqueArgs } from "./MetadataFindUniqueArgs";
import { CreateMetadataArgs } from "./CreateMetadataArgs";
import { UpdateMetadataArgs } from "./UpdateMetadataArgs";
import { DeleteMetadataArgs } from "./DeleteMetadataArgs";
import { MetadataService } from "../metadata.service";
@graphql.Resolver(() => Metadata)
export class MetadataResolverBase {
  constructor(protected readonly service: MetadataService) {}

  async _metadataItemsMeta(
    @graphql.Args() args: MetadataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Metadata])
  async metadataItems(
    @graphql.Args() args: MetadataFindManyArgs
  ): Promise<Metadata[]> {
    return this.service.metadataItems(args);
  }

  @graphql.Query(() => Metadata, { nullable: true })
  async metadata(
    @graphql.Args() args: MetadataFindUniqueArgs
  ): Promise<Metadata | null> {
    const result = await this.service.metadata(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Metadata)
  async createMetadata(
    @graphql.Args() args: CreateMetadataArgs
  ): Promise<Metadata> {
    return await this.service.createMetadata({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Metadata)
  async updateMetadata(
    @graphql.Args() args: UpdateMetadataArgs
  ): Promise<Metadata | null> {
    try {
      return await this.service.updateMetadata({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Metadata)
  async deleteMetadata(
    @graphql.Args() args: DeleteMetadataArgs
  ): Promise<Metadata | null> {
    try {
      return await this.service.deleteMetadata(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
