const watch = document.getElementById("watch");
const audio = document.getElementById("audio");
const eyewear = document.getElementById("eyewear");
const bags = document.getElementById("bags");
const perfumes = document.getElementById("perfumes");
const offers = document.getElementById("offers");
const watch_hover = document.getElementById("watch_hover");
const audio_hover = document.getElementById("audio_hover");
const bags_hover = document.getElementById("bags_hover");
const perfumes_hover = document.getElementById("perfumes_hover");
const offers_hover = document.getElementById("offers_hover");

watch.addEventListener("mouseover", function () {
  watch_hover.style.display = "flex";
});

watch_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

audio.addEventListener("mouseover", function () {
  audio_hover.style.display = "flex";
});

audio_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

bags.addEventListener("mouseover", function () {
  bags_hover.style.display = "flex";
});

bags_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

perfumes.addEventListener("mouseover", function () {
  perfumes_hover.style.display = "flex";
});

perfumes_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});

offers.addEventListener("mouseover", function () {
  offers_hover.style.display = "flex";
});

offers_hover.addEventListener("mouseleave", function () {
  this.style.display = "none";
});
