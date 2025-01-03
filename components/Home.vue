<template>
<div class="section" id="home">
<div class="name">
    <h1>TAYAM </h1>
    <h1 class="lines">SOUBUH</h1>
    <div class="line-con">
        <span class="line"></span>
        <span class="line2"></span>
    </div>
    <h4> 21 Year Old / </h4>
    <h4> Front-End Developer</h4>
</div>

<div class="sun-section">
    <div class="sun-img-container">
        <img src="/sun.png" alt="">
        <h2>PORTFOLIO</h2>
    </div>
    <!-- <div class="cloud-img-container">
        <img src="/bird.png" alt="">
    </div>
    <div class="cloud-img-container2">
        <img src="/bird2.png" alt="">
    </div> -->
</div>

</div>
</template>
<script setup>
// plugins/motion.js
// import { MotionPlugin } from '@vueuse/motion';
// import { defineNuxtPlugin } from '#app';

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(MotionPlugin);
// });
</script>
<style scoped>

.section{
    margin: 0 0 0 180px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.name{
    width: max-content;
}
.name h1{
    width:fit-content;

    font-size: 120px;
    transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.1s;
    animation-fill-mode: both;
    transition: .3s;

}


.name .lines{
    font-size: 120px;
    position: relative;
    transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.3s;
    animation-fill-mode: both;
    transition: .3s;

}
/*
.name .lines::after{
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    border-radius: 50px;
    background: black;
    position: absolute;
    bottom: 40px;
    left: 60px;
}
.name .lines::before{
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    border-radius: 50px;
    background: black;
    position: absolute;
    bottom: 60px;
}

cloud-img-container{
    width: 300px;
    position: absolute;
    top: 50px;
    left: -150px;
    overflow: hidden;
    
    
}
.cloud-img-container2{
    width: 300px;
    position: absolute;
    bottom: 130px;
    left: 300px;
    overflow: hidden;
    
    
}
.cloud-img-container2:hover{
    transform: translatey(-50px);
    transition: 5s;

}
.cloud-img-container2 img{
    width: 100%;
    filter: brightness(0.1);
}

.cloud-img-container img{
    width: 100%;
    filter: brightness(0.1);
}

*/

.line-con{
    width: fit-content;
}
.name .line{

    position: relative;
    transform: translateX(-550px);

    display: block;
    width: 100px;
    height: 4px;
    border-radius: 50px;
    background: black;
    margin-bottom: 20px;
    animation: fade-in;
    animation-duration: 1.2s;
    animation-fill-mode: both;
    transition: .3s;
}
.name .line2{
    
    position: relative;
    transform: translateX(-550px);

    display: block;
    width: 100px;
    height: 4px;
    border-radius: 50px;
    background: black;
    margin-bottom: 20px;
    margin-left: 55px;
    animation: fade-in;
    animation-duration: 1.3s;
    animation-fill-mode: both;
    transition: .3s;

}
.name h4{
    width: max-content;
    font-size: 28px;
    transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.4s;
    animation-fill-mode: both;
    transition: .3s;

}
/*sun*/ 
.sun-section{
    position: relative;
}
.sun-img-container{
    width: fit-content;
    padding:0 50px 0 20px;
    overflow: hidden;
    position: relative;
    transform: translate(700px,0px);
    transition: 0.3s;
    animation: fade-in-3;
    animation-duration: 1.4s;
    animation-fill-mode: both;

}

.sun-img-container img{
    pointer-events: none;
    width: 620px;
    animation: rotate 52s linear infinite; /* Adjust duration as needed */
}

.sun-img-container h2{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(800px,-50%);
    font-size:54px ;
    font-weight: 900;
    text-shadow:0px 4px 3px rgba(0,0,0,0.4),
                0px 8px 13px rgba(0,0,0,0.1),
                0px 18px 23px rgba(0,0,0,0.1);
    transition: .3s;
    animation: fade-in-2;
    animation-duration: 1.4s;
    animation-fill-mode: both;
}

.sun-img-container h2:hover,.name h1:hover, .line:hover, .line2:hover,h4:hover{
    color: white;
    transition: .3s;
}
 .line-con:hover .line2,.line-con:hover .line{
    background: white;
    transition: .3s;
}
@media (max-width: 1400px) {
    .name h1{
        font-size: 100px !important;
    }
    .name h4{
        font-size: 30px;
    }
    .sun-img-container h2{
font-size: 50px;
    }
}
@media (max-width: 1200px) {
    .name h1{
        font-size: 80px !important;
    }
    .name h4{
        font-size: 20px;
    }
    .sun-img-container h2{
font-size: 40px;
    }
    .sun-img-container img{
        width: 475px;
    }
}

@media (max-width: 992px) {
    .name h1{
        font-size: 60px !important;
    }
    .name h4{
        font-size: 20px;
    }
    .sun-img-container h2{
font-size: 30px;
    }
    .sun-img-container img{
        width: 400px;
    }
}

@media (max-width: 768px) {
    .name h1{
        font-size: 40px !important;
    }
    .name h4{
        font-size: 20px;
    }
    .sun-img-container h2{
font-size: 30px;
    }
    .sun-img-container img{
        display: none;
    }

    .section{
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}


</style>