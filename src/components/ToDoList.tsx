import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categories, categoryState, toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };
  return (
    <>
      <div>
        <h1>To Dos</h1>
        <hr />
        <select value={category} onInput={onInput}>
          <option value={categories.TO_DO}>To Do</option>
          <option value={categories.DOING}>Doing</option>
          <option value={categories.DONE}>Done</option>
        </select>
        <CreateToDo />
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </div>
    </>
  );
}

export default ToDoList;
