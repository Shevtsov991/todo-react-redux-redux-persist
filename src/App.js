import "./reset.css";
import "./App.css";
import Tasks from "./component/tasks";
import Form from "./component/form";
import Header from "./component/header";


export default function App() {
 
  
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <ul>
        <Tasks />
      </ul>
      <aside>
      <Form  />  
      </aside>
    </div>
  );
}
