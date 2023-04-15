const pafStyle = document.getElementById('paf-style');
const upworkStyle = document.getElementById('upwork-style')
const pafRole = document.querySelector('.paf-role');
const upworkRole = document.querySelector('.upwork-role')
const sideNavBtn = document.querySelector('#sidenav-btn');
const hiddenNav = document.querySelector('.hidden-nav')
const closeSideNav = document.querySelector('.close-sidenav');
const pageBody = document.querySelector('#page-body')

upworkStyle.addEventListener("click", function() {
    pafRole.style.display = "none";
    upworkRole.style.display = "block"
    upworkStyle.classList.add("active-button")
    pafStyle.classList.remove("active-button")
})
pafStyle.addEventListener("click", function() {
    upworkRole.style.display = "none"
    pafRole.style.display = "block"
    upworkStyle.classList.remove("active-button")
    pafStyle.classList.add("active-button")
})

sideNavBtn.addEventListener('click', function() {
    hiddenNav.style.width = "250px"
})
closeSideNav.addEventListener('click', function() {
    hiddenNav.style.width = "0"
    console.log('i clicked')
})


