import React from 'react';
import { useAuth } from '../../contexts/authContext/index.jsx';

const UserEmail = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

return (
  <div style={{fontSize:'20px', color:'', fontWeight:'bold', listStyle:'none', marginTop:'-40px', marginRight:'15px'}}>
    {currentUser && <span>Welcome Back {currentUser.displayName}!</span>}
  </div>
);
  }

  export default UserEmail
