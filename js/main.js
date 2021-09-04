const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
	document.querySelector('.main-title span').innerHTML = '';

	new Typed('.main-title span', {
		strings: [`<code><span class='purple'>(</span>...I<span class='purple'>)</span><span class='orange'>=>^1000</span><br>build<span class='green'>===</span><span class='purple'>{^1000</span><br>stuff<span class='purple'>}</span><span class='orange orange-2'>&lt;</span><span class='orange orange-3'>/</span><span class='orange orange-4'>&gt;</span><span class='green'>*</span></code>`],
		typeSpeed: 10
	});
}
