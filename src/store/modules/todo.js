import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';
const DELETE = 'todo/DELETE';


let id = 3; 
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, (text,day) => ({text,day,id:id++}));
export const done = createAction(DONE, id => id);
export const del = createAction(DELETE, id => id);

const initialState = {
    input: '',
    list: [
      {
        day:'일', 
        id: 0,
        name: '일요일의 todo1',
        doned: true,
      },
      {
        day: '일',
        id: 1,
        name: '일요일의 todo2',
        doned: false,
      },
      {
        day: '월',
        id: 2,
        name: '월요일의 todo1',
        doned: false,
      },
    ],
  };

  export default handleActions(
      {
          [CHANGE_INPUT]: (state,action) => ({
              ...state,
              input:action.payload,
          }),
          [CREATE]: (state,action) => ({
              ...state,
              list: state.list.concat({
                  day:action.payload.day,
                  id:action.payload.id,
                  name:action.payload.text,
                  doned: false,
              }),
          }),
          [DONE]: (state, action) => ({
            ...state,
            list: state.list.map(
              item =>
                item.id === action.payload
                  ? { ...item, doned: !item.doned }
                  : item
            ),
          }),
          [DELETE]: (state, action) => ({
            ...state,
            list: state.list.filter(item => item.id !== action.payload),
          }),
        },
        initialState
      
     );

