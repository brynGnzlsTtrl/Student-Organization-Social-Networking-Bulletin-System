import React from "react";

export default function ImagOptimize({ imageName, className, imageType, alt}) {
  const img_avif = require("assets/images/" + imageName + ".avif");
  const img_webp = require("assets/images/" + imageName + ".webp");
  
  let img_default;

  console.log(img_webp);
  (imageType == "jpg") ? img_default = require("assets/images/" + imageName + ".jpg") : img_default = require("assets/images/" + imageName + ".png")

    return (
      <picture className={className}>
        <source type="image/avif" srcSet={img_avif} alt={alt} />
        <source type="image/webp" srcSet={img_webp} alt={alt} />
        <img className={className} src={img_default} alt={alt} />
        
      </picture>
    )
  }
