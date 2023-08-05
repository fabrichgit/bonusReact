function ListSubjects({ Subjects, setSubjects, handleShowPopUp }) {

    let count = 1;

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
        <div className="container-table">

            <table>
                <thead id="head-table" style={{ backgroundColor: 'rgb(130, 122, 122)' }}>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Dead-line</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody id='container-list'>
                    {
                        Subjects.map((subject) => {
                            return (
                                <tr key={subject.id}>
                                    <td>{subject.title}</td>
                                    <td>{subject.description}</td>
                                    <td>{subject.deadline}</td>
                                    <td onClick={() => handleDelete(subject.id)} style={{ cursor: "pointer" }}>
                                        <img src="../../public/message-square-x-solid-24.png" alt="" />
                                    </td>
                                    <td onClick={() => handleShowPopUp(subject)} style={{ cursor: "pointer" }}>
                                        <img src="../../../public/edit-alt-solid-24.png" alt="" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tr id="foot" /*style="visibility: hidden; border: none;"*/></tr>
            </table>

        </div>
    )

}

export default ListSubjects;