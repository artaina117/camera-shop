import { store } from '../store';
import { Camera } from './camera';

export type CamerasSlice = {
  cameras: Camera[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
