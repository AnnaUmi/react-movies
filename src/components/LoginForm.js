import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/Input'
class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    validate = () => {
        const options = {abortEarly: false}
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors
    }
    validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required'
            //...
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required'
            //..
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const errors = this.validate();
        console.log(errors)
        this.setState({ errors: errors || {} })
        if (errors) return
        console.log('submitter')
    }
    handleInput = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]
        console.log(errors[input.name]);

        const account = { ...this.state.account };
        account[input.name] = input.value;

        this.setState({
            account, errors
        })
    }
    render() {
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="username"
                        label="Name"
                        value={account.username}
                        onChange={this.handleInput}
                        error={errors.username}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={account.password}
                        onChange={this.handleInput}
                        error={errors.password}
                    />
                    <button className="btn btn-primary">Login</button>

                </form>
            </div>
        );
    }
}

export default LoginForm;