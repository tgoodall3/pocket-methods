import React from 'react';
import { useAuth } from '../../contexts/authContext/index.jsx';

const UserEmail = () => {
    const { currentUser } = useAuth();
  
    return (
      <div>
        {currentUser && <span>{currentUser.email}!</span>}
      </div>
    );
  }

  export default UserEmail
