import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/Reducer/actions/todoactions";
// Burdaki addform  bileşeninimizde bir veri var ve bu verinin store ' a aktarılması gerekli .Bu işlemi ise Reducer ile yapabiliriz.
// Veriyi aktarmanın tek yolu var dispatch etmektir. usedispatch fonksiyonu kullanırız.

// Store a bileşen eklemenın tek yolu  reducera veri aktarma işlemidir.
// dispatch içerisinde herzaman bir aksiyon tanımlarız.
// Ve bu aksiyon bir obje olmalı
// ve herzamanki gibi bit type ve bir de payload olmalidir.

const Addform = () => {
  // dispatch kurulumu
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();

    // todo objesi oluştur..

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      isdone: false,
      create_at: new Date().toLocaleDateString(),
    };

    // oluşturulan todo yu store' a ekleyelimm.ff
    // console.log(newTodo);
    dispatch(addtodo(newTodo));
  };
                
  return (
    <form onSubmit={handlesubmit} className="d-flex gap-1 my-5">
      <input 
        className="form-control"
        form
        type="text"
        placeholder="örn:typscript yaz"
      />
      <button  className="btn btn-warning">EKLE</button>
    </form>
  );
};
export default Addform;
