function getRandomImage() {
    const apiKey = '7lqyFsQTQF2eUvaRNvzFwGWer2n1TBpND6dnYrHAl10';
    const url = 'https://api.unsplash.com/photos/random/?client_id=' + apiKey;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.urls.regular;
        const imgElement = document.querySelector('img');
        imgElement.setAttribute('src', imageUrl);
        imgElement.setAttribute('width', '400');
        imgElement.setAttribute('height', '550');
    })
    .catch(error => {
        console.error('Ошибка при получении случайного изображения:', error);
    });
}

getRandomImage();

const btn = document.getElementById('like');
const counter = document.getElementById('counter');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    counter.innerHTML = 'Количество лайков:' + count;
})
