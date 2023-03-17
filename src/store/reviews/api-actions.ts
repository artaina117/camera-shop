import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';
import { ReviewPost } from '../../types/reviewPost';
// import { ReviewPost } from '../../types/reviewPost';
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

export const postNewReviewAction = createAsyncThunk<Review | undefined, ReviewPost, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/postNewReview',
  async ({ userName, advantage, disadvantage, review, rating, cameraId }, { extra: api }) => {
    try {
      const { data } = await api.post<Review>(APIRoute.Reviews, { userName, advantage, disadvantage, review, rating, cameraId });
      return data;
    } catch {}
  },
);
