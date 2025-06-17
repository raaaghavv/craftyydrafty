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

      // Player event listeners - these are the ONLY places that should update isPlaying state
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

  // Simplified togglePlay function - it only tells the player to play/pause
  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
      // The player.on('play') and player.on('pause') listeners will then update
      // the `isPlaying` state correctly, which in turn re-renders the UI.
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
      <button
        // Apply the class conditionally based on the `isPlaying` state
        className={`custom-play-button ${
          isPlaying ? "custom-play-button-playing" : ""
        }`}
        onClick={togglePlay} // No need to pass 'e' here now
      >
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
    </div>
  );
};

export default VideoJS;
