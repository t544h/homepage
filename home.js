var btnplus =document.getElementsByClassName("cn")
console.log(btnplus[0]);
btnplus[0].addEventListener('click', function view()
{
    console.log( btnplus[0].style.color); 
    if (btnplus[0].style.color=='white') {
     
        btnplus[0].style.color='#CDBBA7'}
    else { btnplus[0].style.color='white'}
})