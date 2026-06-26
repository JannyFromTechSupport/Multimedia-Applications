// Save Our Wildlife — toggle button behaviour
//
// Requirement: button hides the video if it's visible/playing,
// or plays it if it's not already playing (and reveals it if hidden).

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("wildlife-video");
  const videoFrame = video.closest(".video-frame");
  const toggleBtn = document.getElementById("toggle-btn");
  const iconPlay = toggleBtn.querySelector(".icon-play");
  const iconHide = toggleBtn.querySelector(".icon-hide");
  const btnLabel = toggleBtn.querySelector(".btn-label");

  function setButtonState(state) {
    // state: "play" or "hide"
    if (state === "hide") {
      iconPlay.hidden = false;
      iconHide.hidden = true;
      btnLabel.textContent = "Hide video";
      toggleBtn.setAttribute("aria-pressed", "false");
    } else {
      iconPlay.hidden = true;
      iconHide.hidden = false;
      btnLabel.textContent = "Show & play video";
      toggleBtn.setAttribute("aria-pressed", "true");
    }
  }

  toggleBtn.addEventListener("click", () => {
    const isHidden = videoFrame.classList.contains("is-hidden");

    if (isHidden) {
      // Video is hidden -> reveal it and play it
      videoFrame.classList.remove("is-hidden");
      video.play();
      setButtonState("hide");
      return;
    }

    if (video.paused) {
      // Video is visible but not playing -> play it
      video.play();
      setButtonState("hide");
    } else {
      // Video is visible and playing -> hide it (and pause to save bandwidth)
      video.pause();
      videoFrame.classList.add("is-hidden");
      setButtonState("play");
    }
  });

  // Keep button label in sync if user pauses/plays via native controls
  video.addEventListener("pause", () => {
    if (!videoFrame.classList.contains("is-hidden")) {
      setButtonState("play");
    }
  });
  video.addEventListener("play", () => {
    setButtonState("hide");
  });
});
