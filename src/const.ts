export const AMOUNT_OF_CARDS_ON_PAGE = 9;
export const MAX_RATING = 5;

export enum AppRoute {
  Root = '/',
  Camera = '/catalog/cameras',
}

export enum NameSpace {
  Cameras = 'CAMERAS',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
}

export const emptyPromo = {
  id: 0,
  name: '',
  previewImg: '',
  previewImg2x: '',
  previewImgWebp: '',
  previewImgWebp2x: '',
};
