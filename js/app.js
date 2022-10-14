const shareBtn = document.getElementById("share-btn");
const socialMedia = document.querySelector(".social-media");

shareBtn.onclick = () => socialMedia.classList.toggle("active");
