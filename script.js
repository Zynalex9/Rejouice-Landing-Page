const cursor = document.querySelector(".cursor");
const page1 = document.querySelector("#page1");

page1.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

page1.addEventListener("mouseleave", (e) => {
  cursor.remove();
});

page1.addEventListener("mouseenter", (e) => {
  if (!document.contains(cursor)) {
    page1.appendChild(cursor); 
    cursor.style.zIndex = "1";
  }
});
