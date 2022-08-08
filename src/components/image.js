//display user image with details
import React from 'react';

export function UserImage(props) {
  const user = {
    name: 'john zzykj',
    profession: 'Analyst',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  };
  return (
    <div className="namestyle">
      {user.name}
      <p />
      {user.profession}
      <div>
        <img src={user.imageUrl}></img>
      </div>
    </div>
  );
}
