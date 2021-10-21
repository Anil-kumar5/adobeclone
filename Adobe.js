let searchBtn = document.querySelector('#search-icon');
let searchBar = document.querySelector('.search-bar-container');
let crossBtn = document.querySelector('.remove-icon')
let megadrop = document.querySelectorAll('.navbar-dropdwon-link');
let Dropdown = document.querySelectorAll('.dropdown-container');
let dropdownIcon = document.querySelectorAll('#dropdown');
let navBar = document.querySelector('.adobe-navbar-container');
let hamburger = document.querySelector('#hamburger-icon');
let navlists = document.querySelector('.nav-lists');
searchBtn.addEventListener('click', () =>{
    // crossBtn.classList.toggle('cross-icon')
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
    for(let i = 0; i<megadrop.length;i++){
        Dropdown[i].classList.remove('active')
        dropdownIcon[i].classList.remove('icon-reverse')
    }
})
// crossBtn.addEventListener('click' , () =>{
//     searchBar.classList.remove('active')
//     searchBtn.classList.toggle('visible')
//     crossBtn.classList.remove('cross-icon')
// })
// firstNav.addEventListener('click',() =>{
//     Dropdown.classList.toggle('active')
//     dropdownIcon.classList.toggle('icon-reverse');
// })
// window.onscroll = () => {
//     searchBar.classList.remove('active')
//     // firstDropdown.classList.remove('active')
// }
window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
}
// let footerlinks = document.getElementsByClassName('footer-header-icon-container');
// let footerLinksData = document.getElementsByClassName('footer-list-links-container');

// footerlinks.addEventListener('click' ,()=>{
//     footerLinksData.classList.toggle('display')
// })
// console.log(footerlinks.length,'length')
let footerlink = document.querySelectorAll('.footer-header-icon-container');
let footerlinkData = document.querySelectorAll('.footer-list-links-container');
// console.log(footerlink.length,'footer-link-length')
// console.log(footerlinkData.length,'links')
for(let i =0; i<footerlink.length;i++){
    footerlink[i].addEventListener('click', ()=>{
        // alert('anil')
        footerlinkData[i].classList.toggle('display')
    })
}
for(let i = 0; i<megadrop.length;i++){
            megadrop[i].addEventListener('click' , ()=>{
                Dropdown[i].classList.toggle('active')
                dropdownIcon[i].classList.toggle('icon-reverse')
                searchBar.classList.remove('active')
                searchBtn.classList.remove('fa-times')
              console.log(i)
            })    
}
console.log(Dropdown.length,'mega')
hamburger.addEventListener('click' , ()=>{
    searchBar.classList.toggle('active')
    navlists.classList.toggle('active')
})



// function scrollDetect(){
//     var lastScroll = 0;
//     window.onscroll = function() {
//         let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  
//         if (currentScroll > 0 && lastScroll <= currentScroll){
//           lastScroll = currentScroll;
//        console.log('down')
//        navBar.classList.toggle('remove-navbar');
//         }else{
//           lastScroll = currentScroll;
//       console.log('up')
//         }
//     };
//   }
//   scrollDetect();



  var scrollableElement = document
  scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

  let c;
  let d;
  function findScrollDirectionOtherBrowsers(event){
      var delta;
      if (event.wheelDelta){
          delta = event.wheelDelta;
      }else{
          delta = -1 *event.deltaY;
      }
      if (delta < 0){
          navBar.classList.toggle('remove-navbar');
        return c =1;
          console.log('down')
      }else if (delta > 0){
        //   navBar.classList.remove('remove-navbar');
        return d =1
          console.log('up')
      }
  }
