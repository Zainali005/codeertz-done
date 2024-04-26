import React from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import useFirebase from '../../hooks/use-firebase';
import { useSelector } from 'react-redux';

const RegisterForm = () => {
  // register With Email Password
  const {registerWithEmailPassword} = useFirebase();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      registerWithEmailPassword(values.email,values.password,values.name)
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-number">
        <label htmlFor="name">Name</label>
        <input value={values.name} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your name" id="name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="email">Email</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Email" id="email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-password">
        <label htmlFor="password">Password</label>
        <input value={values.password} onChange={handleChange}
          onBlur={handleBlur} type="password" placeholder="Enter your password" id="password" />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="tp-forgot-password d-flex justify-content-between">
        <div className="checkbox">
          <input type="checkbox" id="Remember" name="fav_language" value="Remember" />
          {' '}<label htmlFor="Remember">Remember me</label>
        </div>
      </div>
      <div className="tp-login-button">
        <button className="tp-btn w-100" type="submit">Sign up</button>
      </div>
      <div className="tp-signup d-flex justify-content-between">
        <div className="account">
          <a href="#">Don’t have an account?</a>
        </div>
        <div className="signin">
          <Link href="/login">
            <a>Sign in now</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;