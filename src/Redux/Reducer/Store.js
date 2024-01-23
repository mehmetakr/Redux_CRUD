/* 
    ! STORE OLUSTURMA 
     
    1. redux kütüphanesinden "createstore" methodu import edilir.
    2. store içerisinde tutulan veriler kategorize edilir ve reducerlar oluşturulur.
    3. oluşturulan reducerlar combinereducers methodu ile birleştirilir.
    4. store a olusturulan yeni reducer tanıtılır.
    5. oluşturulan store projeye tanıtılır.
   */

import { createStore, combineReducers } from "redux";
import userreducer from "./userreducer";
import todoreducer from "./todoreducer";



   // birden fazla reducer varsa birleştirir..
const rootreducer = combineReducers({
  todoreducer,
  userreducer,
});

// store ' u olustur ve reducer'ları  tanıt.
const store = createStore(rootreducer);

export default store;
