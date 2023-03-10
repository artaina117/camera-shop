import { NameSpace } from '../../const';
import { Camera } from '../../types/camera';
import { Promo } from '../../types/promo';
import { State } from '../../types/state';

export const getCameras = (state: State): Camera[] => state[NameSpace.Cameras].cameras;
export const getPromo = (state: State): Promo => state[NameSpace.Cameras].promo;
export const getCamerasByPage = (state: State): Camera[] => state[NameSpace.Cameras].camerasByPage;
export const getCurrentCamera = (state: State): Camera => state[NameSpace.Cameras].currentCamera;
export const getSimilarCameras = (state: State): Camera[] => state[NameSpace.Cameras].similarCameras;
