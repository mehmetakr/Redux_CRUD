  


  // dalgınlıktan kaynaklı olarak action type larda yazım hatası yapmamak için bütün aksiyonları  bir objenin içerisine özellik şeklinde tanımlarız....




  export const Actiontypes = { 

    ADD_TODO : "ADD_TODO",
    REMOVE_TODO : "REMOVE_TODO",
    UPDATE_TODO :"UPDATE_TODO",
     // Aldığımız verileri todosa  eşitleyen aktaranyenı bir method (bir aksiyon) 
     // APİ den aldıgımız verileri todolara aktarmaya yarayan bir todos olucak
    SET_TODOS: "SET_TODOS"
 
    



  }