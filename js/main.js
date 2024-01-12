const btns = document.querySelectorAll('.buttonTitle li');
const boxes = document.querySelectorAll('.tab article');
const main = document.querySelector('.recipe');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.preventDefault();
		active(btns, i);
		active(boxes, i);
    });
}
function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}