import React from "react";

export default function ImagOptimize({ imageName, className, imageType, alt}) {
  const img_avif = require("Assets/images/" + imageName + ".avif");
  const img_webp = require("Assets/images/" + imageName + ".webp");
  
  let img_default;


  (imageType == "jpg") ? img_default = require("Assets/images/" + imageName + ".jpg") : img_default = require("Assets/images/" + imageName + ".png")

    return (
      <picture className={className}>
        <source type="image/avif" srcSet={img_avif} alt={alt} />
        <source type="image/webp" srcSet={img_webp} alt={alt} />
        <img className={className} src={img_default} alt={alt} />
        
      </picture>
    )
  }
