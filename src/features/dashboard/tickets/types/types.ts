import { Prisma } from "../../../../../generated/prisma/client";

export type TicketsWithUser = Prisma.TicketGetPayload<{
  include: {
    user: {
      select: {
        id: true;
        userName: true;
        firstName: true;
        lastName: true;
        email: true;
      };
    };
  };
}>;

export type TicketsTableProps = {
  tickets: TicketsWithUser[];
};