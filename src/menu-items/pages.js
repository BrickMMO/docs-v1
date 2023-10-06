// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'gettingstarted',
      title: 'Getting Started',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'overview',
          title: 'Overview',
          type: 'item',
          url: '/getting-started/overview',
          external: true,
          target: '_blank',
          breadcrumbs: true
        },
        {
          id: 'installation',
          title: 'Installation',
          type: 'item',
          external: true,
          target: '_blank',
          url: '/getting-started/installation',
          breadcrumbs: true
        },
        {
          id: 'units',
          title: 'Units',
          type: 'item',
          external: true,
          target: '_blank',
          url: '/getting-started/units',
          breadcrumbs: true
        }
      ]
    },
    {
      id: 'building',
      title: 'Building',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'overview',
          title: 'Overview',
          type: 'item',
          url: '/building/overview',
          target: false
        },
        {
          id: 'blocks',
          title: 'Blocks',
          type: 'item',
          external: true,
          target: '_blank',
          url: '/building/blocks',
          breadcrumbs: true
        },
        {
          id: 'satellite',
          title: 'Satellite',
          type: 'item',
          external: true,
          target: '_blank',
          url: '/building/satellite',
          breadcrumbs: true
        }
      ]
    },
    {
      id: 'cli',
      title: 'CLI',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'installation',
          title: 'Installation',
          type: 'item',
          url: '/cli/installation',
          target: false
        }
      ]
    }
  ]
};

export default pages;
