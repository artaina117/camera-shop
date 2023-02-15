import { createSlice } from '@reduxjs/toolkit';
import { emptyPromo, NameSpace } from '../../const';
import { CamerasSlice } from '../../types/state';
import { fetchCamerasAction, fetchCamerasByPageAction, fetchPromosAction } from './api-actions';

const initialState: CamerasSlice = {
  cameras: [],
  promo: emptyPromo,
  camerasByPage: [],
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
      });
  }
});
