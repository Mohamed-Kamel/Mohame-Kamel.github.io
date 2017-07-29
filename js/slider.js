/**************************one time use******************************/
/*(function($){

	var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
		imgs = sliderUL.find('img'),
		imgWidth = imgs[0].width,
		imgLen = imgs.length,
		current = 1,
		totalImgsWidth = imgLen * imgWidth;

	$('#slider-nav').show().find('button').on('click', function(){
		var direction = $(this).data('dir'),
		loc = imgWidth;

		(direction === 'next') ?  ++current : --current;

		if(current === 0){
			current = imgLen;
			loc = totalImgsWidth - imgWidth;
			direction = 'next';
		}else if (current - 1 === imgLen) {
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
	});


	function transition(container, loc, direction){
		var unit;

		if(direction && loc != 0){
			unit = (direction === 'next')? '-=' : '+=';
		}

		container.animate({
			'margin-left': (unit)? (unit + loc) : loc
		});
	}

})(jQuery);*/


/*********************************Usable******************************/


function Slider(container, nav){
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;
}

Slider.prototype.transition = function(coords){
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	});
};

Slider.prototype.setCurrent = function( dir ){
	
	var pos = this.current;
	//cast the result to integer 
	pos += ( ~~(dir === 'next') || -1);

	this.current = (pos < 0) ? this.imgsLen - 1 : pos % this.imgsLen;

	return pos;
};