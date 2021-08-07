// JQuery is loaded
jQuery(document).ready(function () {});
$(document).ready(function () {});
$(function () {
  alert('Jquery Loaded');
});
// You don't need that
// if you respect the position of the <script>
// in the index.html

$('h1').text('A new Heading');
$('h1').html('A <em>new</em> Heading');
// dont mix selecting with JQuery and Vanilla JS Properties
// $('h1').innerText = 'Does not work';
// document.querySelector('h1').text('Does not  work');

$('h1').css({
  color: 'red',
  textAlign: 'center',
  'background-color': 'blue',
});

// One Element
$('h1').on('click', function () {
  $(this).toggleClass('important');
});
// Many Elements
$('h2').on('click', function () {
  $(this).toggleClass('important');
});

// select a specific element
$('h2').eq(0).text('I am the first h2');

// FORM

$('form').on('submit', function (event) {
  event.preventDefault();
  const name = $('#username').val();
  const nameValid = name.length > 6;
  const color = nameValid ? 'green' : 'red';
  $('#username').css({
    borderColor: color,
  });
});
$('form').on('submit', function (event) {
  event.preventDefault();
  const name = $('#username').val();
  const nameValid = name.length > 6;
  if (nameValid) {
    $('#username').css({
      borderColor: 'green',
    });
  } else {
    $('#username').css({
      borderColor: 'red',
    });
  }
});

// DUPLICATION /
const usersArray = [
  { name: 'Timmy' },
  { name: 'Eric' },
  { name: 'Kyle' },
  { name: 'Stan' },
  { name: 'kenny' },
  { name: 'Butters' },
];

const model = $('ul li').eq(0);
for (const userData of usersArray) {
  console.log(userData);
  // 1 Create/Clone
  const clone = model.clone();
  // 2 - Append
  $('ul').append(clone);
  // 3 - Customize
  clone.find('span').text(userData.name);
  // Optional add an event to a clone
  clone.on('click', function () {
    // Light Animations
    $(this).hide(1000);
  });
}
model.remove();
