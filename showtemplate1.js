var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("smallImg");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};

document.querySelectorAll(".utama img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-up-main").style.display = "block";
    document.querySelector(".pop-up-main img").src = image.getAttribute("src");
  };
});

document.querySelector(".pop-up-main span").onclick = () => {
  document.querySelector(".pop-up-main").style.display = "none";
};
