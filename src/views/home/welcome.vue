<template>
  <div class="swiper-container welcome mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "Welcome",
  data() {
    return {};
  },
  mounted() {
    Swiper.use([Navigation, Pagination])
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      autoplay: true,
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
