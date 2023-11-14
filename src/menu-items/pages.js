// assets
import { IconKey, IconBook2, IconDownload } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconBook2,
  IconDownload
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Documentation Steps',
  type: 'group',
  children: [
    {
      id: 'gettingstarted',
      title: 'Getting Started',
      type: 'collapse',
      icon: icons.IconBook2,
      children: [
        {
          id: 'overview',
          title: 'Overview',
          type: 'item',
          url: 'getting-started/overview',
          breadcrumbs: true
        },
        {
          id: 'GSinstallation',
          title: 'Installation',
          type: 'item',
          icon: icons.IconDownload,
          url: 'getting-started/installation',
          breadcrumbs: true
        },
        {
          id: 'units',
          title: 'Units',
          type: 'item',
          
          url: 'getting-started/units'
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
          url: 'building/overview',
          breadcrumbs: true
        },
        {
          id: 'blocks',
          title: 'Blocks',
          type: 'item',
          url: 'building/blocks',
          breadcrumbs: true
        },
        {
          id: 'satellite',
          title: 'Satellite',
          type: 'item',
          url: 'building/satellite',
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
          icon: icons.IconDownload,
          url: 'cli/installation',
          breadcrumbs: true
        }
      ]
    }
  ]
};

export default pages;
