export type AddressItem = {
  id: string;
  province: string;
  city: string;
  street: string;
  buildingNo: string;
  postalCode: string;
  phoneNumber: string;
  recipientName: string;
  addressLabel: string | null;
  unit: string | null;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
};
