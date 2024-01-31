import { useDispatch } from "react-redux";
import { Actiontypes } from "../Redux/Reducer/Actionstype";
import { updatetodo } from "../Redux/Reducer/actions/todoactions";
import axios from "axios";
const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  console.log("asdasd", todo);
  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(todo, e.target)

    // inputtaki ismi
    const newtext = e.target[1].value;

    const updated = { ...todo, text: newtext };

    // eski todonun bütün verilerini alıp inputtan aldıgımız  veri ile güncelleme

    //    PUT : BİR VERİNİN BÜTÜN DEĞERLERİNİ GÜNCELLEMEMİZİ SAĞLAR.
    //   PATCH : PATCH İSE O VERİDEKİ BİR DEĞERİ GÜNCELLEME İŞLEMİ YAPMAK İSTERSEK ONU KULLANIRIZ (TARİH ,GÜN , İD vs.)

    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updatetodo(updated)));
    // storedaki todoyu güncelle

    //close  fonksiyonunu çalıştırıcaz
    // close();
  };

  return (
    // ctrl shift l tusları kelimelerinin hepsini seçmeye yarar
    <div
      className="modal d-block text-black bg-dark bg-opacity-50"
      role="dialog"
    >
      <div className="modal-dialog  modal-dialog-centered" role="document">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todoyu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="">Yeni başlik</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
            <button type="button" className="btn btn-secondary" onClick={close}>
              Vazgeç
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
