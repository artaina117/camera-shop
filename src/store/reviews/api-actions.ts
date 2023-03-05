import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';
import { AppDispatch, State } from '../../types/state';

export const fetchReviewsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Cameras}/${id}/reviews`);
    return data;
  },
);
