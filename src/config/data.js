export const actions = [
    {
      title: 'Camera',
      type: 'capture',
      options: {
        maxWidth: 300,
        maxHeight: 300,
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.2,
      },
    },
    {
      title: 'Gallary',
      type: 'library',
      options: {
        maxWidth: 1024,
        maxHeight: 1024,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.2,
      },
    },
  ];

  
export const tabsData = [
  {
    id: 1,
    name: 'Call',
    icon: require('../assets/icon/phone_icon.png'),
    navigate_to: 'callHistory',
  },
  {
    id: 2,
    name: 'Chat',
    icon: require('../assets/icon/chat_icon.png'),
    navigate_to: 'chatHistory',
  },
  {
    id: 3,
    name: 'Wallet',
    icon: require('../assets/icon/wallet_icon.png'),
    navigate_to: 'walletHistory',
  },
  {
    id: 4,
    name: 'LIve Events',
    icon: require('../assets/icon/zoom_icon.png'),
    navigate_to: 'LiveEvent',
  },
  {
    id: 5,
    name: 'Waitlist',
    icon: require('../assets/icon/waitlist_icon.png'),
    navigate_to: 'waitList',
  },
  {
    id: 6,
    name: 'Support',
    icon: require('../assets/icon/support_icon.png'),
    navigate_to: 'SupportChat',
  },
  {
    id: 7,
    name: 'Offers',
    icon: require('../assets/icon/offer_icon.png'),
    navigate_to: 'Offer',
  },
  {
    id: 8,
    name: 'Reviews',
    icon: require('../assets/icon/star_icon.png'),
    navigate_to: 'ReviwList',
  },
  {
    id: 9,
    name: 'Remedy',
    icon: require('../assets/icon/flower_icon.png'),
    navigate_to: 'Remedy',
  },
  {
    id: 10,
    name: 'Learning',
    icon: require('../assets/icon/earnigs_icon.png'),
    navigate_to: 'courseList',
  },
  {
    id: 11,
    name: 'Followers',
    icon: require('../assets/icon/check.png'),
    navigate_to: 'Followers',
  },
  {
    id: 12,
    name: 'Settings',
    icon: require('../assets/icon/settings_icon.png'),
    navigate_to: 'Settings',
  },
  {
    id: 13,
    name: 'Fortune Store',
    icon: require('../assets/icon/shopping_icon.png'),
    navigate_to: 'poojaList',
  },
  {
    id: 14,
    name: 'Class History',
    icon: require('../assets/icon/history_icon.png'),
    navigate_to: 'classHistory',
  },
];

export const settingsTabsData = [
  {
    id: 1,
    name: 'Update Phone Number',
    icon: require('../assets/icon/phone_icon.png'),
    navigate_to: 'updateNumber',
  },
  {
    id: 3,
    name: 'Terms & Conditions',
    icon: require('../assets/icon/terms-and-conditions.png'),
    navigate_to: 'terms',
  },
  {
    id: 4,
    name: 'Price Change Request',
    icon: require('../assets/icon/price.png'),
    navigate_to: 'priceChange',
  },
  {
    id: 5,
    name: 'Bank Details',
    icon: require('../assets/icon/bank.png'),
    navigate_to: 'updateBankDetails',
  },
  {
    id: 6,
    name: 'Download Form 16A',
    icon: require('../assets/icon/download.png'),
    navigate_to: 'downloadForm16A',
  },
  {
    id: 7,
    name: 'Gallery',
    icon: require('../assets/icon/gallery.png'),
    navigate_to: 'photoGallery',
  },
  {
    id: 8,
    name: 'Refer an Astrologer',
    icon: require('../assets/icon/link.png'),
    navigate_to: 'referAnAstrologer',
  },
  {
    id: 9,
    name: 'Pooja',
    icon: require('../assets/icon/link.png'),
    navigate_to: 'poojaList',
  },
  {
    id: 10,
    name: 'Scheduled Pooja',
    icon: require('../assets/icon/link.png'),
    navigate_to: 'sceduledList',
  },
  {
    id: 11,
    name: 'Pooja History',
    icon: require('../assets/icon/link.png'),
    navigate_to: 'poojaHistory',
  },
  {
    id: 15,
    name: 'Delete Account',
    icon: require('../assets/icon/deleteaccount_icon.png'),
    navigate_to: 'classHistory',
  },
  {
    id: 16,
    name: 'Logout',
    icon: require('../assets/icon/logout_icon.png'),
    navigate_to: 'classHistory',
  },
];