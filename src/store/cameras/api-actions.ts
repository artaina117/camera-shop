import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AMOUNT_OF_CARDS_ON_PAGE, APIRoute } from '../../const';
import { Camera } from '../../types/camera';
import { Promo } from '../../types/promo';
import { AppDispatch, State } from '../../types/state';

export const fetchCamerasAction = createAsyncThunk<Camera[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameras',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Camera[]>(APIRoute.Cameras);
    return data;
  },
);

export const fetchPromosAction = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Promo>(APIRoute.Promo);
    return data;
  },
);

export const fetchCamerasByPageAction = createAsyncThunk<Camera[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCamerasByPage',
  async (page, { extra: api }) => {
    const urlQuery = `_start=${(page - 1) * AMOUNT_OF_CARDS_ON_PAGE}&_end=${page * AMOUNT_OF_CARDS_ON_PAGE}`;
    const { data } = await api.get<Camera[]>(`${APIRoute.Cameras}?${urlQuery}`);
    return data;
  },
);

export const fetchCurrentCameraAction = createAsyncThunk<Camera, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentCamera',
  async (id, { extra: api }) => {
    const { data } = await api.get<Camera>(`${APIRoute.Cameras}/${id}`);
    return data;
  },
);
