;(function()
{
	"use strict";
	var radio = {};
	var priv = {};


	priv.play = function()
	{
		var audio = document.getElementsByTagName('audio')[0];

		$("#play_button").addClass('hidden');
		$("#pause_button").removeClass('hidden');
		$("audio").animate({volume: 0.0}, 0);
		audio.play();
		$("audio").animate({volume: 1.0}, 1000);
	};

	priv.pause = function()
	{
		var audio = document.getElementsByTagName('audio')[0];

		$("#play_button").removeClass('hidden');
		$("#pause_button").addClass('hidden');

		$("audio").animate({volume: 0.0}, 1000);
		setTimeout(function()
		{
			audio.pause();
		}, 1000);
	}

	radio.buffer = function()
	{
		var audio = document.getElementsByTagName('audio')[0];
		audio.play();
		setTimeout(audio.pause(), 10);
	}

	radio.place_button = function()
	{
		var hei = $("#englobe").height();
		var wid = $("#englobe").width();
		var but_hei = $("#player_button").height();
		var but_wid = $("#player_button").width();

		$("#player_button").css("top", (hei - but_hei) / 2);
		$("#player_button").css("left", (wid - wid_hei) / 2);
	}

	radio.onready = function()
	{
		$("#play_button").click(function()
		{
			priv.play();
		});

		$("#pause_button").click(function()
		{
			priv.pause();
		});
	};

	window.radio = radio;
})();

$(document).ready(function(){
	radio.buffer();
	radio.onready();
});
