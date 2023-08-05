function Form({ setDescription, setTitle, setDeadline, deadline, title, description, handleAdd, buttonLabel }) {

    //render
    return (
        <>

            <form action="submit" className="form">
                <h2>To-do list</h2>
                <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} value={title} required />
                <input type="text" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} value={description} required />
                <label htmlFor=""><h4>Dead-line</h4></label>
                <input type="date" onChange={(e) => setDeadline(e.target.value)} value={deadline} required />
                <a href="#foot">
                    <input type="submit" value={buttonLabel} onClick={handleAdd} />
                </a>
            </form>

        </>
    )
}


export default Form;