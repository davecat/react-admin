/**
 * Created by dave on 2017/11/22.
 */
import React from 'react'
import './css/login.css'
import { Form,Input,Button } from 'element-react';
import 'element-theme-default';
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                password: ''
            }
        };
    }


    handleSubmit(e) {
        axios.post('/api/agency/getAmountByDate',{
            startDay: '2017-09-01',
            endDay: '2017-09-07'
        }).then(function (res) {
            console.log(res);
        });
        this.props.history.push('/home');
    }


    render() {
        return (
            <div className="container">
                <Form labelPosition= 'left' labelWidth="50" model={this.state.form} className="demo-form-stacked">
                    <Form.Item label="姓名">
                        <Input value={this.state.form.name}></Input>
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input value={this.state.form.password}></Input>
                    </Form.Item>
                    <Form.Item labelWidth="0">
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>登陆</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Login