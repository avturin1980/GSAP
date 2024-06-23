'use strict'
gsap.registerPlugin(ScrollTrigger)

let k = 200,
	w = window.innerWidth * 0.5,
	h = w / 1.53 / k

function loadCanvas(curCanvasId) {
	let canvas = document.createElement('canvas')
	canvas.id = curCanvasId
	canvas.width = w
	canvas.height = h
	canvas.className = 'block'
	document.body.insertBefore(canvas, document.getElementById('my_Div2'))
}

function loadImg(curCanvasId, i) {
	let canvas = document.getElementById(curCanvasId)
	let context = canvas.getContext('2d')
	let imageObj = new Image()

	imageObj.onload = function () {
		let sourceX = 0
		let sourceY = i * (imageObj.height / k)
		let sourceWidth = imageObj.width
		let sourceHeight = imageObj.height / k
		let destWidth = w
		let destHeight = h
		let destX = 0
		let destY = 0

		context.drawImage(
			imageObj,
			sourceX,
			sourceY,
			sourceWidth,
			sourceHeight,
			destX,
			destY,
			destWidth,
			destHeight
		)
	}
	imageObj.src = 'Butterfly.png'
}

for (let i = 0; i < k; i++) {
	let curCanvasId = 'canvas_Column' + i
	loadCanvas(curCanvasId)
	loadImg(curCanvasId, i)
}

gsap.fromTo(
	'.block',
	{ x: '-200%' },
	{
		scrollTrigger: {
			trigger: 'block',
			start: '-5%',
			end: '60%',
			scrub: 1,
			toggleActions: 'play reverse play reverse',
		},
		x: 0,
		ease: 'elastic.out(1, 0.9)',
		stagger: 0.15 / k,
	}
)

gsap.to('.block', {
	scrollTrigger: {
		trigger: 'block',
		start: '15%',
		end: '60%',
		scrub: 1,
		toggleActions: 'play reverse play reverse',
	},
	rotateY: 180,
	ease: 'power1.out',
	stagger: 0.25 / k,
})

gsap.fromTo(
	'.block',
	{ x: 0 },
	{
		scrollTrigger: {
			trigger: 'block',
			start: '40%',
			end: '90%',
			scrub: 1,
			toggleActions: 'play reverse play reverse',
		},
		y: '-=4000',
		x: '+=4000',
		ease: 'bounce.out',
	}
)
