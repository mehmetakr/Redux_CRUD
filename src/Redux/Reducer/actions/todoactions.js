import { Actiontypes } from "../Actionstype";

//Aksiyonlar  kod içerisinde sürekli tekrar ettiği için aksiyonları ayrı bir actions dosyasında oluşturucaz

// payload işlemini burda yazıcaz ancak içine yazıcagımız payload degerimiz başka sayfada import oldugu  için  fonksıyon tanımlarız  ve geriye bri obje döndürürüz. Ve payloadı parametre olarak alır.. Dinamık hale getirmiş oluruz.

export const addtodo = (payload) => ({
  type: Actiontypes.ADD_TODO,
  payload,
});

export const updatetodo = (payload) => ({
  type: Actiontypes.UPDATE_TODO,
  payload,
});

export const settodos = (payload) => ({
  type: Actiontypes.SET_TODOS,
  payload,
});

export const removetodos = (payload) => ({
  type: Actiontypes.REMOVE_TODO,
  payload,
});
