import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//npm i react-toastify
function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // validate,

    validationSchema: yup.object({

      email: yup.string().email().required("email is required"),

      password: yup.string().required("Pasword is required"),
      
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);

      axios
        .post("http://localhost:2000/api/login", userInputData)
        .then((res) => {
      
          // console.log(res);

          localStorage.setItem('auth',JSON.stringify(res.data))
              navigate("/home");
        })

        // toast.success('LoggedIn Successfully !')

        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });

  return (
    <div
      className="container "
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="bg-warning mt-5"
        style={{ padding: "40px", width: "75%" }}
      >  <h2>LOGIN</h2>
        <form onSubmit={formik.handleSubmit}>
        
          <div className="form-group">
            <label>Email :</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          {formik.errors.email ? (
            <div className="text-danger"> {formik.errors.email} </div>
          ) : null}

         
            

          

          <div className="form-group">
            <label>Password :</label>
            <input
              type="text"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          {formik.errors.password ? (
            <div className="text-danger"> {formik.errors.password} </div>
          ) : null}

       
          <button className="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
