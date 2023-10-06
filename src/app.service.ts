import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  async createMessage() {
    // return await this.prisma.chat.create({ data });
  }

  async getMessages() {
    // return await this.prisma.chat.findMany();
  }
}
