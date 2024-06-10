/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Cart as PrismaCart,
  Product as PrismaProduct,
  User as PrismaUser,
} from "@prisma/client";

export class CartServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CartCountArgs, "select">): Promise<number> {
    return this.prisma.cart.count(args);
  }

  async carts<T extends Prisma.CartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartFindManyArgs>
  ): Promise<PrismaCart[]> {
    return this.prisma.cart.findMany<Prisma.CartFindManyArgs>(args);
  }
  async cart<T extends Prisma.CartFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartFindUniqueArgs>
  ): Promise<PrismaCart | null> {
    return this.prisma.cart.findUnique(args);
  }
  async createCart<T extends Prisma.CartCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartCreateArgs>
  ): Promise<PrismaCart> {
    return this.prisma.cart.create<T>(args);
  }
  async updateCart<T extends Prisma.CartUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartUpdateArgs>
  ): Promise<PrismaCart> {
    return this.prisma.cart.update<T>(args);
  }
  async deleteCart<T extends Prisma.CartDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartDeleteArgs>
  ): Promise<PrismaCart> {
    return this.prisma.cart.delete(args);
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.cart
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.cart
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
