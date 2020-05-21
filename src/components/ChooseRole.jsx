import React from "react";
import PageTitle from "./PageTitle";
import Button from "./Button";
import styles from "../screens/Login.module.css";

const ChooseRole = ({ setRole }) => {
  return (
    <div>
      <PageTitle>
        <h3>Create a new account</h3>
      </PageTitle>
      <div className={styles.login}>
        <h4>Are you a candidate or a company?</h4>
        <Button
          action={() => {
            setRole("company");
          }}
          type={"submit"}
          variant={"secondary"}
          size={"medium"}
        >
          Company
        </Button>
        <Button
          action={() => {
            setRole("candidate");
          }}
          type={"submit"}
          variant={"secondary"}
          size={"medium"}
        >
          Candidate
        </Button>
      </div>
    </div>
  );
};

export default ChooseRole;
