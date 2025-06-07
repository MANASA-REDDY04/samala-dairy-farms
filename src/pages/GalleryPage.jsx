import React from "react";
import "./GalleryPage.css";

const GalleryPage = () => {
  // Sample media arrays: Replace these URLs with your own image/video URLs
  const buffaloesAndCows = [
    { type: "image", src: "./public/images/buffalo1.jpg", alt: "Buffalo 1" },
    { type: "video", src: "./public/images/milkvideo1.mp4" },
    { type: "image", src: "./public/images/buffalo2.jpg", alt: "Cow2" },
    { type: "video", src: "./public/images/buffaloes1.mp4" },
    { type: "image", src: "./public/images/dairy2.jpg", alt: "Dairy facility" },
  ];

  const calfs = [
    { type: "image", src: "./public/images/calf1.jpg", alt: "Calf 1" },
    { type: "image", src: "./public/images/calfscute.jpg", alt: "Calf 2" },
    { type: "image", src: "./public/images/calf3.jpg", alt: "Calf 1" },
    { type: "image", src: "./public/images/dooda2.jpg", alt: "dooda 1" },
    { type: "image", src: "./public/images/dooda3.jpg", alt: "dooda 1" },
  ];

  const dairy = [
    { type: "image", src: "./public/images/dairy1.jpg", alt: "Dairy facility" },
    { type: "video", src: "./public/images/dairyvideo1.mp4" },
    { type: "image", src: "./public/images/dairy2.jpg", alt: "Dairy facility" },
    { type: "image", src: "./public/images/dairy3.jpg", alt: "Dairy facility" },
    { type: "image", src: "./public/images/dairy4.jpg", alt: "Dairy facility" },
  ];

  const food = [
    { type: "image", src: "./public/images/dfood1.jpg", alt: "Fodder" },
    { type: "image", src: "./public/images/food1.jpg", alt: "Fodder" },
    { type: "image", src: "./public/images/bfood1.jpg", alt: "Fodder" },
    { type: "image", src: "./public/images/bfood2.jpg", alt: "Fodder" },
    { type: "image", src: "./public/images/food2.jpg", alt: "Fodder" },
  ];

  const milk = [
    { type: "image", src: "./public/images/milk1.jpg", alt: "Milk packaging" },
    { type: "video", src: "./public/images/smmilkvideo1.mp4" },
    { type: "video", src: "./public/images/milkvvideo4.mp4" },
  ];
  const hens = [
    { type: "image", src: "./public/images/hens1.jpg", alt: "hens" },
    { type: "image", src: "./public/images/hens2.jpg", alt: "hens" },
  ];
  const renderMedia = (media) =>
    media.map((item, index) => {
      if (item.type === "image") {
        return (
          <img
            key={index}
            src={item.src}
            alt={item.alt || ""}
            className="gallery-media"
          />
        );
      } else if (item.type === "video") {
        return (
          <video
            key={index}
            className="gallery-media"
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
          />
        );
      }
      return null;
    });

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Dairy Farm Gallery</h1>

      <section className="gallery-section">
        <h2 className="gallery-section-title">Buffaloes & Cows</h2>
        <div className="gallery-grid">{renderMedia(buffaloesAndCows)}</div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-section-title">Calfs</h2>
        <div className="gallery-grid">{renderMedia(calfs)}</div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-section-title">Dairy Facility</h2>
        <div className="gallery-grid">{renderMedia(dairy)}</div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-section-title">Food & Fodder</h2>
        <div className="gallery-grid">{renderMedia(food)}</div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-section-title">Milk Processing</h2>
        <div className="gallery-grid">{renderMedia(milk)}</div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-section-title">Hens</h2>
        <div className="gallery-grid">{renderMedia(hens)}</div>
      </section>
    </div>
  );
};

export default GalleryPage;
