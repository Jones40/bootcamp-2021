// Create an Event listener that will listen to "submit" for form submission
//e.preventDefault();
// hide all <article>
// retrieve value
// get filtered <article> elements with the good class ...
// show the fitlered <article>

// 1- Form
document
  .querySelector('form')
  // 2 - Submit
  .addEventListener('submit', function (event) {
    // 3 - prevent !
    event.preventDefault();
    //Input/Gather
    const catValue = document.querySelector('#category').value;
    console.log(catValue); // all/science/politics
    // Hide
    const allArticles = document.querySelectorAll('article');
    for (const element of allArticles) {
      element.style.display = 'none';
    }

    // show
    // const selectedArticles = document.querySelectorAll('.' + catValue);
    let selectedArticles = document.getElementsByClassName(catValue);
    if (catValue == 'all') {
      selectedArticles = allArticles;
    }
    for (const element of selectedArticles) {
      element.style.display = '';
    }
  });
