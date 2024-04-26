import { useFormik } from 'formik';
import React from 'react';
import { blogSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const BlogDetailsForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
      initialValues: { name: '', email: '', number: '',msg:'',terms:false },
      validationSchema: blogSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values)
        resetForm()
      }
    })
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="postbox__comment-input">
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" 
            type="text" placeholder="Your Name" />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="postbox__comment-input">
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"  
            type="email" placeholder="Your Email" />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="postbox__comment-input">
            <input value={values.number} onChange={handleChange} onBlur={handleBlur} name="number"
             type="text" placeholder="number" />
             {touched.number && <ErrorMsg error={errors.number} />}
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="postbox__comment-input">
            <input type="text" placeholder="Website" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input">
            <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} name="msg"
             placeholder="Enter your comment ..."></textarea>
             {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-agree d-flex align-items-start mb-20">
            <input name='terms' value={values.terms} onChange={handleChange} onBlur={handleBlur} 
            className="e-check-input" type="checkbox" id="terms" />
            <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          {touched.terms && <ErrorMsg error={errors.terms?.split('true,')[1]} />}
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-btn">
            <button type="submit" className="tp-btn">Post comment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogDetailsForm;