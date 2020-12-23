import React, { Component } from 'react';
import { Formik } from 'formik';

class Auth extends Component {
    state = {
        mode: "Sign Up"
    }

    switchModeHandler = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" });
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: ""
                        }
                    }

                    onSubmit={
                        (values) => {
                            console.log("Values: ", values);
                        }
                    }
                    validate={
                        (values) => {
                            const errors = {};

                            if(!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/i.test(values.email)) {
                                errors.email = "Invalid email address";
                            }

                            if(!values.password) {
                                errors.password = 'Required';
                            } else if (values.password.length < 4) {
                                errors.password = "Must be at least 4 characters!";
                            }

                            if(this.state.mode === "Sign Up") {
                                if(!values.passwordConfirm) {
                                    errors.passwordConfirm = 'Required';
                                } else if(values.password !== values.passwordConfirm) {
                                    errors.passwordConfirm = "Password field does not match!"
                                }
                            }
                            return errors;
                        }
                    }
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                    <div style={{
                        border: '1px solid grey',
                        padding: '15px',
                        borderRadius: '7px'
                    }}>
                        <button style={{
                            width: '100%',
                            backgroundColor: '#D70F64',
                            color: 'white'
                        }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                        <br/><br/>
                        <form onSubmit={handleSubmit}>
                            <input 
                                name="email"
                                placeholder="Enter your Email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red'}}>{errors.email}</span>
                            <br/>
                            <input 
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red'}}>{errors.password}</span>
                            <br/>
                            {this.state.mode === "Sign Up" ? <div>
                                <input 
                                    name="passwordConfirm"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red'}}>{errors.passwordConfirm}</span>
                                <br/>
                            </div> : null}
                            <button type="submit" className="btn btn-success">{this.state.mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                        </form>
                    </div>)}
                </Formik>
            </div>
        )
    }
}

export default Auth;