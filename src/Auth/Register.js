import React from 'react'
import {useFormik} from 'formik'
import * as yup  from 'yup'
import axios from 'axios'
import {toast} from 'react-toastify';
import{useNavigate } from'react-router-dom'

//npm i react-toastify
function Register() {
  const navigate=useNavigate()


const formik = useFormik({
    initialValues: {
      name: "",
      email:'',
      list:'',
      password:'',
      confirmPassword:''
    },

    // validate,

    validationSchema:yup.object({
      name:yup.string()
      .required('Name is required')
      .strict()
      .trim()
      .min(5,'Minimum 5 charectors required')
      .max(15,'Maximum 15 charectors')
      .uppercase(),

      email:yup.string()
      .email()
      .required('email is required'),


      list:yup.string()
      .required('Select any item'),
       
        password:yup.string()
        .required('Pasword is required'),

        confirmPassword:yup.string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'),null],"Confirm password and password must be same")



    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);


      axios.post('http://localhost:2000/api/register',userInputData)
      .then((res)=>{
        navigate('/login')
      })
     
  // toast.success('LoggedIn Successfully !')

  .catch((err)=>{
    
    toast.error(err.res.data)
  })

    },
  });



  return (
    <div className="container " style={{display:'flex',justifyContent:'center'}}>
      <div className='bg-warning mt-5' style={{padding:'40px' ,width:'75%' }}>
      <h2>REGISTER</h2>
       <form onSubmit={formik.handleSubmit} >

        <div className='form-group'>
        <label>name :</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
</div>

{formik.errors.name ?   <div className='text-danger'> {formik.errors.name} </div>  :null}
        
       


        <div className='form-group'>
        <label>Email :</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        </div>

        {formik.errors.email ?   <div className='text-danger'> {formik.errors.email} </div>  :null}
     

        <div className="form-group">
  <label >Select list:</label>
  <select className="form-control" id="sel1"
    name="list"
    onChange={formik.handleChange}
    value={formik.values.list}>

    <option value=''>----Select----</option>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
  </select>
</div>

{formik.errors.list  ? <p><div className='text-danger'>{formik.errors.list}</div></p>:null}


<div className='form-group'>
        <label>Password :</label>
        <input
          type="text"
          name="password"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        </div>

        {formik.errors.password ?   <div className='text-danger'> {formik.errors.password} </div>  :null}
     

        <div className='form-group'>
        <label>Confirm Password :</label>
        <input
          type="text"
          name="confirmPassword"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        </div>

        {formik.errors.confirmPassword ?   <div className='text-danger'> {formik.errors.confirmPassword} </div>  :null}
     
      

<button className="btn btn-primary">SUBMIT</button>

      </form>
  </div>
    </div>
  );
}

   

export default Register