<!DOCTYPE html>

<form action="sql2.php" method="get">
  DB name: <input type="text" name="name">
  DB query: <input type="text" name="query">
  <input type="submit">
</form>
<?php

if(isset($_GET['name']) && isset($_GET['query'])){
  try{
      $name = $_GET['name'];
      $query = $_GET['query'];
      $db = new PDO("mysql:dbname=$name;host:localhost","root","satigofk12");
      $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $rows = $db->query("$query");
      $row = $rows->fetchAll(PDO::FETCH_ASSOC);
      foreach ($row as $keys) {
        ?>
        <li> <?php
          foreach ($keys as $key => $value) {
            echo "$value ";
          }  ?>
        </li>
        <?php
    }
  }catch(PDOException $ex){ ?>
    <?= $ex->getMessage() ?> <?php
  }
}
?>
