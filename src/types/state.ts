import { store } from '../store';
import { Camera } from './camera';
import { Promo } from './promo';
import { Review } from './review';

export type CamerasSlice = {
  cameras: Camera[];
  similarCameras: Camera[];
  promo: Promo;
  camerasByPage: Camera[];
  currentCamera: Camera;
}

export type ReviewsSlice = {
  reviews: Review[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
