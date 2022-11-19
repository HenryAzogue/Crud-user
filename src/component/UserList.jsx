import React from 'react';

const UserList = ({ users, deleteUser, selectUser }) => {

  return (
    <section className='section__list'>
      <div className="list__header">
        <h1 className="header__h1">U-BOOK!_____</h1>
      </div>

      <ul className='list__ul'>
        {
          users.map((user) => (
            <li key={user.id}>
              <div className="section__card">
                <header className='card__header'>
                  <h2 className="card__h2">
                    {user.first_name}{" "}{user.last_name}
                  </h2>
                </header>
                <hr className='hr'/>
                <div className='card__div'>
                  <p className="div__p">EMAIL</p>
                  <p className="div__p div__p-data">{user.email}</p>
                  <p className="div__p">BIRTHDAY</p>
                  <p className="div__p div__p-data">
                    <i className="fa-solid fa-gift"></i>
                    {user.birthday}
                  </p>
                </div>
                <hr className='hr'/>
                <div className="card__btn">
                  <button 
                    className='btn btn__delete'
                    onClick={() =>deleteUser(user.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button
                    className='btn btn__edit'
                    onClick={() => selectUser(user)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default UserList;