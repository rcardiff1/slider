$(document).ready(function() {
  var $slider = $('#slider');

  // dynamically change css content for slider, get slider value
  $slider.on('change', function() {
  	document.styleSheets[0].addRule('input[type=range]::-webkit-slider-thumb::after', 'content: "' + $(this).val() + '"');
    $(this).attr('value', $(this).val());
  });

	var thumb = $slider,
	tooltip = createTooltip(),
	tooltipActive = false;

	// tooltip dynamically shows on mousehover
  function createTooltip() {
    var tooltip = $('<div />');
    $(document.body).append(tooltip);
    tooltip.css('visibility', 'hidden');
    tooltip.fadeTo(0, 0.6);
    tooltip.addClass('jqx-rc-all');
    tooltip.addClass('tooltip');
    return tooltip;
	};

	// adjust tooltip  on mouse change
	function refreshTooltip(value) {
    var thumbX = thumb.offset().left,
    thumbY = thumb.offset().top;
    tooltip.css('left', (thumbX + ((Number(value) / 100) * thumb.outerWidth(true)) - (((Number(value) / 100) * 24) + 3)));
    tooltip.css('top', thumbY - tooltip.outerHeight(true) - 10);
    tooltip.text(value);
	};

	// on mousemove show tooltip and hide value in thumb
	$slider.bind('mousemove', function (event) {
		tooltip.css('visibility', 'visible');
		document.styleSheets[0].addRule('input[type=range]::-webkit-slider-thumb::after', 'content: " "');
		tooltipActive = true;
	  if (tooltipActive) {
	    refreshTooltip($(this).val());
	  }
	});

	// on mouseleave hide tooltip and show value in thumb
	$slider.bind('mouseleave', function (event) {
		document.styleSheets[0].addRule('input[type=range]::-webkit-slider-thumb::after', 'content: "' + $(this).val() + '"');
	  tooltip.css('visibility', 'hidden');
	  tooltipActive = false;
	});

});



