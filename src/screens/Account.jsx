import React, { useEffect, useState, useContext } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import { AppContext } from "../Context";
import { editCandidate } from "../utils/request";

const Account = () => {
  // 1. Subscribe to AppContext data
  const appContext = useContext(AppContext);
  const [fields, setFields] = useState(null);
  const user = appContext.user.personal;

  useEffect(() => {
    // 2. Map with object keys and format your data before setting it in state
    const result = Object.keys(user).map(function(key, index) {
        return {
            name: key,
            value: user[key]
        }
      });
      setFields(result);
  }, []);

  const onFormSubmit = (values, id) => {
    console.log(id);
    editCandidate(values, id);
  };

  if (!fields) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Edit account</h3>
      </PageTitle>
      <CandidateForm onSubmit={onFormSubmit} fields={fields}></CandidateForm>
    </>
  );
};

export default Account;
