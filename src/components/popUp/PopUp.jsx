export default function PopUp({ anim, newTitle, newDescription, setNewTitle, setNewDescription, setNewDeadline, newDeadline, handleUpdate }) {
    //state


    //behaving

    //render
    return (
        <div className={anim.parent}>
            <form action="update" className={anim.child}>
                <input type="text" name="" id="" placeholder="Title" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
                <input type="text" name="" id="" placeholder="description" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} />
                <input type="date" name="" id="" onChange={(e) => setNewDeadline(e.target.value)} value={newDeadline} />
                <input type="submit" value="Update" onClick={handleUpdate} />
            </form>
        </div>
    )
}