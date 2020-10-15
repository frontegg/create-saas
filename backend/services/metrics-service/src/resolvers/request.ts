import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql';
import { Request } from '../db/entity/request';
import { Context } from './types/context';
import { NewRequestInput } from '../dto/new-request.input';

@Resolver(of => Request)
export class RequestResolver {
  @Query(() => [Request])
  requests(@Ctx() { tenantId }: Context) {
    return Request.find({ where: { tenantId } });
  }

  @Mutation(() => Request)
  async addRequest(@Ctx() { tenantId }: Context, @Arg('newRequestData') newRequestData: NewRequestInput): Promise<Request> {
    const request = Request.create({
      tenantId,
      ...newRequestData,
    });
    return await request.save();
  }

  @Mutation(() => Boolean)
  async removeRequest(@Ctx() { tenantId }: Context, @Arg('id') id: number) {
    const request = await Request.find({ where: { tenantId, id } });
    await Request.remove(request);
    return true;
  }
}
