const color = {
  // 여기부터 진짜!!!!
  primary75: '#EAF2FE',
  primary100: '#D5E5FD',
  primary200: '#C0D9FC',
  primary300: '#ABCCFB',
  primary500: '#1874F6',
  primary550: '#1568DD',
  primary600: '#135CC4',

  gray50: '#FFFFFF',
  gray70: '#FDFDFD',
  gray100: '#F8F8F8',
  gray200: '#E6E6E6',
  gray300: '#D5D5D5',
  gray400: '#B1B1B1',
  gray500: '#909090',
  gray600: '#6C6C6C',
  gray700: '#464646',
  gray800: '#222222',
  gray900: '#000000',

  blueGray100: '#F3F6F9',
  blueGray200: '#EAEDF0',
  blueGray300: '#D3DCE4',
  blueGray400: '#CAD3DC',

  backgroundColor: '#F8F8F8',

  fail: '#D82020',
  success: '#2A7649',
  infoLink: '#0000FF',
  warning: '#FFA500',

  failBg: '#FFEEEE',
  successBg: '#E2FBCF',
  failHover: '#F8E8E8',

  emphasizedTextColor: '',
  defaultTextColor: '',
  secondTextColor: '',
  thirdTextColor: '',
  fourthTextColor: '',
} as const;

const border = {
  // real

  // mock
  divider: '1px solid #D5D5D5',
  blueButtonDivider: '1px solid #3B44FF',
  radius4: '4px',
} as const;

const width = {
  // real

  // mock
  mobile: '360px',
  pad: '768px',
  desktop: '1280px',
} as const;

const zIndex = {
  sidebarOpen: 3,
  sidebarClose: -1,

  dropdown: 5,
  //
  // popUpModal: 10,
  header: 10,
  modal: 15,
  backdrop: 20,
  secondModal: 18,
  secondBackDrop: 17,
  modalPortal: 25,
  restModal: 30,
  toast: 35,
} as const;

const theme = {
  color,
  width,
  zIndex,
  border,
} as const;

export type ThemeType = typeof theme;

export default theme;
