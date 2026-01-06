const modal = document.getElementById("videoModal");
const container = document.getElementById("videoContainer");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".video-card").forEach(card => {
  card.addEventListener("click", () => {
    const vimeoId = card.dataset.vimeo;

    container.innerHTML = `
      <iframe 
        src="https://player.vimeo.com/video/${vimeoId}?autoplay=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen>
      </iframe>
    `;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  container.innerHTML = "";
}
