import * as graphql from "@nestjs/graphql";
import { CartResolverBase } from "./base/cart.resolver.base";
import { Cart } from "./base/Cart";
import { CartService } from "./cart.service";

@graphql.Resolver(() => Cart)
export class CartResolver extends CartResolverBase {
  constructor(protected readonly service: CartService) {
    super(service);
  }
}
