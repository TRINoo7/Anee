var gallery = document.getElementById('gallery');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.getElementsByClassName('content')[0].getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    var galleryItems = gallery.getElementsByClassName('gallery-item');
    for (var i = 0; i < galleryItems.length; i++) {
        var item = galleryItems[i];
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
        console.log(item.src);
    }
};
var images = gallery.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    var item = images[i];
    item.classList.add('byebye');
    console.log(item.complete)
    if (item.complete) {
        console.log("first run "+item.src);
        item.classList.remove('byebye');
        resizeAll();
    } else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = this.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            this.classList.remove('byebye');
            console.log("in else "+item.src);
        });
    }
    item.classList.remove('byebye');
}

window.addEventListener('load', function () {
    var galleryItems = Array.from(gallery.querySelectorAll('.gallery-item'));
    shuffleArray(galleryItems);
    galleryItems.forEach(function (item) {
      gallery.appendChild(item);
    });
  });

window.addEventListener('resize', resizeAll);
var galleryItems = gallery.getElementsByClassName('gallery-item');
for (var i = 0; i < galleryItems.length; i++) {
    var item = galleryItems[i];
    item.addEventListener('click', function () {        
        this.classList.toggle('full');   
        console.log("adding actionlisternedr "+this.src);    
    });
}
