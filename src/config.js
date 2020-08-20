export const SCREEN_SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopS: 1366,
  laptopL: 1440,
  desktop: 2560,
};

export const DEVICE = {
  mobileS: `(max-width: ${SCREEN_SIZE.mobileS}px)`,
  mobileM: `(max-width: ${SCREEN_SIZE.mobileM}px)`,
  mobileL: `(max-width: ${SCREEN_SIZE.mobileL}px)`,
  tablet: `(max-width: ${SCREEN_SIZE.tablet}px)`,
  laptop: `(max-width: ${SCREEN_SIZE.laptop}px)`,
  laptopS: `(max-width: ${SCREEN_SIZE.laptopS}px)`,
  laptopL: `(max-width: ${SCREEN_SIZE.laptopL}px)`,
  desktop: `(max-width: ${SCREEN_SIZE.desktop}px)`,
  desktopL: `(max-width: ${SCREEN_SIZE.desktop}px)`,
};

export const API = {
  URL: 'https://dry-harbor-91865.herokuapp.com',
  ENDPOINTS: {
    MESSAGES: 'messages',
  },
};
