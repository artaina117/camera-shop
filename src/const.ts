export const AMOUNT_OF_CARDS_ON_PAGE = 9;
export const MAX_RATING = 5;
export const MAX_AMOUNT_OF_REVIEWS = 3;

export enum AppRoute {
  Root = '/',
  Camera = '/catalog/cameras',
  NotFound = '/*',
}

export enum NameSpace {
  Cameras = 'CAMERAS',
  Reviews = 'REVIEWS',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Reviews = '/reviews',
}

export enum TabNames {
  Description = 'description',
  Characteristics = 'characteristics',
}
