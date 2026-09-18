import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";
const Spotify = ({ windowName }) => {
  return (
    <MacWindow width="25vw" height="25vw" windowName={windowName}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ "border-radius": "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator&theme=0&si=ade3300e2dbc4991"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
