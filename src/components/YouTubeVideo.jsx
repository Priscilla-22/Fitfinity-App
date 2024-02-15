
import React from "react";
import './YouTubeVideo.css';

function YouTubeVideo() {
  return (<div className="yt">
    <div className="YouTubeVideoContainer">
    
      <img id="source" src="https://media.istockphoto.com/id/1473675453/photo/well-balanced-diet-and-blood-pressure-control-for-heart-care.webp?b=1&s=170667a&w=0&k=20&c=nHETH3ZPlcdUH9pRjKO_W5-sSQ5tX4Um2g4kjjfe6gM=" alt="nope" />

      <div id="frame">
      <iframe width="500" height="400" src="https://www.youtube.com/embed/8BKbu_s8p1Q" title="How To Eat To Build Muscle &amp; Lose Fat (Lean Bulking Full Day Of Eating)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="500" height="400" src="https://www.youtube.com/embed/CxktmQ3zJOA" title="The Best Science-Based Diet for Fat Loss (ALL MEALS SHOWN!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  );
};

export default YouTubeVideo;