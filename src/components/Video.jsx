import React from "react";
import videojs from "video.js";
import "/play-button.svg";

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
        {isPlaying ? "⏸️" : "▶️"}
      </button>

      <button className="custom-fullscreen-button" onClick={toggleFullscreen}>
        {isFullscreen ? "⤢" : "⤢"}
      </button>
    </div>
  );
};
export default VideoJS;
