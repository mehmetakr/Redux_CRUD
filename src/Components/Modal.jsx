import { useDispatch } from "react-redux";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(todo, e.target)

    // inputtaki ismi
    const newtext = e.target[1].value;

    const updated = { ...todo, text: newtext };

    // eski todonun bütün verilerini alıp inputtan aldıgımız  veri ile güncelleme

    // storedaki todoyu güncelle

    dispatch({
      type: Actiontypes.UPDATE_TODO,
      payload: updated,
    });

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
