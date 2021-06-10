import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras',
  },
  
  {
    name: "Company",
    url: '/company',
    icon: 'icon-user',
    children: [
      {
        name: 'Add Company',
        url: '/company/add-company',
        icon: 'icon-people'
      },
      {
        name: 'Company List',
        url: '/company/company-list',
        icon: 'icon-people'
      },
      {
        name: 'Edit Company',
        url: '/company/edit-company',
        icon: 'icon-people'
      },
      {
        name: 'View Company Details',
        url: '/company/view-company-details',
        icon: 'icon-people'
      }
    ]
  },
  {
    name: "Contacts",
    url: '/contact',
    icon: 'icon-user',
    children: [
      {
        name: 'Add Contact',
        url: '/contact/add-contact',
        icon: 'icon-people'
      },
      {
        name: 'Contact List',
        url: '/contact/contact-list',
        icon: 'icon-people'
      },
      {
        name: 'View Contact Details',
        url: '/contact/view-contact-details',
        icon: 'icon-people'
      },
      {
        name: 'Edit Contact',
        url: '/contact/edit-contact',
        icon: 'icon-people'
      }
    ]
  },
  {
    name: 'User',
    url: '/user',
    icon: 'icon-user',
    children: [
      {
        name: 'Add User',
        url: '/user/add-user',
        icon: 'icon-people'
      },
      {
        name: 'User Profile List',
        url: '/user/profile-list',
        icon: 'icon-people'
      },
      {
        name: 'Edit Profile',
        url: '/user/edit-profile',
        icon: 'icon-people'
      },
      {
        name: 'User Role',
        url: '/user/user-role',
        icon: 'icon-people'
      },
      {
        name: 'User Permission',
        url: '/user/user-permission',
        icon: 'icon-people'
      }
    ]
  },
  {
    name: 'Email',
    url: '/email',
    icon: 'icon-user',
    children: [
      {
        name: 'Send Greetings',
        url: 'email/email',
        icon: 'icon-envelope'
      },
      {
        name: 'Mail Chimp',
        url: 'email/mail-chimp',
        icon: 'fa fa-pencil-square-o',
      },
      {
        name: 'Add New Template',
        url: 'email/new-email-template',
        icon: 'fa fa-address-card-o'
      },
      {
        name: 'Template List',
        url: 'email/template-list',
        icon: 'fa fa-address-card-o'
      },
      {
        name: 'Edit Template',
        url: 'email/template',
        icon: 'fa fa-address-card-o'
      }
    ]
  },
  {
    name: "Integration",
    url: '/integration',
    icon: 'icon-user',
    children: [
      {
        name: 'Mail Integration',
        url: '/integration/mail-integration',
        icon: 'icon-people'
      },
    ]
  },
  {
    name: "Loans",
    url: '/loans',
    icon: 'icon-user',
    children: [
      {
        name: 'Add Loan',
        url: '/loans/add-loan',
        icon: 'icon-people'
      },
    ]
  },
  {
    name: 'Setting',
    url: '/theme/colors',
    icon: 'icon-settings'
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-docs',
    children: [
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-user-follow'
      },
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-login'
      },
      {
        name: 'Forgot Password',
        url: '/forgotPassword',
        icon: 'fa fa-key'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'fa fa-exclamation-circle'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'fa fa-exclamation-circle'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
];