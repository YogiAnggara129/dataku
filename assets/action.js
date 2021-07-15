var slideIndex = 1;
var slideItems = document.getElementsByClassName("slide-item");
var slideMarks = document.getElementsByClassName("slide-mark");
showDivs(slideIndex);

function scrollToElement(element, type=null, e=null) {
  if(element.nodeType) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    return;
  }

  if(type === 'id') {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'start'});
    e.preventDefault();
    return;
  } 

  if(type === 'class') {
    document.getElementsByClassName(element).scrollIntoView({ behavior: 'smooth', block: 'start'});
    e.preventDefault();
  }
}

function plusDivs(n) {
  showDivs(slideIndex += n);
  scrollToElement(slideItems[slideIndex-1])
}

function showDivs(n) {
  if (n > slideItems.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slideItems.length} ;
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].style.display = 'none';
    slideMarks[i].src = "assets/image/ic_circle_border.svg";
  }
  slideItems[slideIndex-1].style.display = 'block';
  slideMarks[slideIndex-1].src = "assets/image/ic_circle_fill.svg";
}