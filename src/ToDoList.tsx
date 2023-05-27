import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChage = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChage}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {};
  console.log(formState.errors);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("id", {
              required: true,
              minLength: {
                value: 5,
                message: "please",
              },
            })}
            type="wirte a to do"
          />
          <input
            {...register("password", { required: "requeirefdf" })}
            type="wirte a to do"
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
export default ToDoList;
