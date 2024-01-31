import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const Listtodocard = () => {
  // useselector  store daki reducer'lara abone olmaya yani reducer'larda tutulan veriler erişmeye yarar.
  // Store çok büyük olabileceginden sadece genelde ihtiyacımız olan reducerlara abone oluruz ve onların verilerine erişiriz..

  // Bunun içib  => storeç.reducerismi yazarak istediğimiz reducera ulaşmiş oluruzç

  const store = useSelector((store) => store.todoreducer);

  console.log(store.todos);
  return (
    <div>
      {store.todos.map((todo) => (
        <TodoCard  todo={todo} key={todo.id}/>

      ))}
    </div>
  );
};

export default Listtodocard;
