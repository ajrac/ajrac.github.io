var slideshow_img = document.querySelector('.slideshow-image');
var images = ['maggie1.jpg', 'maggie2.jpeg', 'maggie3.jpeg', 'maggie4.jpeg', 'maggie5.jpeg'];
var i = 0;
function prev(){
    if(i<=0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if (i>=images.length-1) i=-1;
    i++;
    return setImg();
}
function setImg(){
    return slideshow_img.setAttribute('src', 'images/' +images[i]);
}