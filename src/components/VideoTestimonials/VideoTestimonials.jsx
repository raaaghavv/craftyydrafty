import React, { forwardRef } from "react";

import "../../../node_modules/video.js/dist/video-js.css";
import "./VideoTestimonials.css";
import VideoJS from "../Video";

const VideoTestimonials = forwardRef((props, ref) => {
  const allPlayersRef = React.useRef(new Map());

  const videos = [
    {
      sources: [
        {
          src: "/testimonial-1.mp4",
          type: "video/mp4",
        },
      ],
      autoplay: false,
      responsive: true,
      fluid: true,
      aspectRatio: "9:16",
      name: "Tanzilaftab",
      state: "Gujrat",
    },
    {
      sources: [
        {
          src: "/testimonial-2.mp4",
          type: "video/mp4",
        },
      ],
      autoplay: false,
      responsive: true,
      fluid: true,
      aspectRatio: "9:16",
      name: "Ruchika",
      state: "Delhi",
    },
    {
      sources: [
        {
          src: "/testimonial-3.mp4",
          type: "video/mp4",
        },
      ],
      autoplay: false,
      responsive: true,
      fluid: true,
      aspectRatio: "9:16",
      name: "Dolly",
      state: "Uttar Pradesh",
    },
  ];

  const handlePlayerReady = (player, index) => {
    // Store the player instance in our map, using its index as the key
    allPlayersRef.current.set(index, player);

    // Attach a 'play' event listener to this specific player
    player.on("play", () => {
      // When this player starts playing, iterate through all other players
      allPlayersRef.current.forEach((otherPlayer, otherIndex) => {
        // If it's a different player and it's currently playing, pause it
        if (otherPlayer !== player && !otherPlayer.paused()) {
          otherPlayer.pause();
        }
      });
    });

    // Attach a 'dispose' event listener to clean up the map when a player is removed
    player.on("dispose", () => {
      allPlayersRef.current.delete(index);
      player.log("player disposed from map"); // Use player.log here!
    });

    // player.log("player is ready at index: ", index); // Use player.log here!
  };

  // Optional: Cleanup all players when VideoTestimonials component unmounts
  React.useEffect(() => {
    return () => {
      allPlayersRef.current.forEach((player) => {
        if (player && !player.isDisposed()) {
          player.dispose();
        }
      });
      allPlayersRef.current.clear();
    };
  }, []);

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
              // Pass the index to the handlePlayerReady function
              onReady={(player) => handlePlayerReady(player, index)}
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
