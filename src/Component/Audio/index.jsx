import React, { useState, useRef } from "react";
import musik from "../Audio/musik/hindia.mp3"; // Path ke file musik Anda

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Tombol Toggle Musik */}
      <div className="fixed bottom-5 z-30 right-5">
        <button
          onClick={toggleMusic}
          className={`w-14 h-14 rounded-full flex items-center justify-center 
            shadow-lg transition-all duration-300 
            ${isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {/* Ikon Play atau Pause */}
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-8 h-8 my-2.5 mx-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-8 h-8 self-center my-2.5 mx-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-5.197-3.262A1 1 0 008 8.762v6.476a1 1 0 001.555.832l5.197-3.262a1 1 0 000-1.664z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={musik} loop />
    </>
  );
};

export default MusicToggle;
