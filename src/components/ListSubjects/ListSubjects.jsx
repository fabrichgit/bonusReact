import { useState } from "react";

function ListSubjects({ Subjects, setSubjects, handleUpdate }) {


    //behaving
    const handleDelete = (id) => {
        //copy
        const SubjectsCopy = [...Subjects];

        //modify
        const SubjectsModified = SubjectsCopy.filter((subject) => {
            return subject.id !== id;
        })

        //render
        setSubjects(SubjectsModified);
    }


    //render
    return (
        <div id='container-list'>
            {Subjects.map((subject) => {
                return (
                    <div key={subject.id}>
                        <div>{subject.name}</div>
                        <div>
                            <span></span> %
                        </div>
                        <button onClick={() => handleDelete(subject.id)}>delete</button>
                        <button onClick={() => handleUpdate(subject)}>Update</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListSubjects;