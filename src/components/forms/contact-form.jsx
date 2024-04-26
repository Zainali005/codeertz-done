import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const ContactForm = () => {
  // user
  // const { user } = useSelector(state => state.auth);
  // console.log(user)

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`${values.name} your message sent successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })

  return (
    <form className='row' id="contact-form" onSubmit={handleSubmit}>
      <div className='col-md-12'>
      <h4 className="tp-contact-big-title">Let’s Talk...</h4>
      </div>
      <div className='col-md-6 mb-30'>
        <input value={values.name} onChange={handleChange} onBlur={handleBlur}
          name="name" type="text" placeholder="First Name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className='col-md-6 mb-30'>
        <input value={values.name} onChange={handleChange} onBlur={handleBlur}
          name="name" type="text" placeholder="Last Name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className='col-md-12 mb-30'>
        <input value={values.email} onChange={handleChange} onBlur={handleBlur}
          name="email" type="email" placeholder="Enter your Mail" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className='col-md-12 mb-30'>
        <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} name="msg"
          placeholder="Enter your Massage"></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <div className='col-md-12'>
      <button type="submit" className="tp-btn">Send Massage</button>
      </div>
    </form>
  );
};

export default ContactForm;