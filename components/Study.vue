<template>
    <div class="section" id="study">
      <div class="text">
        <div class="t-h1" data-aos="fade-right" data-aos-duration="900" >
          <h1>
          MY STUDY
        </h1>
      </div>
        <div data-aos="fade-right" data-aos-duration="1100" class="line-con">
          <span class="line"></span>
          <span class="line2"></span>
        </div>
        <br>

        <div data-aos="fade-right" data-aos-duration="1100" class="t-h4">
        <h4 >
          -IT Student Year - 3 / Syrian Virtual University 
        </h4>
        <br>
        <h4 >
        -META Front-End Professional Certifcate 
        </h4>
      </div>
      <div class="badge" data-aos="fade-right" data-aos-duration="1000">
        <div class="img-container">
          <img src="/badge.png" alt="" />
        </div>
      </div>

      </div>
  
      <div class="picture" data-aos="fade-left" data-aos-duration="900">
        <div class="img-container">
          <img src="/certi.png" alt="" />
        </div>
      </div>
    </div>
  </template>
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
    transition: .3s;
    
    /*transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.1s;
    animation-fill-mode: both;
    transition: 0.3s;*/
  }
  
  .t-h1{
    opacity: 1 !important;
    transform: translateX(-550px);
  }
  h4 {
    width: fit-content;
    font-size: 20px;
    line-height: 35px;
   
    transition: .3s;
  
  /*  transform: translateX(-550px);
    animation: fade-in;
    animation-duration: 1.4s;
    animation-fill-mode: both;
    transition: 0.3s;*/
  }
  .t-h4{
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
  
  
  h1:hover, .line:hover, .line2:hover,h4:hover{
    color: white;
    transition: .3s;
  }
  .line-con:hover .line2,.line-con:hover .line{
    background: white;
    transition: .3s;
  }
  .picture{
    width: 45%;
    margin-right:40px;
    padding: 20px;
    background: black;
  }
  .picture:hover img{
    transform: scale(1.1);
    transition: .3s;
  }
  .picture .img-container{
    overflow: hidden;
  }
  .picture img{
    width: 100%;
    transition: .3s;

  }
  .badge{
    margin-top: 40px;
    width: 100%;
  }
  .badge .img-container{
    width: 140px;
  }
  .badge img{
    width: 100%;
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
      margin-right: 10px;
    }
  }
  
  @media (max-width: 768px) {
    .section{
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text{
      width: 80%;
      max-height: 70vh;
    }
    .picture{
  display: none;  }
  }
  </style>
  