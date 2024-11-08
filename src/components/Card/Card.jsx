import React from 'react';
import './Card.scss';

const Card = ({
  title = 'Пока не указано',
  photo = 'https://cdn.dribbble.com/users/4047034/screenshots/9176275/media/b40e0d6c115634a62ec51c9b68a16f3f.gif',
  price="не указано"
}) => {
  return (
    <>
      <div className="card">
        <img src={photo} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <button>Купить</button>
      </div>
    </>
  );
};

export default Card;
