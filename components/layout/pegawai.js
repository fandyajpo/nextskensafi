import { ChildMenu, Item, PegawaiNav } from 'components/layout/index';

const menus = [
    {
      name: 'Pegawai Menu',
      menu: [
        {
          link: '/pegawai/dashboard',
          name: 'Dashboard'
        },
      ],
    }
];

export const getLayout = page => <PegawaiNav menus={menus}>{page}</PegawaiNav>;

export default PegawaiNav;
