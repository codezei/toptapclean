// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import AOS from 'aos';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	AOS.init();
	works()
	function works () {
		var swiper = new Swiper(".works-swiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
			  el: ".swiper-pagination",
			  type: "progressbar",
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			modules: [Navigation, Pagination],
			breakpoints: {
				576: {
				  slidesPerView: 2,
				},
				992: {
				  slidesPerView: 3,
				},
				1440: {
				  slidesPerView: 4,
				},
			  },
		  });
	}
	reviews()
	function reviews () {
		var swiper = new Swiper(".reviews-swiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			pagination: {
			  el: ".swiper-pagination",
			  type: 'progressbar'
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			modules: [Navigation, Pagination],
			// breakpoints: {
			// 	576: {
			// 	  slidesPerView: 2,
			// 	},
			// 	992: {
			// 	  slidesPerView: 3,
			// 	},
			// 	1440: {
			// 	  slidesPerView: 4,
			// 	},
			//   },
		  });
	}
	function hoverProcessItems () {
		let items = document.querySelectorAll('.process__item')
		let visualItems = document.querySelectorAll('.process-visual__item')
		for(let i = 0; i < items.length; i++) {
		  items[i].addEventListener('mouseover', function (e) {
			visualItems[i].classList.add("active")
		  })
		  items[i].addEventListener('mouseout', function (e) {
			visualItems[i].classList.remove("active")
		  })
		}
	  }
	  
	  hoverProcessItems ()
	  
	  function toggleMenu () {
		let btn = document.querySelector(".header__btn")
		let menu = document.querySelector(".header-mob")
	  
	  
		btn.addEventListener('click', function(e) {
		  menu.style.display = "block"
		  setTimeout(function(){
			menu.classList.add("header-mob--open")
		  }, 100)
		})
	  
		menu.addEventListener("click", function (e) {
		  if (e.target.classList.contains("header-mob__close") || e.target === e.currentTarget) {
			menu.classList.remove("header-mob--open")
			setTimeout(function(){
			  menu.style.display = "none"
			}, 400)
		  } else if (e.target.classList.contains("menu__link")) {
			menu.classList.remove("header-mob--open")
			setTimeout(function(){
			  menu.style.display = "none"
			}, 400)
		  }
		})
	  }
	  
	  toggleMenu ()
	  function hideLoader () {
		let loader = document.querySelector(".loader-wrap")
		loader.style.display = "none"
	  }
	  window.addEventListener("load", function() {
		hideLoader ()
		document.body.classList.add('animate')
	  })
})
