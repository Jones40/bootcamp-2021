fetch('https://api.chucknorris.io/jokes/categories')
  .then((data) => data.json())
  .then(function (res) {
    console.log(res);
    const catArray = res;
    // array -> for...of
    for (const category of catArray) {
      console.log(category);
      // 1. create/clone
      const clone = document.querySelector('li').cloneNode(true);
      // 2. append
      document.querySelector('ul').append(clone);
      // 3. customize
      clone.innerText = category;
      // When the user click this <li>,
      // it shows a joke from that category
      clone.addEventListener('click', function () {
        changeJoke(category);
      }); // AEL
    } //for
    document.querySelector('li').remove();
  }); // FETCH

function changeJoke(category) {
  const customUrl =
    'https://api.chucknorris.io/jokes/random?category=' + category;
  fetch(url)
    .then((data) => data.json())
    .then(function (res) {
      document.querySelector('p#jokeJS').innerText = res.value;
    }); // fetch
}
