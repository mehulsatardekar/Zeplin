const scrollLeftBtn = document.querySelector('#scrollLeft');
const scrollRightBtn = document.querySelector('#scrollRight');
const cardSlider = document.querySelector('#cards-slider');

const brandScrollLeftBtn = document.querySelector('#brandScrollLeft');
const brandScrollRightBtn = document.querySelector('#brandScrollRight');
const brandCardSlider = document.querySelector('#brand-cards-slider');

const cardScroller = (node, scroll)=> {
    node.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
  }
scrollLeftBtn.addEventListener('click',()=>{
    const leftScroll = cardSlider.scrollLeft;
    console.log(leftScroll -400);
    cardScroller(cardSlider, leftScroll -400);
   
})


scrollRightBtn.addEventListener('click',()=>{
    const leftScroll = cardSlider.scrollLeft;
    console.log(leftScroll + 400);
    cardScroller(cardSlider, leftScroll + 400);
})


brandScrollLeftBtn.addEventListener('click',()=>{
    const leftScroll = brandCardSlider.scrollLeft;
    console.log(leftScroll -400);
    cardScroller(brandCardSlider, leftScroll -400);
   
})


brandScrollRightBtn.addEventListener('click',()=>{
    const leftScroll = brandCardSlider.scrollLeft;
    console.log(leftScroll + 400);
    cardScroller(brandCardSlider, leftScroll + 400);
})

