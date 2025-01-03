<template>
  <div class="section" id="projects">
    <div class="text">
      <div class="t-h1" data-aos="fade-right" data-aos-duration="900">
        <h1>PROJECTS</h1>
      </div>
      <div data-aos="fade-right" data-aos-duration="1100" class="line-con">
        <span class="line"></span>
        <span class="line2"></span>
      </div>
      <br />

      <div data-aos="fade-right" data-aos-duration="1100" class="t-h4">
        <h4 @click="changeImg(1)" class="active" >-Badar Furniture E-Commerce Store</h4>
        <br />
        <h4 @click="changeImg(2)">-Hazo Enteriors</h4>
        <br />
        <h4 @click="changeImg(3)">-AL Alaktabout</h4>
        <!-- <br /> -->
        <!-- <h4 @click="changeImg(3)">-Tayam Bakery E-Commerce Store</h4> -->
        <br />
        <h4 @click="changeImg(4)">-Elzero Website</h4>
        <br />
        <h4 @click="changeImg(5)">-Al Ain-AlThahabia Website</h4>
        <br />
        <h4 @click="changeImg(6)">-Kasper Website</h4>
        <br />
        <h4 @click="changeImg(7)">-Leon Website</h4>
      </div>
    </div>

    <div class="picture" data-aos="fade-left" data-aos-duration="900">
      <div class="img-container">
        <img :src="imgname" alt="" />
      </div>
      <a target="#" :href="weblink" class="visit-btn">Visit Website</a>
    </div>
    
    
  </div>
</template>
<script setup>
const imgname = ref('/Baddar.png');
const weblink = ref('https://baddarfurniture.com/')
const changeImg = (num) =>{
    if (num == 1){
        imgname.value = '/Baddar.png'
        weblink.value = 'https://baddarfurniture.com/'
    }else if (num == 2){
        imgname.value = '/hazoo.png'
        weblink.value = 'https://hazoco.net'
    }else if (num == 3){
        imgname.value = '/aktobot.png'
        weblink.value = 'https://alaktabout.net/'
    }else if (num == 4){
        imgname.value = '/zero.png'
        weblink.value = 'https://taeyamso.github.io/Elzero-Website-/'
    }else if (num == 5){
        imgname.value = '/alain.png'
        weblink.value = 'https://aatb-rak.net/'
    }else if (num == 6){
      weblink.value = 'https://taeyamso.github.io/kasper-website/'
        imgname.value = '/kasper.png'
    }else if (num == 7){
      weblink.value='https://taeyamso.github.io/leon-website/'
        imgname.value = '/leon.png'
    }
}
</script>
<style scoped>
.section {
  margin: 0 0 0 180px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.text {
  width: 45%;
  overflow: hidden;
}
h1 {
  width: fit-content;
  font-size: 100px;
  transition: 0.3s;

  /*transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.1s;
    animation-fill-mode: both;
    transition: 0.3s;*/
}

.t-h1 {
  opacity: 1 !important;
  transform: translateX(-550px);
}
h4 {
    width: fit-content;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;
    transition: 0.3s;
    /*  transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.4s;
    animation-fill-mode: both;
    transition: 0.3s;*/
}
.t-h4 {
  opacity: 1 !important;
  transform: translateX(-550px);
}
.line-con {
  width: fit-content;
  opacity: 1 !important;
  transform: translateX(-550px);
}
.line {
  position: relative;
  display: block;
  width: 100px;
  height: 4px;
  border-radius: 50px;
  background: black;
  margin-bottom: 20px;

  /*  transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.2s;
    animation-fill-mode: both;
    transition: 0.3s;*/
}
.line2 {
  position: relative;

  display: block;
  width: 100px;
  height: 4px;
  border-radius: 50px;
  background: black;
  margin-bottom: 20px;
  margin-left: 55px;

  /* transform: translateX(-550px);
   animation: fade-in;
    animation-duration: 1.3s;
    animation-fill-mode: both;
    transition: 0.3s;*/
}

h1:hover,
.line:hover,
.line2:hover,
h4:hover {
  color: white;
  transition: 0.3s;
}
.line-con:hover .line2,
.line-con:hover .line {
  background: white;
  transition: 0.3s;
}
.picture {
  width: 50%;
  margin-right: 40px;
  padding: 20px;
  background: black;
  position: relative;
}

.picture .img-container:hover img {
  transform: scale(1.1);
  transition: 0.3s;
}
.picture .img-container {
  overflow: hidden;
  height: 100%;
}
.picture img {
    width: 100%;
  
  transition: 0.3s;
}
.badge {
  margin-top: 40px;
  width: 100%;
}
.badge .img-container {
  width: 140px;
}
.badge img {
  width: 100%;
}

.visit-btn{
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 10px;
    width: 200px;
    border: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 13px;

}
.visit-btn::before{
    content: '';
    background: black;
    display: block;
    height: 50px;
    width: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -44px;
}
h4.active{
  color: white;
}



@media (max-width: 1400px) {
  h1{
    font-size: 80px;
  }
  h4{
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  h1{
    font-size: 60px;
  }
  h4{
    font-size: 16px;
  }
  .picture{
    margin-right: 80px;
  }
}

@media (max-width: 992px) {
  h1{
    font-size: 40px;
  }
  h4{
    font-size: 14px;
    line-height: 25px;

  }
  .picture{
    margin-right: 60px;
  }
}

@media (max-width: 768px) {
  .section{
    margin: 0;
    display: flex;
    flex-direction: column;
    gap:0px;
    justify-content: center;
    align-items: center;
  }
  .text{
    width: 80%;
    max-height: 70vh;
  }
  .img-container{
    display: none;
    
  }
  .picture{
  padding: 0;
  }
  
  .visit-btn::before{
  display: none;
  }
}
</style>
