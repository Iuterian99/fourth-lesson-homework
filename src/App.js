import "./App.css";
import { useState, useEffect } from "react";
import Posts from "./components/posts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <>
      <Posts users={users} />
    </>
  );
}

export default App;
