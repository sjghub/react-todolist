import ToDoList from "./components/ToDoList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle``;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
