<?php

$sum = 0;
$size = count($argv) - 1;

foreach($argv as $grades){
    if(is_numeric($grades)) $sum+= abs($grades); 
}

echo "The arithmetic average of the reported notes is: {($sum / $size)}";