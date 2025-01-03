<template>
  <div class="section" id="skills">
    <div class="text">
      <div class="t-h1" data-aos="fade-right" data-aos-duration="900">
        <h1>MY SKILLS</h1>
      </div>
      <div data-aos="fade-right" data-aos-duration="1100" class="line-con">
        <span class="line"></span>
        <span class="line2"></span>
      </div>

      <div class="tech">
        <div class="tech-box" data-aos="fade-right" data-aos-duration="1100">
          <div class="img-container">
            <img src="/csslogo.png" alt="" />
          </div>
        </div>
        <div class="tech-box" data-aos="fade-right" data-aos-duration="1100">
          <div class="img-container">
            <img src="/sass.png" alt="" />
          </div>
        </div>
        <div class="tech-box" data-aos="fade-right" data-aos-duration="1100">
          <div class="img-container">
            <img src="/javascriptlogo.png" alt="" />
          </div>
        </div>
        <div class="tech-box" data-aos="fade-right" data-aos-duration="1100">
          <div class="img-container">
            <img src="/vuelogo.png" alt="" />
          </div>
        </div>
        <div class="tech-box" data-aos="fade-right" data-aos-duration="1100">
          <div class="img-container">
            <img src="/nuxtlogo.png" alt="" />
          </div>
        </div>
        <div class="tech-box" data-aos="fade-right" data-aos-duration="1100">
          <div class="img-container">
            <img src="/reactlogo.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="soft-skills" >
      <div class="soft-skills-container" data-aos="fade-left" data-aos-duration="1100">
        <h4>Soft Skills:</h4>
        <ul>
          <li>Time Management</li>
          <li>Problem Solving</li>
          <li>Comunication</li>
          <li>Team Work </li>
          <li>Quick Learner</li>
          <li>Adaptability</li>
          <li>Leadership Skills</li>
          <li>Strategic Thinking</li>
        </ul>
      </div>
    </div>
    <!-- <div class="">
        <div class="img-container certifcate">
          <img src="/certi.png" alt="" />
        </div>
      </div> -->
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
  line-height: 35px;

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

.tech {
  width: 100%;
  margin-top: 40px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap
}
.tech-box {
  width: fit-content;
  background: black;
  padding: 20px;
  border: 4px solid white;

}
.tech-box:hover img{
    transform:scale(1.1);
    transition: 0.3s;
}
.tech-box:nth-child(1):hover{
    border-color: cornflowerblue;
    transition: .3s;
}
.tech-box:nth-child(2):hover{
    border-color: pink;
    transition: .3s;
}.tech-box:nth-child(3):hover{
    border-color: yellow;
    transition: .3s;
}.tech-box:nth-child(4):hover{
    border-color: lightgreen;
    transition: .3s;
}.tech-box:nth-child(5):hover{
    border-color: lightgreen;
    transition: .3s;
}.tech-box:nth-child(6):hover{
    border-color: lightblue;
    transition: .3s;
}

.img-container {
  width: 80px;
  height: 80px;
}
.certifcate{
  width: 600px;
  height: auto;

}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.soft-skills{
  width: 45%;
  height: fit-content;
display: flex;


}
.soft-skills-container{
  height: 100%;
  width: 450px;
  border: 4px solid white;
  border: none;
  background: black;
  color: white;
  padding: 30px 0px 30px 30px;

}
.soft-skills-container h4{
  margin-bottom: 10px;
}
ul{
  list-style: circle;
}
ul li{
  margin-left: 17px;
  padding: 4px 0 ;
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
  .img-container{
    width: 40px;
    height: 40px;
  }
  
  .soft-skills-container{
    width: 350px;

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
  .section{
   /* width: 100%;*/
  }
   
  .soft-skills{
    display: none;  }
    }

@media (max-width: 768px) {
  .section{
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
}
</style>
