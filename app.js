// document.querySelectorAll(".card").forEach((card) => {
//   card.addEventListener("mousemove", (e) => {
//     const rect = card.getBoundingClientRect();
//     console.log(rect);
//     card.style.setProperty("--x", `${e.clientX - rect.left}px`);
//     card.style.setProperty("--y", `${e.clientY - rect.top}px`);
//   });
// });

document.querySelectorAll(".card").forEach((card) => {
  let rafId = null;

  card.addEventListener(
    "pointermove",
    (e) => {
      // throttle updates to once per animation frame
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        console.log(rect);
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        rafId = null;
      });
    },
    { passive: true }
  );

  // optional: clear on leave
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--x", `50%`);
    card.style.setProperty("--y", `50%`);
  });
});

const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const video4 = document.getElementById("projectVideo4");

const videoList = [video1, video2, video3, video4];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
  });
  video.addEventListener("mouseout", function () {
    video.pause();
  });
});
