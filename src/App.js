import AddNewForm from './components/add-new-form/AddNewForm';
import TodoList from './components/todoList/TodoList';
import './App.css';
import { Route, Routes } from 'react-router';
import NoteDetail from './components/note-detail/NoteDetail';

function App() {
  return (
    <div className="app">
        <AddNewForm/>
        <TodoList/>
        <Routes>
          <Route path='/note-details/:id' element={<NoteDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
