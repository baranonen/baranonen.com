const backgrounds = [
    'frame2.svg', 'frame3.svg', 'frame4.svg', 'frame5.svg', 'frame6.svg', 'frame7.svg', 'frame8.svg', 'frame9.svg', 'frame10.svg', 'frame11.svg', 'frame12.svg', 'frame13.svg', 'frame14.svg', 'frame15.svg', 'frame16.svg', 'frame17.svg'
];

function preloadImages(urls) {
    return Promise.all(urls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
        });
    }));
}

function changeBackground() {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index >= backgrounds.length) {
            clearInterval(intervalId);
        } else {
            document.getElementsByClassName("container")[0].style.backgroundImage = `url(${backgrounds[index]})`;
            index++;
        }
    }, 3000);
}

preloadImages(backgrounds).then(() => {
    changeBackground();
}).catch(error => {
    console.error('Error preloading images:', error);
});