const backgrounds = [
    'frames/frame2.svg', 'frames/frame3.svg', 'frames/frame4.svg', 'frames/frame5.svg', 'frames/frame6.svg', 'frames/frame7.svg', 'frames/frame8.svg', 'frames/frame9.svg', 'frames/frame10.svg', 'frames/frame11.svg', 'frames/frame12.svg', 'frames/frame13.svg', 'frames/frame14.svg', 'frames/frame15.svg', 'frames/frame16.svg', 'frames/frame17.svg'
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