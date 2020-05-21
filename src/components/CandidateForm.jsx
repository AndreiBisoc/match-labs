import React, { useState, useEffect, useContext } from "react";

import styles from "./CandidateForm.module.css";
import Button from "./Button";
import Loader from "./Loader";
import Select from "react-select";
import { fetchTechnologies } from "../utils/request";

const CandidateForm = ({ fields, onSubmit, role }) => {
  const [values, setValues] = useState(fields);
  const [technologies, setTechnologies] = useState(null);

  useEffect(() => {
    const onMount = async () => {
      if (role === "candidate") {
        const technologies = await fetchTechnologies();
        setTechnologies(technologies);
      }
    };
    onMount();
  }, [role]);

  const onChange = (e) => {
    const newValues = [...values];
    const index = newValues.findIndex((value) => value.name === e.target.name);
    newValues[index] = { ...newValues[index], value: e.target.value };
    setValues(newValues);
  };

  const onSelectChange = (selected) => {
    if (!selected) return;

    const newValues = [...values];
    const index = newValues.findIndex((value) => value.name === "technologies");
    newValues[index] = {
      ...newValues[index],
      value: selected.map((s) => s.value),
    };
    setValues(newValues);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const obj = {};
    values.forEach((item) => {
      obj[item.name] = item.value;
    });

    onSubmit(obj);
  };

  if (!values) return <Loader></Loader>;
  
  const select = role === "candidate" && (
    <Select
      name={"technologies"}
      onChange={onSelectChange}
      isMulti
      options={technologies}
      placeholder={"Technologies"}
      styles={{
        control: () => ({
          padding: "0.6rem 0 0.7rem 0.5rem",
          display: "flex",
          borderRadius: ".3rem",
          border: "0.1rem solid #ebebeb",
          fontSize: "1.1rem",
          marginBottom: "1.6rem",
        }),
      }}
    />
  );

  return (
    <>
      <form onSubmit={(e) => formHandler(e)} className={styles.form}>
        {values.map(
          (field) =>
            field.name !== "technologies" && (
              <div key={field.name} className={styles.field}>
                <input
                  required
                  onChange={onChange}
                  value={field.value}
                  placeholder={field.placeholder || ""}
                  name={field.name}
                ></input>
              </div>
            )
        )}

        {select}
        <Button type={"submit"} variant={"secondary"} size={"medium"}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default CandidateForm;
