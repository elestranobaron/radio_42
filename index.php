<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Radio quarante-deux</title>
	<link rel="stylesheet" href="style/style.css">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<script src="js/jquery-2.1.0.min.js"></script>
	<script src="js/radio.js"></script>
</head>
<body>
	<h4>$> ./radio_42</h4>
	<audio preload volume="0.0" src="http://42.ham-radio-op.net:8080"></audio>
	<div id="player_button">
		<div id="play_button"><i class="fa fa-play"></i></div>
		<div id="pause_button" class="hidden"><i class="fa fa-pause"></i></div>
	</div>
	<div id="round"></div>
</body>
</html>
