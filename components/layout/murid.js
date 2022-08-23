import { ChildMenu, Item, MuridNav } from 'components/layout/index';

const menus = [
    {
      name: 'Murid Menu',
      menu: [
        {
          link: '/murid/dashboard',
          name: 'Dashboard'
        },
      ],
    }
];

export const getLayout = page => <MuridNav menus={menus}>{page}</MuridNav>;

export default MuridNav;
