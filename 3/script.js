const img = document.getElementById("image");
img.addEventListener("pointerenter", () => {
  img.setAttribute("src", "Cf.jpeg");
});

img.addEventListener("pointerleave", () => {
  img.setAttribute("src", "BW.jpeg");
});
