'use strict'

let videoList=document.querySelectorAll('.vedio-list .vid'),
mainVideo=document.querySelector('.main-vedio video'),
title=document.querySelector('.main-vedio .title')

videoList.forEach(video=>{
    video.onclick=()=>{
        videoList.forEach(vid =>vid.classList.remove('active'));
        video.classList.add('active')
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src')
            mainVideo.src=src
            let text=video.children[1].innerHTML
            title.innerHTML=text 
        }
    }
})  