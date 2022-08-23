import { ChildMenu, Item, AdminNav } from "components/layout/index";

const menus = [
  {
    name: "Admin",
    menu: [
      {
        link: "/admin/dashboard",
        name: "Dashboard",
      },
      {
        link: "/admin/pengumuman",
        name: "Pengumuman",
      },
      {
        link: "/admin/absensi",
        name: "Absensi",
      },
      {
        link: "/admin/user",
        name: "User",
      },
      {
        link: "/admin/config",
        name: "Konfigurasi",
      },
      {
        link: "/admin/pembayaran",
        name: "Pembayaran",
      },
      {
        link: "/admin/test",
        name: "test",
      },
    ],
  },
];

export const getLayout = (page) => <AdminNav menus={menus}>{page}</AdminNav>;

export default AdminNav;
