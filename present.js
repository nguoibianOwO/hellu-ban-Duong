
var to = 'có gì trong này';
var gift_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/274731495_696944304655504_2468816002333192337_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Momo-olp6m0AX-J_0nm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLQFB_84lW4XI706xp20YOuVy9_0fqx-on735U-nT8q3Q&oe=624B7EB3';
var gift_image_url = 'a.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show')
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

