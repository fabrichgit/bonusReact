import { useState } from 'react';
import './App.css';
import ListSubjects from "./components/ListSubjects/ListSubjects";
import PopUp from './components/popUp/PopUp';
import Form from './components/form/Form';

function App() {
  //state

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const [Subjects, setSubjects] = useState([
    {
      id: 'aa', title: 'aa', description: "aa", deadline: '2023-11-01',
      update() {
        this.title = newTitle;
        this.description = newDescription;
        this.deadline = newDeadline;
      }
    },
    {
      id: 'bb', title: 'bb', description: 'bb', deadline: '2024-01-10',
      update() {
        this.title = newTitle;
        this.description = newDescription;
        this.deadline = newDeadline;
      }
    }
  ]);


  const [toUpdate, setToUpdate] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [anim, setanim] = useState({ child: "hide", parent: "hide" });



  function handleAdd(event) {
    event.preventDefault()
    let newSubjectList = [...Subjects, {
      id: new Date().getTime(), title: title, description: description, deadline: deadline,
      update() {
        this.title = newTitle;
        this.description = newDescription;
        this.deadline = newDeadline;
      }
    }];
    setSubjects(newSubjectList);
    setTitle("");
    setDescription("")
    setDeadline("");

  }

  const handleShowPopUp = (item) => {
    setNewTitle(item.title);
    setNewDescription(item.description);
    setNewDeadline(item.deadline);
    setToUpdate(item);
    setanim({ child: "rotate", parent: "popUp" })
  }


  const handleUpdate = (event) => {
    event.preventDefault();

    let newSubjectList = [...Subjects];
    newSubjectList[newSubjectList.indexOf(toUpdate)].deadline = newDeadline;
    newSubjectList[newSubjectList.indexOf(toUpdate)].description = newDescription;
    newSubjectList[newSubjectList.indexOf(toUpdate)].title = newTitle;

    setSubjects(newSubjectList);

    setanim({ child: "hide", parent: "hide" })

  }


  //render
  return (
    <div id='apk-container'>
      <PopUp anim={anim} setanim={setanim} setNewDescription={setNewDescription} setNewTitle={setNewTitle} newDescription={newDescription} newTitle={newTitle} setNewDeadline={setNewDeadline} newDeadline={newDeadline} handleUpdate={handleUpdate} />
      <Form setTitle={setTitle} title={title} setDescription={setDescription} description={description} setDeadline={setDeadline} deadline={deadline} handleAdd={handleAdd} buttonLabel={"check"} />
      <ListSubjects Subjects={Subjects} setSubjects={setSubjects} title={title} description={description} deadline={deadline} handleShowPopUp={handleShowPopUp} />
    </div>
  )
}

export default App;