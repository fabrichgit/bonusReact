import { useState } from "react";

function Form({ setValue, handleSubmit, buttonLabel }) {
    //state



    //behaving
    /*const handleSubmit = (event) => {
        event.preventDefault();

        const SubjectsStateCopy = [...Subjects];

        const id = new Date().getTime();
        const name = value;
        SubjectsStateCopy = [...Subjects, { id, name }];

        setSubjects(SubjectsStateCopy);

        setValue("");
    };


    const handleChange = (event) => {
        setValue(event.target.value);
    }*/



    //render
    return (
        <>
            <form action="submit">
                <input type="text" placeholder="Enter name" onChange={(e) => setValue(e.target.value)} />
                <input type="submit" value={buttonLabel} onClick={handleSubmit} />
            </form>
        </>
    )
}


export default Form;