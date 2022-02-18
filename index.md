---
layout: default
---

<header class="header-main text-center">
	<a href="/"><img src="{{ "/assets/img/logo.png" | relative_url }}" class="logo-main" alt="{{ site.title }}"></a>
	<p><a href="logs">Актуальная версия: 0.4.0</a></p>
</header>

<main class="main-main">
	<section class="section-main">
		<header class="container-small">
			{{ content }}
		</header>
		<div class="link-main content grid">
			<a href="{{ "/ru/home" | relative_url }}" class="btn">Документация</a>
			<a href="{{ "/en/home" | relative_url }}" class="btn">Документация</a>
		</div>
	</section>
</main>

<footer class="footer-main">
	<div class="footer-main--container">
		<p class="text-center small"><a href="https://github.com/DubiumEkb/DubiumModal/blob/main/LICENSE" target="blank">Код распространяется по лицензии MIT.</a></p>
		<p class="text-center">Разработано {{site.author}}</p>
	</div>
</footer>