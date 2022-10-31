import React from "react";

const Image = ({ src, fallback, type = "images/webp", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
