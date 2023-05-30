import React from "react";
import { IToDO, toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";
import { categories } from "./atoms";
function ToDo({ text, category, id }: IToDO) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDeleteButton = () => {
    setToDos((oldToDos) => {
      const newToDos = oldToDos.filter((toDo) => toDo.id !== id);
      return newToDos;
    });
  };
  return (
    <>
      <li>
        <span>{text}</span>
        {category !== categories.DOING && (
          <button name={categories.DOING} onClick={onClick}>
            Doing
          </button>
        )}
        {category !== categories.TO_DO && (
          <button name={categories.TO_DO} onClick={onClick}>
            To Do
          </button>
        )}
        {category !== categories.DONE && (
          <button name={categories.DONE} onClick={onClick}>
            Done
          </button>
        )}
        <button name="delete" onClick={onDeleteButton}>
          delete
        </button>
      </li>
    </>
  );
}

export default ToDo;
