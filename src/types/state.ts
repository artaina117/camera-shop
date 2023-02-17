import { store } from '../store';
import { Camera } from './camera';
import { Promo } from './promo';

export type CamerasSlice = {
  cameras: Camera[];
  promo: Promo;
  camerasByPage: Camera[];
  currentCamera: Camera;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
