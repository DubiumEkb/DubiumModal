document.addEventListener("DOMContentLoaded", function () {
	const urlPage = window.location.pathname;
	const btnSwitch = document.querySelectorAll(".btnSwitch");

	if (localStorage.key("userLanguage") == null) {
		if (urlPage == "/DubiumModal/") {
			localStorage.setItem("userLanguage", "ru");
		} else if (urlPage == "/DubiumModal/en/") {
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
				urlPage != "/DubiumModal/"
			) {
				window.location.href = "/DubiumModal/";
			} else if (
				localStorage.getItem("userLanguage") == "en" &&
				urlPage != "/DubiumModal/en/"
			) {
				window.location.href = "/DubiumModal/en/";
			}
		}, 500);
	}

	btnSwitch.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			if (btn.pathname == "/DubiumModal/") {
				localStorage.setItem("userLanguage", "ru");
			} else if (btn.pathname == "/DubiumModal/en/") {
				localStorage.setItem("userLanguage", "en");
			}
			setTimeout(() => {
				if (
					localStorage.getItem("userLanguage") == "ru" &&
					urlPage != "/DubiumModal/"
				) {
					window.location.href = "/DubiumModal/";
				} else if (
					localStorage.getItem("userLanguage") == "en" &&
					urlPage != "/DubiumModal/en/"
				) {
					window.location.href = "/DubiumModal/en/";
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