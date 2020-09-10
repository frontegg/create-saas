import { InputType, Field } from 'type-graphql';

@InputType()
export class NewRequestInput {
  @Field()
  url!: string;

  @Field()
  statusCode!: number;

  @Field()
  userAgent!: string;

  @Field()
  ip!: string;
}
