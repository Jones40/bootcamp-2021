/*
BONUS : to make this even more interactive a list of category can replace the form submission
uncomment this part of the HTML code
and start woring on the buttons
*/

// The function "filterArticles" will:
// remove the CSS class "selected" FOR EACH of the links inside this list
// add the CSS class "selected" to the clicked link using this line
// filter the section articles using the algorythm from question 3(time for a function maybe ?)

const scienceButton = document.querySelector('[name="science"]');

scienceButton.addEventListener('click', function () {
  // hide all <article>
  hideAll();
  // show the class="science" <article>
  showStuff('article.science');
  // how can I "select" the button
  // remove selected class from ... all the button
  /*
    for (const button of document.querySelectorAll('button')) {
        button.classList.remove('selected');
    }
    // so that I can add this class to the current element
    this.classList.add('selected');
  */
});

document
  .querySelector('[name="politics"]')
  .addEventListener('click', function () {
    hideAll();
    showStuff('article.politics');
  });

document.querySelector('[name="all"]').addEventListener('click', function () {
  showStuff('article');
});
function hideAll() {
  const allArticle = document.querySelectorAll('article');
  for (const element of allArticle) {
    element.style.display = 'none';
  }
}

function showStuff(selector) {
  const scienceArticle = document.querySelectorAll(selector);
  for (const element of scienceArticle) {
    element.style.display = '';
  }
}
