const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  // let h = window.innerHeight;
  // let w = window.innerWidth;
  // alert("Height: " + h + " Width: " + w);
  const mywindow = window.open("https://google.co.in");
  mywindow.resizeBy(100, 100);
  console.log(mywindow.outerHeight, mywindow.outerWidth);
});
