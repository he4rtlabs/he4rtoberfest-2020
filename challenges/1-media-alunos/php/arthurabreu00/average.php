<?php
$size = count($argv) - 1;
$sum = array_sum($argv);
$average = $sum / $size;
echo "The arithmetic average of the reported notes is: $average";