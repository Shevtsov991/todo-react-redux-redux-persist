import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",

  initialState: {
    todos: [],
    completedTodos:[],
    startPage: true,
  },

  reducers: {

    addTask(store, action) {
      store.todos.push({
        id :store.todos.length + 0.1 * Math.random(),
        ...action.payload.newTask
      });
      
    },

    appReducer(store, action) {
      if (action.payload === "true"){
        store.startPage = true
    }else if(action.payload === "false"){
        store.startPage =false}
    },

    delTask(store, action){
      store.todos = store.todos.filter((el) => el.id !== action.payload.el.id)
      if(action.payload.el.isCompl){
        store.completedTodos = store.completedTodos.filter((el) => el.id !== action.payload.el.id)
      }
    },

    completedTask(store, action) {

      store.todos[Math.floor(action.payload.el.id)]= {
        ...store.todos[Math.floor(action.payload.el.id)],
      className:"completed"
      }
     
      store.completedTodos.push({
        ...action.payload.el,
        className: "completed", 
        isCompl: true 
      })
      
    }, 
    editTask(store, action) {
      let task = store.todos.find((el) => el.id === action.payload.newTask.id)
      task = action.payload.newTask
      store.todos[Math.floor(action.payload.newTask.id)] = task
    }
  },
});

export const { addTask, appReducer, delTask, completedTask, editTask} = todoSlice.actions;

export default todoSlice.reducer;
