import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export function Stars({ score }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(score)) {
      stars.push(<FontAwesomeIcon icon={fasStar} color="gold" key={i} />);
    } else if (i < score) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} color="gold" key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={farStar} color="orange" key={i} />);
    }
  }
  return <div>{stars}</div>;
}
