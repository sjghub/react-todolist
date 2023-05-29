import React from "react";
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
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password1: string;
  password2: string;
  extraError?: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." }); //error추가할떄
  };
  console.log(errors);
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onValid)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+]+@naver.com/,
                message: "Only naver.com emails allowed",
              },
            })}
            type="text"
            placeholder="email"
          />
          <span>{errors?.email?.message}</span>
          <input
            {...register("firstName", {
              required: "write here",
              validate: {
                nico: (value) => !value.includes("nico") || "no nico",
                nis: (value) => !value.includes("nis") || "no nis",
              },
            })}
            type="text"
            placeholder="firstName"
          />
          <span>{errors?.firstName?.message}</span>
          <input
            {...register("lastName", { required: "write here" })}
            type="text"
            placeholder="lastName"
          />
          <span>{errors?.lastName?.message}</span>
          <input
            {...register("userName", {
              required: "write here",
              minLength: { value: 10, message: "please 10이상" },
            })}
            type="text"
            placeholder="userName"
          />
          <span>{errors?.userName?.message}</span>

          <input
            {...register("password1", {
              required: "write here",
              minLength: { value: 5, message: "please 5이상" },
            })}
            placeholder="password1"
          />
          <span>{errors?.password1?.message}</span>
          <input
            {...register("password2", {
              required: "write here",
              minLength: { value: 5, message: "please 5이상" },
            })}
            placeholder="password2"
          />
          <span>{errors?.password2?.message}</span>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
export default ToDoList;
