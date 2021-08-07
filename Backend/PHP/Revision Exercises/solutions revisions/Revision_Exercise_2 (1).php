<?php 

/*
    -- Exercise 1 :
    
    Thanks to that array : 
    $array = array(
        'lastname' => 'simon',
        'firstname' => 'simon',
        'phone' => '+3526455748'
        'mail' => 'simon@simon.fr',
        'address' => '6 rue de la gare',
        'city' => 'Mondelange'
    );

    Using a loop, display the content of this array (keys and values)
*/
$array = array(
	'lastname' => 'simon',
	'firstname' => 'simon',
	'phone' => '+3526455748',
	'mail' => 'simon@simon.fr',
	'address' => '6 rue de la gare',
	'city' => 'Mondelange'
);

foreach ($array as $key => $value) {
	echo $key . " : " . $value . "<br>";
}

/* -- Exercise : 
	1 :
	Create a function 'multiplicationTable'
	2 :
	This function should have on argument $x
	3:
	The function should return the multiplication table of $x (from 1 to 20).
	4 :
	Create a form with one input.
	When you validate this form, it should display the multiplication table of the number you entered (using the function).
	You have to check if the value is correct (no float and no string, ONLY integer).
	5 :
	Display the multiplication table in a nice HTML format table style.
*/



$x = $_POST['number'];


?>
<h3>Multiplication table of <?php echo $x; ?></h3>

<table border=1>
    <thead>
        <tr>
            <th>*0</th>
            <th>*1</th>
            <th>*2</th>
            <th>*3</th>
            <th>*4</th>
            <th>*5</th>
            <th>*6</th>
            <th>*7</th>
            <th>*8</th>
            <th>*9</th>
			<th>*10</th>
			<th>*11</th>
			<th>*12</th>
			<th>*13</th>
			<th>*14</th>
			<th>*15</th>
			<th>*16</th>
			<th>*17</th>
			<th>*18</th>
			<th>*19</th>
			<th>*20</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <?php
                for ($i = 0; $i <= 20; $i++) {
                    echo '<td>' . $i * $x . '</td>';
                }
            ?>
        </tr>
    </tbody>
</table>

<form action="" method="POST">
	<input type="number" name="number" id="number">
	<input type="submit" value="submitBtn">
</form>