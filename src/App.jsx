import React from "react";
import Addform from "./Components/AddForm";
import TodoCard from "./Components/TodoCard";
import Listtodocard from "./Components/ListTodos";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className=" vh-100 vw-100 bg-dark text-white p-5">
      <div className="container p-5">  
      <h2>REDUX  <span className="text-warning">CRUD</span></h2>
      
      <Addform />
      <Listtodocard />
      </div>
    </div>
  );
};

export default App;
