'use strict';
var opener = document.getElementById('popupOpener'),
	closer = document.getElementById('popupCloser'),
	cancel = document.getElementById('cancel'),
	uninstall = document.getElementById('uninstall'),
	overlay = document.getElementById('overlay'),
	modal = document.getElementById('modal'),
	elements = [opener, closer, cancel, uninstall, overlay];

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', (function(i) {
		if (elements[i] == uninstall) {
			alert('Done!');
		} else if(elements[i] == opener) {
			modal.classList.remove('hideMe');
			modal.classList.add('showMe');
		} else {
			modal.classList.add('hideMe');
			modal.classList.remove('showMe');
		}
	}).bind(null, i), false)
}