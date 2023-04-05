export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/products',
    name: 'Sản phẩm',
  },
  {
    path: '/about',
    name: 'Thông tin',
  },
  {
    path: '/contact',
    name: 'Liên hệ',
  },
  {
    path: '/dashboard',
    name: 'Khách hàng',
  },
  {
    path: '/doc',
    name: 'Tin tức',
  },
];
