import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../../redux/slice/todoSlice";

import "./todoitem.scss";

function TodoItem({ note }) {
  const dispatch = useDispatch();

  const handleDelete = (note) => {
    dispatch(deleteNote(note));
  };

  return (
    <>
      <div className="todo-item">
        <div className="title">
          <p>{note.title}</p>
        </div>
        <div className="content">
          <div>
            <p>
              Recorded: {note.noteDate} {note.noteTime}
            </p>
          </div>
          <div className="action">
            <Link to={`/note-details/${note.id}`}>
              <div className="show-detail">(Show Details)</div>
            </Link>
            <Link to={"/"}>
              <div className="remove-note" onClick={() => handleDelete(note)}>
                (Remove Note)
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
