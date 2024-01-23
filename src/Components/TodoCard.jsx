import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { Actiontypes } from "../Redux/Reducer/Actionstype";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isopen, setisopen] = useState(false);
  // store dan todo yu kaldır
  const handledelete = () => {
    dispatch({
      type: Actiontypes.REMOVE_TODO,
      payload: todo.id,
    });
  };

  // store daki todonun isdone degerini tersine çevir.
  const handlecomplete = () => {
    // todo nun isdone degerini tersine çevirmeliyiz.

    const updates = { ...todo, isdone: !todo.isdone };

    // Store daki eski todo'yu güncel ile değiştir.
    // Bileşenden store a etki etmek için dispatch fonksiyonunu kullanırız..

    dispatch({
      type: "UPDATE_TODO",
      payload: updates,
    });
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
      {isopen && <Modal todo={todo.text} close={() => setisopen(false)} />}
    </div>
  );
};
export default TodoCard;
