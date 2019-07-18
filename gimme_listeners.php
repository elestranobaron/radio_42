<?php

function s($num)
{
	if ($num > 1)
		return 's';
}
$esc = "awk {'print $4'}";
define('LISTENERS_CMD', 'netstat -an | grep ESTABLISHED | '.$esc.' | grep :8080 | wc -l');

$listeners['num'] = shell_exec(LISTENERS_CMD);
$listeners['str'] = 'listener' . s($listeners['num']);

echo(json_encode($listeners));

?>
