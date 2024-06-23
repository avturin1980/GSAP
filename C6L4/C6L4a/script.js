'use strict'

gsap.registerPlugin(ScrollTrigger)

gsap.to('#box', {
	scrollTrigger: {
		trigger: '#box',
		toggleActions: 'play pause resume reset',
		start: 'top center',
		markers: true,
	},
	duration: 3,
	x: 600,
	rotateZ: 360,
})
