import { createStore } from "redux";


//Create Action
export const addContact = (contact) => {
  return {
    type: "CREATE_CONTACT",
    payload: contact,
  };
};

//Delete Action
export const deleteContact = (contact) => {
  return {
    type: "DELETE_CONTACT",
    payload: contact,
  };
};

//Edit Action
export const updateContact = (contact) => {
  return {
    type: "UPDATE_CONTACT",
    payload: contact,
  };
};

//Redux

const inicialState = {
  contacts: []
};


const ContactReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_CONTACT":

      return {
        ...state,
        contacts: state.contacts.map(item => {
          if (item.id == action.payload.id) {
            return action.payload;
          }
          return item;
        }
        )
      };
    default:
      return state;
  };
};

//Store
const store = createStore(ContactReducer);
export default store;