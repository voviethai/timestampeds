import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteNote } from "../../redux/slice/todoSlice";
import "./noteDetail.scss";

function NoteDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.data);

  const newNote = todoList.filter((item) => item.id === id);

  console.log("Note New: ", newNote[0].title);

  const handleDelete = (note) => {
    dispatch(deleteNote(note));
  };
  return (
    <div className="detail-total">
      <div className="note-detail">
        <div className="note-title">
          <p> {newNote[0].title}</p>
        </div>
        <div>
          <p>
            Recorded: {newNote[0].noteDate} {newNote[0].noteTime}
          </p>
          <div className="action">
            <Link to={`/`}>
              <div className="hide-detail">(Hide Details)</div>
            </Link>
            <Link to={"/"}>
              <div
                className="remove-detail"
                onClick={() => handleDelete(newNote[0])}
              >
                (Remove Note)
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hr-custom"></div>
      <p style={{ "margin-left": "20px" }}>Details: {newNote[0].detail}</p>
    </div>
  );
}

export default NoteDetail;
