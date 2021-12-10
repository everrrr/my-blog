<template>
  <div class="welcome">
    <div class="swiper-container" id="swiper_silder">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <welcome-first></welcome-first>
        </div>
        <div class="swiper-slide">
          <welcome-second></welcome-second>
        </div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import WelcomeFirst from '../../components/welcome/WelcomeFirst.vue';
import WelcomeSecond from '../../components/welcome/WelcomeSecond.vue'

export default {
  name: "Welcome",
  components: {
    Swiper,
    SwiperSlide,
    WelcomeFirst,
    WelcomeSecond
  },
  data() {
    return {};
  },
  mounted() {
    this.initSwiper()
  },
  methods:{
    initSwiper(){
      this.swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      mousewheel: true,
    });
    }
  }
};
</script>

<style lang="less" scoped>
.welcome{
  width: 100%;

}

.swiper-container {
      width: 100vw;
      height: 100vh;
      position: relative;



      .shadow_box {
        width: 100%;
        height: 85%;
        position: absolute;
        bottom: 0;
        background: linear-gradient(180deg, rgba(49, 49, 48, 0), rgba(22, 29, 39, .7));
        z-index: 2;
      }

      .shadow_box:hover+.swiper-wrapper .swiper-slide-active img {
        transform: scale(1.03);
        transition: all 0.7s;
      }


      .swiper-wrapper {
        width: 100%;
        height: 100%;
        z-index: 1;

        .swiper-slide {
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


          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
          }

          img:hover {
            transform: scale(1.03);
            transition: all 0.7s;
          }
        }
      }




      .swiper-pagination {
        width: 100%;

        .swiper-pagination-bullet {
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          font-size: 20px;
          opacity: 0.8;
          color: #009F95;
          background: rgba(0, 0, 0, 0);
        }

        .swiper-pagination-bullet:hover {
          opacity: 1;
          color: #009F95;
          font-size: 22px;
          background: rgba(255, 125, 205, 0.1);

        }

        .swiper-pagination-bullet-active {
          opacity: 0.8;
          color: #009F95;
          background: rgba(85, 170, 255, 0.15);
        }
      }
    }
</style>
