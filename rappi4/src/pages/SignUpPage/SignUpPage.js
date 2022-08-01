<<<<<<< HEAD
import React from 'react'

const SignUpPage = ()=> {
  return (
    <div>SignUpPage</div>
  )
}

export default SignUpPage
=======
import React from "react";

import SignUpForm from "./SignUpForm";
import useUntectedPage from "../../hooks/useUnprotectedPage"

const SignUpPage = () => {
  useUntectedPage()
  return (
    <div>
      <div>
        <h1>Olá, boas vindas ao LabEddit</h1>
      </div>
      <SignUpForm />
    </div>
  );
};
export default SignUpPage;
>>>>>>> df2b47e9c1aca312e78410a1cab35a8e949f2081
