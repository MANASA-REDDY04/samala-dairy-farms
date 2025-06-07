import React from "react";
import "./GalleryPage.css";

const GalleryPage = () => {
  // Updated image and video paths
  const buffaloesAndCows = [
    { type: "image", src: "/images/buffalo1.jpg", alt: "Buffalo 1" },
    { type: "video", src: "/images/milkvideo1.mp4" },
    { type: "image", src: "/images/buffalo2.jpg", alt: "Cow2" },
    { type: "video", src: "/images/buffaloes1.mp4" },
    { type: "image", src: "/images/dairy2.jpg", alt: "Dairy facility" },
  ];

  const calfs = [
    { type: "image", src: "/images/calf1.jpg", alt: "Calf 1" },
    { type: "image", src: "/images/calfscute.jpg", alt: "Calf 2" },
    { type: "image", src: "/images/calf3.jpg", alt: "Calf 1" },
    { type: "image", src: "/images/dooda2.jpg", alt: "dooda 1" },
    { type: "image", src: "/images/dooda3.jpg", alt: "dooda 1" },
  ];

  const dairy = [
    { type: "image", src: "/images/dairy1.jpg", alt: "Dairy facility" },
    { type: "video", src: "/images/dairyvideo1.mp4" },
    { type: "image", src: "/images/dairy2.jpg", alt: "Dairy facility" },
    { type: "image", src: "/images/dairy3.jpg", alt: "Dairy facility" },
    { type: "image", src: "/images/dairy4.jpg", alt: "Dairy facility" },
  ];

  const food = [
    { type: "image", src: "/images/dfood1.jpg", alt: "Fodder" },
    { type: "image", src: "/images/food1.jpg", alt: "Fodder" },
    { type: "image", src: "/images/bfood1.jpg", alt: "Fodder" },
    { type: "image", src: "/images/bfood2.jpg", alt: "Fodder" },
    { type: "image", src: "/images/food2.jpg", alt: "Fodder" },
  ];

  const milk = [
    { type: "image", src: "/images/milk1.jpg", alt: "Milk packaging" },
    { type: "video", src: "/images/smmilkvideo1.mp4" },
    { type: "video", src: "/images/milkvvideo4.mp4" },
  ];

  const hens = [
    { type: "image", src: "/images/hens1.jpg", alt: "hens" },
    { type: "image", src: "/images/hens2.jpg", alt: "hens" },
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
