function getRandomImage() {
  const imgElement = document.getElementById('myImage');
  imgElement.src = 'https://source.unsplash.com/random/600×400/?city,world,travel,historic,buildings&_cache=' + new Date().getTime();
}