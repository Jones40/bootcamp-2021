fetch('https://api.chucknorris.io/jokes/categories')
  .then((data) => data.json())
  .then(generateCats);

function generateCats(res) {
  console.log(res);
  const catArray = res;
  // array -> for...of
  for (const cat of catArray) {
    console.log(cat);
    createLI(category);
  }
  document.querySelector('li').remove();
}
function createLI(category) {
  // 1. create/clone
  const clone = document.querySelector('li').cloneNode(true);
  // 2. append
  document.querySelector('ul').append(clone);
  // 3. customize
  clone.innerText = category;
}
