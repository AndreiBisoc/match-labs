import React from "react";
import CandidateForm from "../components/CandidateForm";
import { CREATE_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";

const Register = () => {
  return (
    <>
      <PageTitle>
        <h3>Register</h3>
      </PageTitle>
      <CandidateForm fields={CREATE_CANDIDATE_FIELDS}></CandidateForm>
    </>
  );
};

export default Register;