import React, { useEffect } from "react";
import Addform from "./Components/AddForm";
import TodoCard from "./Components/TodoCard";
import Listtodocard from "./Components/ListTodos";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { settodos } from "./Redux/Reducer/actions/todoactions";

const App = () => {
  
  axios.defaults.baseURL = " http://localhost:3040/";

  // verileri al ve store a aktar

  // Verileri alıp store aktarmak istediğimizde  herzaman öncelikle dispatch etmemmız lazımdir.

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/todos").then((res) => dispatch(settodos(res.data)))
  }, []);
  return (
    <div className=" vh-100 vw-100 bg-dark text-white p-5">
      <div className="container p-5">
        <h2>
          REDUX <span className="text-warning">CRUD</span>
        </h2>

        <Addform />
        <Listtodocard />
      </div>
    </div>
  );
};

export default App;
