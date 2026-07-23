export type SubMenu = {
  id: string;
  href: string;
  name: string;
  menuId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type Menu = {
  id: string;
  href: string;
  name: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  subMenus: SubMenu[];
};