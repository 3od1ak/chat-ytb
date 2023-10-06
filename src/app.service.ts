import { Injectable } from '@nestjs/common';
import { Chat, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  async createMessage(data: Prisma.ChatCreateInput) {
    // return await this.prisma.chat.create({ data });
  }

  async getMessages() {
    // return await this.prisma.chat.findMany();
  }
}
