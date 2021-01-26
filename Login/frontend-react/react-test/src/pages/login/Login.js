import React from 'react'
import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'
import './Login.css'
import axios from 'axios'
import {history} from '../../history'
import {login as signin} from '../../utils/auth'
const Login = () =>{
    const handleSubmit = values => {
        axios.post('http://localhost:8000/v1/api/auth', values)
        .then(resp => {
            const {data} = resp
            if(data){
                localStorage.setItem('app-token', data)
                history.push('/home')
            }
           
        })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),  
    })

    const handleSignIn = () =>{
       signin('abc123')
        history.push('/home')
    }

    return(
    <>
    <h1>Login</h1>
    <p>Faça o login antes de continuar</p>
    <Formik initialValues={{}} onSubmit ={handleSubmit} validationSchema={validations}>
        <Form className ="Login">
            <div className="Login-Group">
                <Field name = "email" name="email" className="Login-Field"></Field>
                <ErrorMessage component="span" name ="email" className="Login-Error">

                </ErrorMessage>
            </div>
            <div className="Login-Group">
                <Field name = "password" name="password" className="Login-Field"></Field>
                <ErrorMessage component="span" name ="password" className="Login-Error">

                </ErrorMessage>
            </div>
            <button onClick={handleSignIn} className="Login-Btn" type = "submit">Login</button>
        </Form>
    </Formik>


    </>

    )

    }

export default Login