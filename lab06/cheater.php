<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Grade Store</title>
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/labResources/gradestore.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		
		<?php
		if(isset($_POST["Name"])) $name = $_POST["Name"];
		if(isset($_POST["ID"])) $id = $_POST["ID"];
		if(isset($_POST["Grade"])) $grade = $_POST["Grade"];
		if(isset($_POST["Credit"])) $credit = $_POST["Credit"];
		if(isset($_POST["Kind"])) $kind = $_POST["Kind"];
		if(isset($_POST["course"])) $course = $_POST["course"];
		$course_list = array();
		foreach($course as $cs){
			array_push($course_list, $cs);
		}
		
		$isName = isset($_POST["Name"]);
		$isID = isset($_POST["ID"]);
		$isGrade = isset($_POST["Grade"]);
		$isCredit = isset($_POST["Credit"]);
		$isKind = isset($_POST["Kind"]);
		$isCourse = isset($_POST["course"]);
		$isAllset = $isName && $isID && $isGrade && $isCredit && $isKind && $isCourse;
		if (!$isAllset){
		?>
 
		<h1>Sorry</h1>
			<p>You didn't fill out the form completely. <a href="gradestore.html">Try again?</a></p>

		<?php
		} elseif (!preg_match("/^([a-zA-Z]+[\-\s])*[a-zA-Z]+$/",$name)) { 
		?>
		<h1>Sorry</h1>
		<p>You didn't provide a valid name. <a href="gradestore.html">Try again? </a></p>

		<?php
		} elseif (($kind == "Visa" && !preg_match("/^4([0-9]){15}$/", $credit)) || ($kind == "MasterCard" && !preg_match("/^5([0-9]){15}$/", $credit))) {
		?>
		<h1>Sorry</h1>
		<p>You didn't provide a valid credit card number. <a href="gradestore.html">Try again?</a></p>

		<?php
		} else {
		?>

		<h1>Thanks, looser!</h1>
		<p>Your information has been recorded.</p>
		
		<ul> 
			<li>Name: <?= $name ?></li>
			<li>ID: <?= $id ?></li>
			<li>Course: <?= processCheckbox($course_list) ?></li>
			<li>Grade: <?= $grade ?> </li>
			<li>Credit <?= $credit ?> (<?=$kind?>)</li>
		</ul>

		<p>Here are all the loosers who have submitted here:</p>
		<?php
			$filename = "loosers.txt";
			$filedata = "<pre> $name;$id;$credit;$kind </pre>";
			file_put_contents($filename, $filedata, FILE_APPEND);
			$file = file_get_contents($filename);
			print $file;
		}
		?>
		<?php
			function processCheckbox($names){
				$str = "";
				foreach($names as $name){
					$str .= $name.", ";
				}
				$str = substr($str, 0, strlen($str)-2);
				return $str;
			}
		?>
	</body>
</html>