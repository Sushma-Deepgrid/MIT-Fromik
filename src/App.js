import React from "react";
import '../src/index.css'
// TODO: import useFormik from formik library
import { Formik, Field, Form, useFormik } from "formik";



const initialValues =  {
  email : '',
  password : ''
}

const onSubmit = values => {
  console.log(values , "form values")
  if(values.email && values.password){
    alert("Login Successful");
  }
}

const validate = values => {

  let errors = {}

  if(!values.email){
    errors.email = 'Field required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Username should be an email'
  }

  if(!values.password){
    errors.password = 'Field required'
  }
 

  return errors

}


function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate 
  })

  console.log(formik.errors, "form errors")

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type='text' id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div className="errors" id="emailError">{formik.errors.email}</div> : null}
        </div>


        <div>
        <label htmlFor="password">Password</label>
        <input type='text' id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div className="errors" id="pswError">{formik.errors.password}</div> : null}
        </div>

        <button type="submit" id="submitBtn">Submit</button>

    
      </form>

    </div>
  );
}

export default App;
