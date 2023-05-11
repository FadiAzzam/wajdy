import React from "react";

function Gallery(props) {
  const images = props.images;

  const gridItems = images.map((image, index) => {
    return (
      <div key={index}>
        <img className="h-auto min-w-full max-w-full" src={image} alt="" />
      </div>
    );
  });

  return (
    <div className={`grid grid-cols-2 xl:grid-cols-3 gap-3 my-6`}>
      {gridItems}
    </div>
  );
}

export default Gallery;
