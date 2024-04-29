import React from "react";



const Video = () => {
    return(
        <iframe
            width="560"
            height="315"
            src="https://youtu.be/hWaPRp1bO2o?si=7wUz4KH3YM-9Xtcd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
    );
};
export default Video;