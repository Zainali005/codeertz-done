import React from 'react';
import { useFormik } from 'formik';
import { reviewSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useDispatch } from 'react-redux';
import { add_reviews } from '../../redux/features/product-slice';

const ReviewForm = ({reviewValue}) => {
  const dispatch = useDispatch();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', review: '' },
    validationSchema: reviewSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(add_reviews({
        img:'/assets/img/product/client-3.webp',
        name:values.name,
        email:values.email,
        review:values.review,
        rating:reviewValue,
        date:new Date().toLocaleString(),
      }))
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-12">
          <div className="comment-input">
            <textarea name='review' value={values.review} onChange={handleChange}
              onBlur={handleBlur} placeholder="Your review..."></textarea>
            {touched.review && <ErrorMsg error={errors.review} />}
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="comment-input">
            <input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} 
            type="text" placeholder="Your Name*" />
             {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="comment-input">
            <input value={values.email} name="email" onChange={handleChange} onBlur={handleBlur}  
            type="email" placeholder="Your Email*" />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="comment-submit">
            <button type="submit" className="tp-btn">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;