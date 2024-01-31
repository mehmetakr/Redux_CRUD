/* 

 ! reducer  

 * store un nasıl değişeceğine karar verir.
 * Reducer normal bir fonksiyondur.
 *  ve 2 parametre alır
 *  > state : store'da tutulan  verilerin son durumu 
 *  > action: verilerin nasıl değişeceğini belirten obje...
 *  
 * Reducer fonksiyonlarından neyi return edersek  state imizin yeni değeri o olmus olur  
 * 
 * 

  ? önemli : reducer fonksiyonunda return edilen veri store un son hali olur..

   

*/

import { Actiontypes } from "./Actionstype";

//  ! Reducer fonksiyonundan ne return edıyorsak artık  stateimizin yeni değeri  o oluyor.
const initialstate = {
  todos: [],
  category: [],
};
  

const todoreducer = (state = initialstate, action) => {
  switch (action.type) {
    case Actiontypes.ADD_TODO:
      console.log("add fonksiyonu yakalandı", action);
      const temptodos = state.todos.concat(action.payload);

      // todos dizimizde güncelleme yaptıgımız için  (todos:temptodos)
      // ve state dizisini komple alıyoruz ardından todos dizimizi temptodos ile değiştiriyoruz..
      return { ...state, todos: temptodos };

    case Actiontypes.REMOVE_TODO:
      // stateden o id yi çıkarmak için o id ye eşit olmayanları todo dizisine geri aktar işlemi yaptık
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: filtered };

    case Actiontypes.UPDATE_TODO:
      // map metodu ile burada güncelleme işlemi gerçekleştirdik
      // mape çevirdik item adında değere atadık değişkenleri
      // item degerimiz action.payload adlı yapıcagımız değişkene eşitse actionun payloadını dönder( yani değişecek olan elemanı dönder) yoksa item ın kendisini gönder..
      const newtodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return { ...state, todos: newtodos };

      case Actiontypes.SET_TODOS:

      return {...state,todos: action.payload}


      
    // EĞERKİ GELEN AKSİYON YUKARIDAKİLERDEN HİÇBİRİ DEĞİLSE STATE İ DEĞİŞRTİRME
    default:
      return state;
  }
};

// reducer ı store'a tanıtmak için export et
export default todoreducer;

/*  // 1) splice yöntemi
       state 'deki kopyasını oluşurun

      const copytodos = [ ...state.todos ];
       b) güncellenicek elemanın dizide sırasını bul .
      const index = copytodos.findIndex(
        (todo) => todo.id === action.payload.id
      ); 

       splice ile diziyi güncelle
      copytodos.splice(index,1,action.payload); */
