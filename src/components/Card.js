import React from "react";

export default function Card({ cardData }) {
  const { inventoryType, img, stars, reviewsNum, country, title, price } =
    cardData;
  return (
    <div className="card">
      <figure className="card__img">
        <img src={`/images/${img}.png`} alt="main card" />
        {inventoryType && <small>{inventoryType}</small>}
      </figure>
      <div className="card__text">
        <p className="card__rating">
          <img src="/images/Star.svg" alt="star icon" />
          <span className="card__rating--value">{stars}</span>
          <span className="card__rating--reviewers">({reviewsNum})</span>
          <span className="card__rating--country">{country}</span>
        </p>
        <h2 className="card__title">{title}</h2>
        <p className="card__price">
          <span>From ${price}</span>
          person
        </p>
      </div>
    </div>
  );
}
