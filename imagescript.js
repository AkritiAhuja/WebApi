const imageContainer = document.getElementById('image-container');
const imageContainer2 = document.getElementById('image-container2');

let i=1;
for(let i=1;i<=10;i++) {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const flipCard = createFlipCard(data.message);
    if(i<6)
    {imageContainer.appendChild(flipCard);}
    else
    {imageContainer2.appendChild(flipCard);}
    

}

function createFlipCard(imageUrl) {
  const flipCard = document.createElement('div');
  flipCard.classList.add('flip-card');

  const flipCardInner = document.createElement('div');
  flipCardInner.classList.add('flip-card-inner');

  const flipCardFront = document.createElement('div');
  flipCardFront.classList.add('flip-card-front');

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Image';
  img.setAttribute('width',200);
  flipCardFront.appendChild(img);

  const flipCardBack = document.createElement('div');
  flipCardBack.classList.add('flip-card-back');
  const breeds = imageUrl.split("/");
  const breed_name = breeds[breeds.length - 2];
  flipCardBack.textContent =breed_name.toUpperCase(); // Customize the back content

  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCard.appendChild(flipCardInner);

  return flipCard;
}