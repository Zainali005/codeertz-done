import { useFormik } from 'formik';
import React from 'react';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const JobDetailsForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-30'>
        <input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
          type="text" placeholder="Enter your Name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className='mb-30'>
        <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
          type="email" placeholder="Enter your Mail" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className='mb-30'>
        <textarea name='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur}
          placeholder="Enter your Massage*"></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <button className="tp-btn w-100">Apply Now</button>
    </form>
  );
};

export default JobDetailsForm;