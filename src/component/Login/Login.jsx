import React ,{useState}from 'react'
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Login() {

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  let Navigate = useNavigate()


   async function loginSubmit(values){
      setLoading(true)
     let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
     .catch((err)=>{setApiError(err.response.data.message)})
     if (data.message == 'success'){
      setLoading(false)
      Navigate('/')
     }
     
  }

 function validate(values){
  let errors = {}
 

  if (!values.email){
      errors.email = 'email is required'

  }

  if (!values.password){
      errors.password = 'password is required'
  }else if (/^[A-Z][\w @]{5,8}$/.test(values.password)){
      errors.password = 'password invalid ex(Ahmed123)'
  }


  return errors
 }

let formik = useFormik({
   initialValues:{
      
      email:'',
      password:'',
      
  },validate
  ,onSubmit:loginSubmit
}) 


return <>
<div className="w-75 mx-auto py-4">
<h2>Register Now</h2>
<form onSubmit={formik.handleSubmit}>
  {apiError?<div className='alert alert-danger'>{apiError}</div>:null}

  
  <label htmlFor="email">Email:</label>
  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name="email" className="form-control mb-3" />
  {formik.errors.email && formik.touched.email? <div className='alert alert-danger py-2'>{formik.errors.email}</div>:null}
  
  <label htmlFor="password">Password:</label>
  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="password" name="password" className="form-control mb-3" />
  {formik.errors.password && formik.touched.password? <div className='alert alert-danger py-2'>{formik.errors.password}</div>:null}
  
 
  {loading?  <button className='btn bg-main text-light' type='button'>
      <i className='fas fa-spinner fa-spin'></i>
  </button> :  <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn ">Login</button>
}
  
</form>
</div>

</>
}

