
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const UsersForm = ({ addUser, userSelected, updateUser, deselectedUser }) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(()=>{
    if(userSelected){
      reset(userSelected);
    }
  },[userSelected]);

  const submit = (data)=> {
    if(userSelected){
      updateUser(data);
    }else {
      addUser(data);
    }
  }

  const clear = ()=> {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    });
    deselectedUser();
  }

  return (
    <form className='form__container' onSubmit={handleSubmit(submit)}>
      <section className="container__section">
        <header className="section__header">
          <h2 className='header__h2'>New user</h2>
        </header>
        <div className="section__div">
          <div className="div__input">
            <label htmlFor="first_name">Name</label>
            <input {...register("first_name")} type="text" id='first_name'/>
          </div>
          <div className="div__input">
            <label htmlFor="last_name">Last name</label>
            <input {...register("last_name")} type="text" id='last_name'/>
          </div>
          <div className="div__input">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="text" id='email'/>
          </div>
          <div className="div__input">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id='password'/>
          </div>
          <div className="div__input">
            <label htmlFor="birthday">Birthday</label>
            <input {...register("birthday")} type="date" id='birthday'/>
          </div>
        </div>
      </section>
      <button className='div__btn'>
        {userSelected ? "Update" : "Create"} user
      </button>
      <button className='div__btn'
        onClick={clear}
      >
        Clear
      </button>
    </form>
  );
};

export default UsersForm;