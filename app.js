function hamburgerClicked() {
	const linksHolder = document.querySelector('.links-holder'),
				links = document.querySelectorAll('.header-links');
	if (linksHolder.style.display === "flex") {
		linksHolder.style.animation = "slideOutRight 1s";
		setTimeout(() => {
			linksHolder.style.display = "none";
		}, 1000);
	} else {
		linksHolder.style.display = "flex";
		linksHolder.style.animation = "slideInRight 1s";
		linksHolder.classList.add('menu');
		links.forEach(el => {
			el.style.color = "#fff";
		});
	}
}

$(document).ready(function() {
	$('.logos-holder').slick({
		infinite: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 102400,
				settings: 'unslick'
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 700,
				settings: {
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
		]
	});

	// $('.shopping-cards').slick({
	// 	infinite: false,
	// 	dots: true,
	// 	prevArrow: $('.prev-shopping-arrow'),
	// 	nextArrow: $('.next-shopping-arrow'),
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3,
	// 	responsive: [
	// 		{
	// 		// 	breakpoint: 102400,
	// 		// 	settings: 'unslick'
	// 		// },
	// 		// {
	// 		// 	breakpoint: 950,
	// 		// 	settings: {
	// 		// 		slidesToShow: 3,
	// 		// 		slidesToScroll: 3,
	// 		// 	}
	// 		// },
	// 		// {
	// 		// 	breakpoint: 700,
	// 		// 	settings: {
	// 		// 		// infinite: true,
	// 		// 		slidesToShow: 2,
	// 		// 		slidesToScroll: 2,
	// 		// 	}
	// 		// },
	// 		// {
	// 			breakpoint: 700,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			}
	// 		},
	// 	]
	// });
});
