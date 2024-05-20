import { useSelector } from "react-redux";
import Task from "./task";


export default function Tasks() {
  const tasksList = useSelector((store) => store.todos.todos)
  const CompletedTasksList = useSelector((store) => store.todos.completedTodos)
  const startPage = useSelector((store) => store.todos.startPage);

   let todoList = []

   startPage ? todoList = tasksList : todoList = CompletedTasksList



  return todoList.length > 0 ? (
    todoList.map((el) => {
      return (
        <Task
          key={el.id}
          el={el}       
        />
        
      );
    })
  ) : (
    <div className="task ">
      <h2 className="taskName">Задач нет</h2>
      <p className="taskDescription">Добавьте новую здадачу </p>
    </div>
  );
}
