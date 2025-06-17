import React from "react";
import videojs from "video.js";

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(
        videoElement,
        {
          ...options,
          controls: false,
          bigPlayButton: false,
        },
        () => {
          onReady && onReady(player);
        }
      ));

      // Player event listeners
      player.on("play", () => setIsPlaying(true));
      player.on("pause", () => setIsPlaying(false));
      player.on("fullscreenchange", () => {
        setIsFullscreen(player.isFullscreen());
      });
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef]);

  const togglePlay = (e) => {
    if (playerRef.current) {
      isPlaying
        ? (e.target.classList.remove("custom-play-button-playing"),
          playerRef.current.pause())
        : (e.target.classList.add("custom-play-button-playing"),
          playerRef.current.play());
    }
  };

  const toggleFullscreen = () => {
    if (playerRef.current) {
      playerRef.current.isFullscreen()
        ? playerRef.current.exitFullscreen()
        : playerRef.current.requestFullscreen();
    }
  };

  return (
    <div className="video-player-container">
      <div data-vjs-player>
        <div ref={videoRef} />
      </div>

      {/* Custom Controls */}
      <button className="custom-play-button" onClick={(e) => togglePlay(e)}>
        {isPlaying ? (
          <svg
            className="pause-button"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M8 5V19M16 5V19"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        ) : (
          <svg
            className="play-button"
            fill="#ffffff"
            viewBox="-3.2 -3.2 38.40 38.40"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            ></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10.968 23V9l12.762 7-12.762 7z"></path>
            </g>
          </svg>
        )}
      </button>

      <button className="custom-fullscreen-button" onClick={toggleFullscreen}>
        {isFullscreen ? "⤢" : "⤢"}
      </button>
    </div>
  );
};
export default VideoJS;
