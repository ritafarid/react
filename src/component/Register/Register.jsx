import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import axios from 'axios';


export default function Register() {

    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)


     async function registerSubmit(values){
        setLoading(true)
       let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
       .catch((err)=>{setApiError(err.response.data.message)})
       if (data.message == 'success'){
        setLoading(false)
       }
       
    }

   function validate(values){
    let errors = {}
    if (!values.name){
        errors.name = 'Name is required'
    }else if (values.name.length < 3){
        errors.name = 'minimum length is 3'
    }else if (values.name.length > 10){
        errors.name = 'maximum kength is 10'
    }

    if (!values.email){
        errors.email = 'email is required'

    }

    if (!values.password){
        errors.password = 'password is required'
    }else if (/^[A-Z][\w @]{5,8}$/.test(values.password)){
        errors.password = 'password invalid ex(Ahmed123)'
    }

    if (!values.rePassword){
        errors.rePassword ='repassword is required'
    }else if(values.rePassword != values.password){
        errors.rePassword = 'password and repassword not matches'
    }

    if (!values.phone){
        errors.phone ='phone is required'
    }else if(/^01[0125][0-9]{9}$/.test(values.phone)){
        errors.phone = 'need Egyptian phone number'
    }


    return errors
   }

let formik = useFormik({
     initialValues:{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone:''
    },validate
    ,onSubmit:registerSubmit
}) 


  return <>
  <div className="w-75 mx-auto py-4">
  <h2>Register Now</h2>
  <form onSubmit={formik.handleSubmit}>
    {apiError?<div className='alert alert-danger'>{apiError}</div>:null}

    <label htmlFor="name">Name:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="name" name="name" className="form-control mb-3" />
     {formik.errors.name && formik.touched.name? <div className='alert alert-danger py-2'>{formik.errors.name}</div>:null}
    <label htmlFor="email">Email:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name="email" className="form-control mb-3" />
    {formik.errors.email && formik.touched.email? <div className='alert alert-danger py-2'>{formik.errors.email}</div>:null}
    
    <label htmlFor="password">Password:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="password" name="password" className="form-control mb-3" />
    {formik.errors.password && formik.touched.password? <div className='alert alert-danger py-2'>{formik.errors.password}</div>:null}
    
    <label htmlFor="rePassword">rePassword:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="Password" id="rePassword" name="rePassword" className="form-control mb-3" />
    {formik.errors.rePassword && formik.touched.rePassword? <div className='alert alert-danger py-2'>{formik.errors.rePassword}</div>:null}
    
    <label htmlFor="phone">Phone:</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" id="phone" name="phone" className="form-control mb-3" />
    {formik.errors.phone && formik.touched.phone? <div className='alert alert-danger py-2'>{formik.errors.phone}</div>:null}
    {loading?  <button className='btn bg-main text-light' type='button'>
        <i className='fas fa-spinner fa-spin'></i>
    </button> :  <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn ">Register</button>
  }
    
  </form>
</div>

  </>
}
