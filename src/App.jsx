import { useState } from 'react';
import './App.css';
import ListSubjects from "./components/ListSubjects/ListSubjects";
import Form from './components/form/Form';

function App() {
  //state
  const [Subjects, setSubjects] = useState([]);
  const [value, setValue] = useState("");
  const [toUpdate, setToUpdate] = useState({});

  function handleSubmit(event) {
    event.preventDefault()
    let newSubjectList = [...Subjects, { id: new Date().getTime(), name: value }]
    setSubjects(newSubjectList)
  }

  const handleUpdate = (item) => {
    alert(item?.name)
    setToUpdate(item)
  }


  //render
  return (
    <div id='apk-container'>
      <input type="text" value={toUpdate?.name} />
      <ListSubjects Subjects={Subjects} setSubjects={setSubjects} handleUpdate={handleUpdate} />
      <Form setValue={setValue} handleSubmit={handleSubmit} buttonLabel={"check"} />
    </div>
  )
}

export default App