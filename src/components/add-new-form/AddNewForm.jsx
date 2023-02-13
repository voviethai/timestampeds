import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewNote } from "../../redux/slice/todoSlice";
import "./addnewform.scss";

function AddNewForm() {
  const dispatch = useDispatch();

  const jsonNote = JSON.parse(localStorage.getItem("NotesApp"));

  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [note, setNotes] = useState(jsonNote || []);

  const validate = () => {
    if (!title) {
      alert("Bạn chưa nhập tiêu đề");
      return false;
    }
    if (!detail) {
      alert("Bạn chưa nhập chi tiết");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    validate();
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const data = {
      title,
      detail,
      noteDate: date,
      noteTime: time,
      id: uuidv4(),
    };
    setNotes((prev) => {
      const note = [...prev, data];
      const jsonNotes = JSON.stringify(note);
      localStorage.setItem("NotesApp", jsonNotes);
      return note;
    });
    dispatch(addNewNote(data));
  };

  return (
    <div className="add-new-form">
      <h1>Timestamped Notes App</h1>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Note Title"
      />
      <input
        onChange={(e) => {
          setDetail(e.target.value);
        }}
        placeholder="Note Details"
      />

      <button onClick={handleSubmit}>Add Note</button>
      <div className="hr-custom"></div>
    </div>
  );
}
export default AddNewForm;
