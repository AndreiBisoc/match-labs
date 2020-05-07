import React, { useState } from 'react'
import styles from './CandidateForm.module.css'

const CandidateForm = (props) => {
    const [state, setState] = useState(props.inputData);

    const handleOnChange = (e) => {
        const newState = [...state];
        const index = newState.findIndex((value) => value.name === e.target.name);
        newState[index].value = e.target.value;
        setState(newState);
    };

    const renderFormInputs = props.inputData.map(input => {
        return (    
            <input
                key={input.name}
                type="text"
                name={input.name}
                value={input.value}
                placeholder={input.placeholder || ''}
                onChange={(e) => handleOnChange(e)}
                />
        )   
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {};
        state.forEach((item) => {
          obj[item.name] = item.value;
        });
        props.handleSubmitButton(obj);
    }

    return (
        <form className={`${styles.form} ${styles.field}`}>
            {renderFormInputs}
            <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)}/>
        </form>
    )
}

export default CandidateForm;
