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
