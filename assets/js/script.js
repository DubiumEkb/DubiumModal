document.addEventListener("DOMContentLoaded", function () {
	const urlPage = window.location.pathname;
	const btnSwitch = document.querySelectorAll(".btnSwitch");

	if (localStorage.key("userLanguage") == null) {
		if (urlPage == "/") {
			localStorage.setItem("userLanguage", "ru");
		} else if (urlPage == "/en/") {
			localStorage.setItem("userLanguage", "en");
		}
		const startModal = new DubiumModal("startModal", {
			windowInCenter: true,
			show: true,
			windowWidth: "large",
		});
	} else {
		setTimeout(() => {
			if (
				localStorage.getItem("userLanguage") == "ru" &&
				urlPage != "/"
			) {
				window.location.href = "/";
			} else if (
				localStorage.getItem("userLanguage") == "en" &&
				urlPage != "/en/"
			) {
				window.location.href = "/en/";
			}
		}, 500);
	}

	btnSwitch.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			if (btn.pathname == "/") {
				localStorage.setItem("userLanguage", "ru");
			} else if (btn.pathname == "/en/") {
				localStorage.setItem("userLanguage", "en");
			}
			setTimeout(() => {
				if (
					localStorage.getItem("userLanguage") == "ru" &&
					urlPage != "/"
				) {
					window.location.href = "/";
				} else if (
					localStorage.getItem("userLanguage") == "en" &&
					urlPage != "/en/"
				) {
					window.location.href = "/en/";
				}
			}, 500);
		});
	});

	document.querySelectorAll('a[href^="#"').forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			let href = this.getAttribute("href").substring(1);
			const scrollTarget = document.getElementById(href);
			const topOffset = 300;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: "smooth",
			});
		});
	});
});