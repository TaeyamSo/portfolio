<template>
<nav>
<!-- row -->
<div class="row-nav">    
<div class="logo">
    Tayam Soubuh
</div>
<ul class="info">
    <!-- <li>Hire Me </li> -->
    <!-- <li class="tog-btn">
        <span></span>
        <span></span>
    </li> -->
</ul>
</div>

<!--sidenav -->
<div class="side-nav">
    <ul class="navigation">
        <li><NuxtLink class="a" to="#home"><span class="line active"></span> </NuxtLink></li>
        <li><NuxtLink class="a" to="#about"><span class="line"></span></NuxtLink></li>
        <li><NuxtLink class="a" to="#skills"><span class="line"></span></NuxtLink></li>
        <li><NuxtLink class="a" to="#study"><span class="line"></span></NuxtLink></li>
        <li><NuxtLink class="a" to="#projects"><span class="line"></span></NuxtLink></li>

    </ul>
    
</div>
</nav>
</template>
<script setup>
onMounted(() => {
  document.addEventListener("click", (e) => {

    // console.log(e.target.matches(".smallerNav .toggle-icon"))
    // if(e.target.matches(".nav-section-small *") ==  false && e.target.matches(".smallerNav .toggle-icon") == false) {
    //   const navEle = document.querySelector(".nav-section-small");
    //   navEle.classList.remove("tog")
    // }
    if(e.target.matches(".navigation .line") == true){
      const navEle2 = document.querySelectorAll(".navigation .line");
      navEle2.forEach(el => el.classList.remove("active"))
      e.target.classList.toggle("active")
    }
    if(e.target.matches(".t-h4 h4 ") == true){
        const navEle = document.querySelectorAll(".t-h4 h4");
      navEle.forEach(el => el.classList.remove("active"))
      e.target.classList.toggle("active")
    }

//   const isDropdownButton = e.target.matches("[data-dropdown-button]");
//     if (!isDropdownButton && e.target.closest("[data-dropdown]") != null){
//       return ;
//     }
    // let currentDropdown;
    // if (isDropdownButton) {

    //   currentDropdown = e.target.closest("[data-dropdown]");
    //   currentDropdown.classList.toggle("active");
      
    // }

    // document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    //   if (dropdown === currentDropdown) return;
    //   dropdown.classList.remove("active");
    // });
  });
});

</script>
<style scoped>

.row-nav{
    width: 100%;
    padding: 40px 40px 0 40px;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.info{
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 20px;
    font-weight: 600;



}
.logo{
    font-size: 22px;
    font-weight: 600;

}

.tog-btn{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
}
.tog-btn span{
    display: block;
    height: 3px;
    width: 40px;
    border-radius: 50px;
    background: black;
}
/*side bar */
.side-nav{
    height:100vh;
    width: 100px;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.navigation{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 55px;

}
.line{
    display: block;
    height: 8px;
    width: 30px;
    background: black;
    border-radius: 50px;
    transition: .3s;
}

.line.active{
    display: block;
    height: 8px;
    width: 50px;
    transition: .3s;

}
.a{
    width: fit-content;
    display: block;
}

@media (max-width: 768px) {
    .side-nav{
        display: none;
    }
    .logo{
        font-size: 14px;
    }
}
</style>