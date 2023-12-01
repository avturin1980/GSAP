'use strict'

gsap.registerPlugin(TextPlugin)
let speed = 1.5
let invertList = ['SATOR', 'AREPO', 'TENET', 'OPERA', 'ROTAS']
let index = 0
let elements = document.querySelectorAll('.text p')

let tl = gsap
	.timeline()
	.set(elements, { scaleX: 0, scaleY: 0 })
	.to(elements, {
		delay: 1,
		duration: speed,
		scaleX: 1,
		scaleY: 1,
		ease: 'elastic.out(3,0.2)',
		stagger: speed,
		onComplete: () => {
			updateText(0)
		},
	})

function updateText(index) {
	if (index < elements.length) {
		gsap.to(elements[index], {
			//duration: speed * 1.5,
			rotateY: 360,
			text: { value: invertList[index], delimiter: '' },
			color: 'white', //'hsl(' + Math.random() * 360 + ', 100%, 50%)',
			textShadow: '0 0 2px black, 0 0 10px white',
			ease: 'elastic.out(1,0.3)',
			onComplete: () => {
				updateText(index + 1)
			},
		})
	} else {
		gsap.set('#p3', {
			color: 'black', //'hsl(' + Math.random() * 360 + ', 100%, 50%)',
			textShadow: '0 0 5px white, 0 0 20px #00dbf0',
		})

		for (let i = 0; i < elements.length; i++) {
			let content = elements[i].textContent
			let newContent = ''

			for (let j = 0; j < content.length; j++) {
				if ((j + 1) % 3 === 0) {
					newContent += '<span class="color">' + content[j] + '</span>'
				} else {
					newContent += content[j]
				}
			}

			elements[i].innerHTML = newContent
		}

		// gsap.to(document.getElementsByClassName('text'), {
		// 	duration: speed / 2,
		// 	scale: 6,
		// 	ease: 'power4.out',
		// 	opacity: 0,
		// 	delay: 3,
		// 	onComplete: () => {
		// 		let body = document.getElementById('body')
		// 		body.style.backgroundImage = "url('tenet.jpg')"
		// 	},
		// })
	}
}
