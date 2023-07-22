import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <div className='navbar-head'></div>
      <div className='navbar'>
        <h1>All</h1>
        <h1>Home </h1>
        <h1>Contact</h1>
        <h1>Support</h1>
        <h1>Login</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Root;
