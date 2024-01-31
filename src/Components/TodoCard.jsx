import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { Actiontypes } from "../Redux/Reducer/Actionstype";
import { removetodos, updatetodo } from "../Redux/Reducer/actions/todoactions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isopen, setisopen] = useState(false);
  // store dan todo yu kaldır
  const handledelete = () => {
    // apiye silme isteği at
    axios
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(removetodos(todo.id)))
      .catch(() => alert("Silme işleminde bir sorun oluştu."));
  };

  // store daki todonun isdone degerini tersine çevir.
  const handlecomplete = () => {
    // todo nun isdone degerini tersine çevirmeliyiz.

    const updates = { ...todo, isdone: !todo.isdone };

    // Store daki eski todo'yu güncel ile değiştir.
    // Bileşenden store a etki etmek için dispatch fonksiyonunu kullanırız..
    axios
      .put(`/todos/${todo.id}`, updates)

      // store daki eski todoyu güncel todo ile değiştir.

      .then(() => dispatch(updatetodo(updates)));
  };

  return (
    <div className=" shadow  shadow-lg border my-5 p-5">
      <h5>{todo.text}</h5>
      <h5> {todo.isdone ? "Tamamlandı" : "Devam ediyor"}</h5>
      <p> {todo.create_at}</p>

      <button onClick={() => setisopen(true)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={handlecomplete} className="btn btn-success mx-3">
        {" "}
        {todo.isdone ? "Geri Al" : "Tamamla"}{" "}
      </button>
      <button onClick={handledelete} className="btn btn-danger">
        Sil
      </button>
      {isopen && <Modal todo={todo} close={() => setisopen(false)} />}
    </div>
  );
};
export default TodoCard;
