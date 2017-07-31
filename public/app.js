var catList = [
{name: "Name: Boba", food: "Favourite food: Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Name: Barnaby", food: "Favourite food: Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
{name: "Name: Max", food: "Favourite food: Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{name: "Name: Tibby", food: "Favourite food: Chicken", image: "https://static.pexels.com/photos/96938/pexels-photo-96938.jpeg"},
{name: "Name: Claudia", food: "Favourite food: toes", image: "https://static.pexels.com/photos/416160/pexels-photo-416160.jpeg"},
{name: "Name: Pigwidgeon", food: "Favourite food: souls", image: "https://static.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg"}
];


var createCat = function(meow){
  var cat = document.createElement("ul");
  cat.classList.add("cat");
  var name = document.createElement("li");
  name.innerText = meow.name;
  name.classList.add("cat");
  var fav = document.createElement("li");
  fav.innerText = meow.food;
  var pic = document.createElement("li");
  var img = document.createElement("img");
  img.classList.add("image");
  img.src = meow.image;
  pic.appendChild(img);
  cat.appendChild(name);
  cat.appendChild(fav);
  cat.appendChild(img);
  var cats = document.querySelector("#cats");
  cats.appendChild(cat);
};

var app = function(){
  catList.forEach(createCat);
};

  window.onload = app;
