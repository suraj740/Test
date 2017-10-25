for (var i = 0; i < images.length; i++) {
    var image = images[i],
        width = String(image.currentStyle.width);

    if (width.indexOf('%') == -1) {
        continue;
    }

    image.origWidth = image.offsetWidth;
    image.origHeight = image.offsetHeight;

    imgCache.push(image);
    c.ieAlpha(image);
    image.style.width = width;
}