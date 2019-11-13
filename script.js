let slides = [
    {
        id: 1,
        image: 'http://wallperio.com/data/out/90/desktop-hd-wallpapers_599106999.jpg',
        url: 'http://google.com'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/originals/7e/45/3e/7e453e1c50ff032a2f608190e6d52898.jpg',
        url: 'http://google.com'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&w=1000&q=80',
        url: 'http://google.com'
    },

    {
        id: 4,
        image: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/HD-PC-Wallpaper-2016.jpg',
        url: 'http://google.com'
    }

];

 
// Creating new 'a' tag and respective 'image' from each element in slides

for (var i = 0; i <  slides.length; i++) {
    let element = document.createElement('a');
    element.id = slides[i].id; 
    element.classList.add('slide');
    element.setAttribute('href', slides[i].url);
    document.getElementById('slides-wrapper').appendChild(element)
    let img = document.createElement('img');
    img.setAttribute('src', slides[i].image);
    element.appendChild(img);
}


// Modifying the width of the #slides-wrapper based on the slide number
document.getElementById('slides-wrapper').style.width = slides.length + '000px'


// Adding swipers to the bottom of slides

for (i = 0; i < slides.length; i++) {
    let swipe = document.createElement('div');
    swipe.id = 'swipe' + (i + 1);
    swipe.style.width = '20px';
    swipe.style.height = '5px';
    swipe.style.borderRadius = '10px';
    swipe.style.backgroundColor = 'white';
    swipe.style.margin = '5px';
    document.getElementById('swiper').appendChild(swipe);
}


// Changing color of swipe bubles
let currentSlide = 1
document.getElementById(`swipe${currentSlide}`).style.backgroundColor = 'yellow'

// Navigation algorithm for the slides
document.querySelectorAll('.nav').forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.classList.contains('nav-left')) {
            currentSlide === 1 ? currentSlide = slides.length : currentSlide--
            }
        else {
            currentSlide >= slides.length ? currentSlide = 1 : currentSlide++
        }
        let lent = (currentSlide - 1) * 1000;
        document.getElementById('slides-wrapper').style.left = '-' + lent + 'px';

        
        for (let i = 0; i < slides.length; i++) {
            if (currentSlide === 1 ) {
                document.getElementById(`swipe${currentSlide + i}`).style.backgroundColor = 'white'
                document.getElementById(`swipe${currentSlide}`).style.backgroundColor = 'yellow'
            }
            else if (currentSlide === slides.length){
                document.getElementById(`swipe${currentSlide - i}`).style.backgroundColor = 'white'
                document.getElementById(`swipe${currentSlide}`).style.backgroundColor = 'yellow'
            }
            else {
                document.getElementById(`swipe${currentSlide + i}`).style.backgroundColor = 'white';
                document.getElementById(`swipe${currentSlide - i}`).style.backgroundColor = 'white'
                document.getElementById(`swipe${currentSlide}`).style.backgroundColor = 'yellow'
            }
        }
        
    })

})
