const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    let imageSrc = 'images/pic'+i+'.jpg';
    newImage.setAttribute('src', imageSrc);
    thumbBar.appendChild(newImage);
    newImage.onclick = function() {
        displayedImage.setAttribute('src', imageSrc);
    };
}


/* Wiring up the Darken/Lighten button */
btn.onclick = function(e) {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        e.target.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        e.target.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
};