import { GuruNav } from "components/layout/index";

const menus = [
  {
    name: "Guru Menu",
    menu: [
      {
        link: "/guru/dashboard",
        name: "Dashboard",
      },
    ],
  },
  {
    name: "Administrasi Guru",
    menu: [
      {
        link: "/guru/administrasi",
        name: "Daftar Buku Kerja",
      },
      {
        link: "/guru/bukukerjasatu",
        name: "Buku Kerja 1",
      },
      {
        link: "/guru/bukukerjadua",
        name: "Buku Kerja 2",
      },
      {
        link: "/guru/bukukerjatiga",
        name: "Buku Kerja 3",
      },
      {
        link: "/guru/bukukerjaempat",
        name: "Buku Kerja 4",
      },
    ],
  },
];

export const getLayout = (page) => <GuruNav menus={menus}>{page}</GuruNav>;

export default GuruNav;
