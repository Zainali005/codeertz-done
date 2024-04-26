import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import useFirebase from '../../hooks/use-firebase';

const LoginForm = () => {
  // use firebase 
  const {loginWithEmailPassword,resetPassword} = useFirebase();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      loginWithEmailPassword(values.email,values.password)
      resetForm()
    }
  })

  // handleResetPass
  const handleResetPass = (email) => {
    resetPassword(email);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-mail">
        <label htmlFor="email">Enter your Email</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Mail" id="email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-password">
        <label htmlFor="Password">Enter Password</label>
        <input value={values.password} onChange={handleChange}
          onBlur={handleBlur} type="password" placeholder="Enter your password" id="password" />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="tp-forgot-password d-flex justify-content-between">
        <div className="checkbox">
          <input type="checkbox" id="Remember" name="fav_language" value="Remember" />
          {' '}
          <label htmlFor="Remember">Remember me</label>
        </div>
        <div className="forgot">
          <a href="#" onClick={()=> handleResetPass(values.email)}>Forgot password?</a>
        </div>
      </div>
      <div className="tp-login-button">
        <button className="tp-btn w-100" type="submit">Sign In</button>
      </div>
      <div className="tp-signup d-flex justify-content-between">
        <div className="account">
          <a href="#">Don’t have an account?</a>
        </div>
        <div className="signin">
          <Link href="/register">
            <a >Sign up now</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;