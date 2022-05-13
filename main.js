
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mount = document.getElementById('mount');
let mount2 = document.getElementById('mount2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let upay = document.querySelector('.upay');
window.onscroll = function(){
    let value = scrollY;

    
    stars.style.left = value * 1.5 + 'px';
    moon.style.top = value * 3 + 'px';
    mount.style.top = value * 2 + 'px';
    mount2.style.top = value * 1.5 + 'px';
    boat.style.top = value  + 'px';
    river.style.top = value  + 'px';
    boat.style.left = value * 3 + 'px';
    upay.style.fontsize = value + 'px';
    if(scrollY >= 160){
        document.querySelector('.main').style.background = 'linear-gradient(#00ccff,#10001f)'
   
   
   
}
else{
    document.querySelector('.main').style.background = 'linear-gradient(#3a0028,#10001f)'}


}     




   


















































































































































































