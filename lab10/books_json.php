<?php
$BOOKS_FILE = "books.txt";

function filter_chars($str) {
	return preg_replace("/[^A-Za-z0-9_]*/", "", $str);
}

if (!isset($_SERVER["REQUEST_METHOD"]) || $_SERVER["REQUEST_METHOD"] != "GET") {
	header("HTTP/1.1 400 Invalid Request");
	die("ERROR 400: Invalid request - This service accepts only GET requests.");
}

$category = "";
$delay = 0;

if (isset($_REQUEST["category"])) {
	$category = filter_chars($_REQUEST["category"]);
}
if (isset($_REQUEST["delay"])) {
	$delay = max(0, min(60, (int) filter_chars($_REQUEST["delay"])));
}

if ($delay > 0) {
	sleep($delay);
}

if (!file_exists($BOOKS_FILE)) {
	header("HTTP/1.1 500 Server Error");
	die("ERROR 500: Server error - Unable to read input file: $BOOKS_FILE");
}

header("Content-type: application/json");

print "{\n  \"books\": [\n";

// write a code to : 
// 1. read the "books.txt"
// 2. search all the books that matches the given category 
// 3. generate the result in JSON data format 
$books = file($BOOKS_FILE);
$first_book = 0;
for($i = 0; $i < count($books); $i++){
	list($title, $author, $book_category, $year, $price) = explode("|", trim($books[$i]));
	if($category == $book_category && $first_book==0){
		print "\t{";
		print "\"category\":\"$category\", \"title\":\"$title\", \"author\":\"$author\", \"year\":\"$year\", \"price\":\"$price\"";
		print "}\n";
		// print "\t\t{";
		// print "\"category\":\"$category\",\n";
		// print "\t\t\"title\":\"$title\",\n";
		// print "\t\t\"author\":\"$author\",\n";
		// print "\t\t\"year\":\"$year\",\n";
		// print "\t\t\"price\":\"$price\"\n";
		// print "\t}\n";
		$first_book = 1;
	}
	else if($category == $book_category){
		print "\t,{";
		print "\"category\":\"$category\", \"title\":\"$title\", \"author\":\"$author\", \"year\":\"$year\", \"price\":\"$price\"";
		print "}\n";
		// print "\t,{\n\t\t";
		// print "\"category\":\"$category\",\n";
		// print "\t\t\"title\":\"$title\",\n";
		// print "\t\t\"author\":\"$author\",\n";
		// print "\t\t\"year\":\"$year\",\n";
		// print "\t\t\"price\":\"$price\"\n";
		// print "\t}\n";
	}
}
print "  ]\n}\n";

?>
