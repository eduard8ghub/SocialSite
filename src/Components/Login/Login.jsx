import React from 'react';
import "./Login.css";
import {Button, Checkbox, Form, Icon, Input} from "antd";
import {Field, reduxForm} from 'redux-form'
import {myInput} from "./input";
import {myCheckbox} from "./checkbox";

const input = Input;

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div className="wrap_form">
            <form onSubmit={handleSubmit}>
                <Form.Item>
                    <Field
                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="Email"
                        name="email"
                        component={myInput}
                        type="text"
                    />
                </Form.Item>
                <Form.Item>
                    <Field
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                        name="password"
                        component={myInput}
                    />
                </Form.Item>
                <Form.Item>
                    <span>Remember me </span>
                    <Field label="Employed" name="remember" id="employed" component={myCheckbox} />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </form>
        </div>

    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const submit = (values) => {
        console.log(values)
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit} />
        </div>

    );
};

export default Login;