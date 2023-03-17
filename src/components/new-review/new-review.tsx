import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { postNewReviewAction } from '../../store/reviews/api-actions';
import { ReviewPost } from '../../types/reviewPost';
import { useParams } from 'react-router-dom';

type NewReviewProps = {
  closeModalHandler: () => void;
}

type FormValues = {
  userName: string;
  userPlus: string;
  userMinus: string;
  userComment: string;
  rate: string;
}

function NewReview({ closeModalHandler }: NewReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>();

  const submitHandler = (data: FormValues) => {
    const postData: ReviewPost = {
      userName: data.userName,
      advantage: data.userPlus,
      disadvantage: data.userMinus,
      review: data.userComment,
      rating: Number(data.rate),
      cameraId: Number(id),
    };
    dispatch(postNewReviewAction(postData));
  };

  const [rateValue, setRateValue] = useState('0');

  useEffect(() => {
    const escHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeModalHandler();
      }
    };

    window.addEventListener('keydown', escHandler);

    return () => {
      window.removeEventListener('keydown', escHandler);
    };
  }, []);

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={closeModalHandler}></div>
        <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" onSubmit={handleSubmit(submitHandler)}>
              <div className="form-review__rate">
                <fieldset className={cn('rate', 'form-review__item', { 'is-invalid': errors.rate })}>
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      <input className="visually-hidden" id="star-5" type="radio" value="5" {...register('rate', { required: true })} onChange={(event) => setRateValue(event.target.value)} />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input className="visually-hidden" id="star-4" type="radio" value="4" {...register('rate', { required: true })} onChange={(event) => setRateValue(event.target.value)} />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input className="visually-hidden" id="star-3" type="radio" value="3" {...register('rate', { required: true })} onChange={(event) => setRateValue(event.target.value)} />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input className="visually-hidden" id="star-2" type="radio" value="2" {...register('rate', { required: true })} onChange={(event) => setRateValue(event.target.value)} />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input className="visually-hidden" id="star-1" type="radio" value="1" {...register('rate', { required: true })} onChange={(event) => setRateValue(event.target.value)} />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    </div>
                    <div className="rate__progress">
                      <span className="rate__stars">{rateValue}</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  {errors.rate && <p className="rate__message">Нужно оценить товар</p>}
                </fieldset>
                <div className={cn('custom-input', 'form-review__item', { 'is-invalid': errors.userName })}>
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input {...register('userName', { required: true })} type="text" placeholder="Введите ваше имя" />
                  </label>
                  {errors.userName && <p className="custom-input__error">Нужно указать имя</p>}
                </div>
                <div className={cn('custom-input', 'form-review__item', { 'is-invalid': errors.userPlus })}>
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input {...register('userPlus', { required: true })} type="text" placeholder="Основные преимущества товара" />
                  </label>
                  {errors.userPlus && <p className="custom-input__error">Нужно указать достоинства</p>}
                </div>
                <div className={cn('custom-input', 'form-review__item', { 'is-invalid': errors.userMinus })}>
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input {...register('userMinus', { required: true })} type="text" placeholder="Главные недостатки товара" />
                  </label>
                  {errors.userMinus && <p className="custom-input__error">Нужно указать недостатки</p>}
                </div>
                <div className={cn('custom-textarea', 'form-review__item', { 'is-invalid': errors.userComment })}>
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      placeholder="Поделитесь своим опытом покупки"
                      {...register('userComment', {
                        required: 'Нужно добавить комментарий',
                        minLength: {
                          value: 5,
                          message: 'Минимум должно быть 5 символов'
                        }
                      })}
                    >
                    </textarea>
                  </label>
                  {errors.userComment &&
                    <div className="custom-textarea__error">{errors.userComment.message}</div>}
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={closeModalHandler}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewReview;
