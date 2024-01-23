/* 

 ! reducer  

 * store un nasıl değişeceğine karar verir.
 * Reducer normal bir fonksiyondur.
 *  ve 2 parametre alır
 *  > state : store'da tutulan  verilerin son durumu 
 *  > action: verilerin nasıl değişeceğini belirten obje...
 * 
 * 
 * 

  ? önemli : reducer fonksiyonunda return edilen veri store un son hali olur..


*/

const initialstate = {
    todos: [],
    category: [],
  };
  
  const userreducer = (state = initialstate, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return "BOS";
  
      case "REMOVE_TODO":
        return "BOS";
  
      case "UPDATE_TODO":
        return "BOS";
  
      // EĞERKİ GELEN AKSİYON YUKARIDAKİLERDEN HİÇBİRİ DEĞİLSE STATE İ DEĞİŞRTİRME
      default:
        return state;
    }
  };
  
  // reducer ı store'a tanıtmak için export et
  export default userreducer;
  