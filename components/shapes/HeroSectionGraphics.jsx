import React from "react";

const HeroSectionGraphics = ({ img_light, img_dark }) => {
  const styles = {
    imageChange: {
      animation: 'changeImage 3s linear infinite',
      backgroundImage: "url('/assets/shapes/hero-shape-dark.png')",
    }
  };
  return (
    <div
      id="scroll-image"
      className="imageChange bg-no-repeat bg-contain w-[600px] h-[600px] "
      style={styles.imageChange}
    >
      <style>
        {`
        @keyframes changeImage {
          0% {
            background-image: url(${img_dark?.url});
          }
          50% {
            background-image: url(${img_light?.url});
          }
          100% {
            background-image: url(${img_dark?.url});
          }
        }
        `}
      </style>
    </div>
  );
};

export default HeroSectionGraphics;
