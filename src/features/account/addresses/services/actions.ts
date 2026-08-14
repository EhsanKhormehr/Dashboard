"use server";
import { executeAction } from "@/lib/executeAction";
import { AddressFormValue } from "../types/schema";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/features/auth/utils/getCurrentUser";
import { requireUser } from "@/features/auth/utils/requireUser";

export const createAddress = async (data: AddressFormValue) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();

      await prisma.address.create({
        data: {
          province: data.province,
          city: data.city,
          street: data.street,
          buildingNo: data.buildingNo,
          unit: data.unit,
          postalCode: data.postalCode,
          phoneNumber: data.phoneNumber,
          recipientName: data.recipientName,
          addressLabel: data.addressLabel,
          userId: currentUser.id,
        },
      });
    },
  });
};

export const getAddresses = async () => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();
      
      return await prisma.address.findMany({
        where: {
          userId: currentUser.id,
        },
        orderBy: [
          {
            isDefault: "desc",
          },
          {
            createdAt: "desc",
          },
        ],
      });
    },
  });
};

export const makeAddressDefault = async (addressId: string) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();
      
      const address = await prisma.address.findFirst({
        where: {
          id: addressId,
          userId: currentUser.id,
        },
      });

      if (!address) {
        throw new Error("Address not found");
      }

      await prisma.$transaction([
        prisma.address.updateMany({
          where: {
            userId: currentUser.id,
          },
          data: {
            isDefault: false,
          },
        }),

        prisma.address.update({
          where: {
            id: addressId,
          },
          data: {
            isDefault: true,
          },
        }),
      ]);

      return {
        success: true,
      };
    },
  });
};

export const deleteAddress = async (id: string) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();
      
      return await prisma.address.deleteMany({
        where: {
          id,
          userId: currentUser.id,
        },
      });
    },
  });
};

export const updateAddress = async (id: string, data: AddressFormValue) => {
  return executeAction({
    actionFn: async () => {
      const currentUser = await requireUser();
      
      const address = await prisma.address.findFirst({
        where: {
          id,
          userId: currentUser.id,
        },
      });
      if (!address) {
        throw new Error("Address not found");
      }
      return await prisma.address.update({
        where: {
          id,
        },
        data: {
          province: data.province,
          city: data.city,
          street: data.street,
          buildingNo: data.buildingNo,
          postalCode: data.postalCode,
          phoneNumber: data.phoneNumber,
          recipientName: data.recipientName,
          addressLabel: data.addressLabel ?? "",
          unit: data.unit ?? "",
        },
      });
    },
  });
};
