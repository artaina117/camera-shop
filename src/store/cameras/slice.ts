import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CamerasSlice } from '../../types/state';
import { fetchCamerasAction, fetchCamerasByPageAction, fetchCurrentCameraAction, fetchPromosAction } from './api-actions';
import { emptyCamera, emptyPromo } from './const';

const initialState: CamerasSlice = {
  cameras: [],
  promo: emptyPromo,
  camerasByPage: [],
  currentCamera: emptyCamera,
};

export const camerasSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
      })
      .addCase(fetchPromosAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchCamerasByPageAction.fulfilled, (state, action) => {
        state.camerasByPage = action.payload;
      })
      .addCase(fetchCurrentCameraAction.fulfilled, (state, action) => {
        state.currentCamera = action.payload;
      });
  }
});
