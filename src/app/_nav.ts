import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboards',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    },

  },
  {
    title: true,
    name: 'Extras',
  },

  {
    name: "Company",
    url: '/company',
    icon: 'fa fa-building-o',
    children: [
      {
        name: 'Add Company',
        url: '/company/add-company',
        icon: 'fa fa-plus-square-o'
      },
      {
        name: 'Company List',
        url: '/company/company-list',
        icon: 'fa fa-list-alt'
      },
      {
        name: 'Edit Company',
        url: '/company/edit-company',
        icon: 'fa fa-pencil-square-o'
      },
      {
        name: 'View Company Details',
        url: '/company/view-company-details',
        icon: 'fa fa-newspaper-o'
      },
      {
        name: 'Demo',
        url: '/company/demo',
        icon: 'fa fa-newspaper-o'
      }
    ]
  },
  {
    name: "Contacts",
    url: '/contact',
    icon: 'fa fa-address-book-o',
    children: [
      {
        name: 'Add Contact',
        url: '/contact/add-contact',
        icon: 'fa fa-plus-square-o'
      },
      {
        name: 'Contact List',
        url: '/contact/contact-list',
        icon: 'fa fa-list-alt'
      },
      {
        name: 'View Contact Details',
        url: '/contact/view-contact-details',
        icon: 'fa fa-address-card-o'
      },
      {
        name: 'Edit Contact',
        url: '/contact/edit-contact',
        icon: 'fa fa-pencil-square-o'
      },
      {
        name: "Import",
        url: '/import',
        icon: 'fa fa-cloud-download',
        children: [
          {
            name: 'Import Contact',
            url: '/import/import',
            icon: 'icon-people'
          },
        ]
      },
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
        icon: 'fa fa-user-plus'
      },
      {
        name: 'User Profile List',
        url: '/user/profile-list',
        icon: 'fa fa-list-alt'
      },
      {
        name: 'Edit Profile',
        url: '/user/edit-profile',
        icon: 'icon-people'
      },
      {
        name: 'User Role',
        url: '/user/user-role',
        icon: 'icon-options'
      },
      {
        name: 'User Permission',
        url: '/user/user-permission',
        icon: 'icon-user-following'
      }
    ]
  },
  {
    name: 'Email',
    url: '/email',
    icon: 'icon-envelope',
    children: [
      {
        name: 'Send Greetings',
        url: 'email/email',
        icon: 'fa fa-commenting-o'
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
    icon: 'fa fa-compress',
    children: [
      {
        name: 'Mail Integration',
        url: '/integration/mail-integration',
        icon: 'icon-envelope-letter'
      },
      {
        name: 'Facebook Pixel',
        url: '/integration/fb-pixel',
        icon: 'fa fa-facebook-square'
      },
      {
        name: 'Sms Integration',
        url: '/integration/sms-integration',
        icon: 'fa fa-comments-o'
      },
    ]
  },
  {
    name: "Loans",
    url: '/loans',
    icon: 'fa fa-money',
    children: [
      {
        name: 'Loan Notification',
        url: '/loans/add-loan',
        icon: 'fa fa-bell'
      },
    ]
  },
  {
    name: 'Setting',
    url: '/setting',
    icon: 'icon-settings',
    children: [
      {
        name: 'taxonomy',
        url: '/setting/taxonomy',
        icon: 'fa fa-plus-square-o',
        children: [
          {
            name: 'Add Term',
            url: '/setting/taxonomy/add-term',
            icon: 'fa fa-plus-square-o'
          },
          {
            name: 'Tags',
            url: '/setting/taxonomy/tags',
            icon: 'fa fa-plus-square-o'
          },
          {
            name: 'Term List',
            url: '/setting/taxonomy/term-list',
            icon: 'fa fa-plus-square-o'
          },
          {
            name: 'Social Media',
            url: '/setting/taxonomy/social-media',
            icon: 'fa fa-plus-square-o'
          },
        ]
      },
    ]
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
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
];