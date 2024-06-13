import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import WOW from 'wow.js'

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebP() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}

//preloader

document.body.onload = () => {
	setTimeout(() => {
		let preloader = document.querySelector('.preloader')

		if (!preloader?.classList.contains('done')) {
			preloader?.classList.add('done')
		}
	}, 1000)
}

// Плавный скрол якоря к блокам
export function scrollAnchor() {
	const anchors = document.querySelectorAll('a[href*="#"]')

	let header = document.querySelector('header')

	let headerOffset = header.offsetHeight
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)
			let elementPosition = document
				.getElementById(blockID)
				?.getBoundingClientRect().top
			let offsetPosition = elementPosition + window.pageYOffset - headerOffset
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		})
	}
}

//Добавление фона для header при скроле страницы
export function addShadowHeader() {
	const header = document.querySelector('#header')
	if (window.pageYOffset > 0) {
		header?.classList.add('shadow')
	}
	window.addEventListener('scroll', function () {
		const scrollPosition = window.pageYOffset
		if (scrollPosition > 0) {
			header?.classList.add('shadow')
		} else {
			header?.classList.remove('shadow')
		}
	})
}

//скролл наверх

export function scrollTop() {
	const buttonScrollTop = document.querySelector('.link-arrow-top')
	window.addEventListener('scroll', e => {
		const scrollY = window.scrollY || document.documentElement.scrollTop
		scrollY > 300
			? buttonScrollTop?.classList?.remove('hidden')
			: buttonScrollTop?.classList?.add('hidden')
		buttonScrollTop?.addEventListener('click', e => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		})
	})
}

//wow animation
export function wowAnimationInit() {
	setTimeout(function () {
		const wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
		})
		wow.init()
	}, 400)
}

//mob-menu

export function showMobMenu() {
	const buttonMob = document.querySelector('.button-mob')
	const mobMenu = document.querySelector('.mobile-menu')
	buttonMob?.addEventListener('click', e => {
		e.currentTarget.classList.toggle('active')
		mobMenu?.classList.toggle('active')
	})
}

// slider initialization

export function sliderTestimonials() {
	const swiper = new Swiper('.slider-testimonials', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
}
