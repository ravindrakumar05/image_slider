var images = [
'1.jpg',
'2.jpg',
'3.jpg',
'4.jpg',
'5.jpg',
'6.jpg',
'7.jpg',
'8.jpg',
'9.jpg',
'10.jpg',
];
let img = document.getElementById('img');
let imgIndex = 4;
let leftarrow = document.querySelector('.left');
let rightarrow = document.querySelector('.right');

leftarrow.onclick = function(){
    imgIndex -=1;
    if(imgIndex==0){
    leftarrow.style.display='none';
    }
    else{
    leftarrow.style.display='block';
    }
    img.setAttribute('src','images/'+images[imgIndex]);
    if(imgIndex<images.length-1){
        rightarrow.style.display="block";
    }
}
rightarrow.onclick = function(){
    imgIndex +=1;

     if(imgIndex==images.length-1){
    rightarrow.style.display="none";
    }
    else{
        rightarrow.style.display="block";
    }
    img.setAttribute('src','images/'+images[imgIndex]);
    if(imgIndex>=0){
        leftarrow.style.display="block";
    }
    
}