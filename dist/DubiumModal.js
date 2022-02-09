/**
 * DubiumModal 0.0.1
 *
 * https://dubiumekb.github.io/DubiumModal/
 *
 * Copyright (c) 2022 Михаил Вострокнутов
 *
 * Released under the MIT License
 *
 * Released on: February 9, 2022
 */

class DubiumModal {
	constructor(name, options) {
		const defaultOptions = {
			overlay: true,
			windowScroll: false,
			modalScroll: false,
			windowInCenter: false,
			closeESC: true,
			closeOutside: true,
			show: false,
			windowWidth: null, // small | large | fullscreen
			animationSpeed: 300,
		}
		this.options = Object.assign(defaultOptions, options)
		this.name = name
		this.body = document.body
		this.speed = this.options.animationSpeed

		this.isBtnModal = document.querySelector(
			`[data-dubiumModal-btn="${this.name}"]`,
		)

		this.isDubiumModal = document.querySelector(
			`[data-dubiumModal="${this.name}"]`,
		)

		if (this.name) this.init()
	}

	init() {
		this.isDubiumModal.isOpened = false
		if (this.isBtnModal && this.isDubiumModal) {
			this.defaultModal()
		} else {
			this.error()
		}
	}

	searchSelectors() {
		this.btnModal = document.querySelectorAll(
			`[data-dubiumModal-btn="${this.name}"]`,
		)

		this.dubiumModal = document.querySelector(
			`[data-dubiumModal="${this.name}"]`,
		)

		this.closeDubiumModal = this.isDubiumModal.querySelectorAll(
			`[data-dubiumModal-action="close"]`,
		)

		this.modalVisible = document.querySelectorAll(
			".modal[data-dubiumModal]",
		)
	}

	defaultModal() {
		this.searchSelectors()
		this.dubiumModal.style.setProperty(
			"--dubium-modal-speed-animation",
			`${this.speed / 1000}s`,
		)

		this.open()
		this.close()

		if (this.options.show) this.show()

		if (this.options.closeESC) this.closeESC()

		if (this.options.closeOutside) this.closeOutside()

		if (this.options.overlay)
			this.dubiumModal.classList.add("modal__overlay")

		if (this.options.windowScroll)
			this.dubiumModal.classList.add("modal__scroll--window")

		if (this.options.modalScroll)
			this.dubiumModal.classList.add("modal__scroll--modal")

		if (this.options.windowInCenter)
			this.dubiumModal
				.querySelector(".modal__dialog")
				.classList.add("modal__dialog--center")

		switch (this.options.windowWidth) {
			case "small":
				this.dubiumModal
					.querySelector(".modal__dialog")
					.classList.add("modal__dialog--small")
				break

			case "large":
				this.dubiumModal
					.querySelector(".modal__dialog")
					.classList.add("modal__dialog--large")
				break

			case "fullscreen":
				this.dubiumModal
					.querySelector(".modal__dialog")
					.classList.add("modal__dialog--fullscreen")
				break

			default:
				break
		}
	}

	show() {
		this.closeHandler()
		this.openHandler()
	}

	closeESC() {
		document.addEventListener(
			"keydown",
			function (event) {
				if (event.key == "Escape")
					if (this.isDubiumModal.isOpened) this.closeHandler()
			}.bind(this),
		)
	}

	closeOutside() {
		this.isDubiumModal.addEventListener(
			"click",
			function (event) {
				if (event.target.classList.contains("modal")) {
					if (this.isDubiumModal.isOpened) this.closeHandler()
				}
			}.bind(this),
		)
	}

	open() {
		this.btnModal.forEach((btn) => {
			btn.addEventListener(
				"click",
				function () {
					this.closeHandler()
					setTimeout(() => {
						this.openHandler()
					}, 100)
				}.bind(this),
			)
		})
	}

	openHandler() {
		this.dubiumModal.isOpened = true
		this.dubiumModal.classList.add("show")
		this.dubiumModal.removeAttribute("aria-hidden")
		this.dubiumModal.setAttribute("role", "dialog")

		if (document.body.scrollHeight !== window.innerHeight) {
			this.body.classList.add("modal__visible")
		}
	}

	close() {
		this.closeDubiumModal.forEach((btn) => {
			btn.addEventListener(
				"click",
				function () {
					if (this.isDubiumModal.isOpened) this.closeHandler()
				}.bind(this),
			)
		})
	}

	closeHandler() {
		this.modalVisible.forEach((modal) => {
			if (modal.classList.contains("show")) {
				modal.isOpened = false
				modal.classList.remove("show")
				modal.classList.add("hide")
				setTimeout(function () {
					modal.classList.remove("hide")
				}, this.speed)

				modal.setAttribute("aria-hidden", true)
				modal.removeAttribute("role", "dialog")

				if (document.body.scrollHeight !== window.innerHeight) {
					this.body.classList.remove("modal__visible")
				}

				this.dubiumModal.isOpened = false
			}
		})
	}

	error() {
		if (this.isBtnModal == null && this.isDubiumModal == null)
			console.error(
				`Button and modal window parameter not found: ${this.name}`,
			)

		if (this.isBtnModal == null)
			console.error(`Button parameter not found: ${this.name}`)

		if (this.isDubiumModal == null)
			console.error(`Modal window parameter not found: ${this.name}`)
	}

	errorRender() {
		if (this.render.title == null)
			console.error(`Add text to the property: title`)

		if (this.render.body == null)
			console.error(`Add text to the property: body`)

		if (this.render.footer == null)
			console.info(`Add text to the property: footer`)
	}
}
