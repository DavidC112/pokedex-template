import React from "react";

const fullHeart = <i className="fa-solid fa-heart"></i>;
const crackedHeart = <i className="fa-solid fa-heart-crack"></i>;
const emptyHeart = <i className="fa-regular fa-heart"></i>;

const Health = ({ health }: { health: number }) => {
  const full = Math.floor(health);
  const hasCracked = health % 1 !== 0;
  const empty = 5 - full - (hasCracked ? 1 : 0);

  return (
    <div className="health">
      {/* full hearts */}
      {Array.from({ length: full }, (_, i) => (
        <span key={"f" + i}>{fullHeart}</span>
      ))}

      {/* cracked heart */}
      {hasCracked && <span>{crackedHeart}</span>}

      {/* empty hearts */}
      {Array.from({ length: empty }, (_, i) => (
        <span key={"e" + i}>{emptyHeart}</span>
      ))}
    </div>
  );
};

export default Health;
