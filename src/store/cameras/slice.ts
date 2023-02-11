import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CamerasSlice } from '../../types/state';
import { fetchCamerasAction } from './api-actions';

const initialState: CamerasSlice = {
  cameras: [],
};

export const camerasSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
      });
  }
});
