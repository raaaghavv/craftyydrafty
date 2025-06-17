import React, { forwardRef } from "react";

import "../../../node_modules/video.js/dist/video-js.css";
import "./VideoTestimonials.css";
import VideoJS from "../Video";

const VideoTestimonials = forwardRef((props, ref) => {
  const playerRef = React.useRef(null);

  const videos = [
    {
      sources: [
        {
          src: "/100607-video-720.mp4",
          type: "video/mp4",
        },
      ],
      autoplay: false,
      responsive: true,
      fluid: true,
      aspectRatio: "9:16",
      name: "john",
      state: "punjab",
    },
    {
      sources: [
        {
          src: "/100607-video-720.mp4",
          type: "video/mp4",
        },
      ],
      autoplay: false,
      responsive: true,
      fluid: true,
      aspectRatio: "9:16",
      name: "john",
      state: "punjab",
    },
    {
      sources: [
        {
          src: "/100607-video-720.mp4",
          type: "video/mp4",
        },
      ],
      autoplay: false,
      responsive: true,
      fluid: true,
      aspectRatio: "9:16",
      name: "john",
      state: "punjab",
    },
  ];

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <section ref={ref} id={props.id} className="Video-Testimonials">
      <div className="section-heading">
        <h2>Real Stories, Real Impact</h2>
        <p>
          Experience the heartfelt success stories of those who have
          <br />
          discovered the art of beautiful packaging and transformative workshops
          with us.
        </p>
      </div>
      <div className="video-grid">
        {videos.map(({ name, state, ...videoJsOptions }, index) => (
          <div className="video-card" key={index}>
            <VideoJS
              options={videoJsOptions}
              onReady={handlePlayerReady}
              className="video-js"
            />
            <div className="customer-info">
              <p className="customer-name">{name}</p>
              <p className="customer-state">{state}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default VideoTestimonials;
