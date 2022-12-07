export const defaultPageData = {
  header: {
    headerButtons: [
      {
        element: 'transparent',
        text: 'Join mailing list',
        linkTo: '#email',
      },
      {
        element: 'green',
        text: 'Bridge assets',
        linkTo: '/',
      },
    ],
    navItems: [
      { name: 'Mission', archon: '#mission' },
      { name: 'Bridge', archon: '#bridge' },
      { name: 'Spreadsheets', archon: '#speadsheets' },
      { name: 'Team', archon: '#team' },
      { name: 'Contacts', archon: '#contacts' },
    ],
  },
  footer: {
    id: 'contacts',
    title: 'Join our report mailing list %mail%',
    description:
      'We have excellent experts with extensive experience in digital ' +
      'asset research',
    form: {
      placeholder: 'Email',
      buttonText: 'Send',
    },
    logoButton: {
      element: 'green',
      text: 'Bridge assets',
      linkTo: '/',
    },
    copyright: {
      text: '© 2022. Aloe Labs.',
      icon: {
        type: 'whiteTwitter',
        link: '/',
      },
    },
    links: [
      { name: 'Mission', archon: '#mission' },
      { name: 'Spreadsheets', archon: '#speadsheets' },
      { name: 'DeFi Solutions', archon: '#defiSolutions' },
      { name: 'Team', archon: '#team' },
      { name: 'Contacts', archon: '#contacts' },
    ],
    termLink: {
      name: 'Terms of Conditions',
      link: '/',
    },
  },
};
