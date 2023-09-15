function changeBackground()
{
    document.body.style.backgroundColor = 'gray';
}

function notCSSProp()
{
    document.getElementById("show-text").innerHTML = "Hello World";
}


document.addEventListener('click', () =>
{
   document.getElementById("pics").src = "img/fp1.jpg";
});

document.addEventListener('mouseover', () =>
{
   document.getElementById("pics1").src = "img/scissors.jpg";
   document.getElementById("show-text1").innerHTML = "Scissor";
});