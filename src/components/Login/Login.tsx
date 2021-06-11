import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { loginThunk } from "../../redux/authReducer";
import { RootReduxState } from "../../redux/store";
import { Input } from "../../utils/validate/Validate";
import { maxLength, required } from "../../utils/validate/validators";
import s from "./Login.module.css";

const maxSymbols = maxLength(100);

const Login = (props: any) => {
  const onSubmit = (formData: any) => {
    props.loginThunk(formData.login, formData.pass, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.login_container}>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props: any) => {
  return (
    <form className={props.error ? s.form_error + " " + s.form : s.form} onSubmit={props.handleSubmit}>
      <h1>Login</h1>
      <div>
        <Field name='login' component={Input} validate={[required, maxSymbols]} type='text' />
      </div>
      <div>
        <Field name='pass' component={Input} validate={[required, maxSymbols]} type='password' />
      </div>
      <div>
        <Field name='rememberMe' component='input' type='checkbox' />
        remember me
      </div>
      {props.error && <p className={s.common_error}>{props.error}</p>}
      <button>Login</button>
    </form>
  );
};

const LoginFormRedux = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToprops = (state: RootReduxState) => ({
  //@ts-ignore
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToprops, { loginThunk })(Login);
