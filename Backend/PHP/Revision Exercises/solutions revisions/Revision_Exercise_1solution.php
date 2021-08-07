<?php

/*
	1. Display the type of each variable at the end of the script (using only one function)
	2. Display the type AND the value of each variable (using only one function)
*/
/*1st Exercise*/
$a = 1;
$b = 'letters';
$c =  2.5;

echo gettype($a) .'<br>';
echo gettype($b) .'<br>';
echo gettype($c) .'<br>';

/*2nd Exercise*/
$a = 1;
$b = 'letters';
$c =  2.5;

var_dump($a). '<br>';
var_dump($b) .'<br>';
var_dump($c) .'<br>';


/*
	Show the date (in a nice format) for :
		- Today
		- Tomorrow
		- The same date than today one month later
*/

/*3rd exercise */

date_default_timezone_set('Europe/Luxembourg');

echo "Today is " . date("l-F-Y"). "<br>";

$d=strtotime("tomorrow");
echo"Tomorrow is ". date("l-F-Y", $d) . "<br>";

$c=strtotime("+1 Months");
echo "The same date than today one month later ". date("l-F-Y", $c) . "<br>";


/*
	Create an array with the numbers from 1 to 100 : Create it dynamically using a loop.
	Once it has been created, display it in a HTML list (ul/li)

	Use one loop to create the array.
	Use a second loop to display it.
*/
$numbersArray = [];

for ($i=0; $i < 100; $i++) { 
	$numbersArray[$i] = $i+1;
}



?>

<ul>
	<?php 
		foreach ($numbersArray as $value) {
			echo '<li>' . $value . '</li><br>';
		}
	?>
</ul>


<!-- 

/*
	Practice query using the moviedb :
	1. Connect to DB and choose the moviedb
	2. Go to SQL tab and run a query to get all movies by George Lucas
	3. Display the movies in a HTML <table>
		You should display title, views, the poster and the name of the director.
*/ -->

<?php

// 1. Connect to my DB
$conn = mysqli_connect('localhost', 'root', '', 'movie_db');

// Did I connect successfully ? 
if ($conn) {
   
    // 2. Prepare the query
	$query = "SELECT *
	FROM movies
	INNER JOIN directors ON movies.director_id = directors.id
	WHERE directors.name = 'George Lucas'";

    // 3. Executing the query (send the query to the DB)
    $results = mysqli_query($conn, $query);

    /*
        I retrieved results BUT I need to fetch to use them
    */

    // 4. Fetch the results in a associative array
    $movies = mysqli_fetch_all($results, MYSQLI_ASSOC);

}
?>
<table border=1 style="margin: 0 auto;">
    <thead>
        <tr>
            <th>Title</th>
            <th>Views</th>
            <th>Poster</th>
            <th>Director</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <?php
				foreach ($movies as $movie) {
					echo '<tr><td>' . $movie['title'] . '</td><br>';
					echo '<td>' . $movie['views'] . '</td><br>';
					echo '<td>' . $movie['poster'] . '</td><br>';
					echo '<td>' . $movie['name'] . '</td></tr><br>';
				}
            ?>
        </tr>
    </tbody>
</table>