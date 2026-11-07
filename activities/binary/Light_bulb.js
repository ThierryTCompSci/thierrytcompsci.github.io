$(document).ready ( function () {
	$( "#lb1" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b1").text() === '0')? '1': '0';
		$("#b1").text(text1);
		calculateDecimal();
	});
	$( "#lb2" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b2").text() === '0')? '1': '0';
		$("#b2").text(text1);
		calculateDecimal();
	});
	$( "#lb3" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b3").text() === '0')? '1': '0';
		$("#b3").text(text1);
		calculateDecimal();
	});
	$( "#lb4" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b4").text() === '0')? '1': '0';
		$("#b4").text(text1);
		calculateDecimal();
	});
	$( "#lb5" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b5").text() === '0')? '1': '0';
		$("#b5").text(text1);
		calculateDecimal();
	});
	$( "#lb6" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b6").text() === '0')? '1': '0';
		$("#b6").text(text1);
		calculateDecimal();
	});
	$( "#lb7" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b7").text() === '0')? '1': '0';
		$("#b7").text(text1);
		calculateDecimal();
	});
	$( "#lb8" ).click(function() {
		var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
		$(this).attr('src', src);
		var text1 = ($("#b8").text() === '0')? '1': '0';
		$("#b8").text(text1);
		calculateDecimal();
	});
});

function calculateDecimal() {
	decimal=0;
	var b1=($("#b1").text() === '1')? 1: 0;
	var b2=($("#b2").text() === '1')? 2: 0;
	var b3=($("#b3").text() === '1')? 4: 0;
	var b4=($("#b4").text() === '1')? 8: 0;
	var b5=($("#b5").text() === '1')? 16: 0;
	var b6=($("#b6").text() === '1')? 32: 0;
	var b7=($("#b7").text() === '1')? 64: 0;
	var b8=($("#b8").text() === '1')? 128: 0;
	decimal=b1+b2+b3+b4+b5+b6+b7+b8;
	$("#d").text(decimal);
}

/*$( "#lb1" ).click(function() {
	alert("test");
	var src = ($(this).attr('src') === 'Light_bulb_off.png')? 'Light_bulb_on.png': 'Light_bulb_off.png';
	$(this).attr('src', src);
});*/
/*
$('#lb2').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});

$('#lb3').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});

$('#lb4').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});

$('#lb5').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});

$('#lb6').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});

$('#lb7').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});

$('#lb8').on({
'click': function() {
var src = ($(this).attr('src') === 'Light_bulb_off.png')
? 'Light_bulb_on.png'
: 'Light_bulb_off.png';
$(this).attr('src', src);
}
});
*/
