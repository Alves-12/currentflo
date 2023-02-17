 import React from 'react'
 
 const CurrentFlo = () => {
   return (
     <div>
       <h1></h1>
     </div>
   )
 }
 
 export default CurrentFlo
 

// <script>
// Get the video
var video = document.getElementById("video");

// Get the button
var btn = document.getElementById("button");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    .innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>