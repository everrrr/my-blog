<template>
  <div class="welcomeSecond">
    <div class="view">

        
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeSecond",
  data() {
    return {
      temp: 2,
    };
  },
};
</script>

<style lang="less" scoped>
.welcomeSecond {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/welcome/second-bg.jpg") no-repeat center
    center;
  background-size: cover;

  .view {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: linear-gradient(
      45deg,
      rgba(42, 27, 161, 0.5),
      rgba(29, 210, 177, 0.5) 100%
    );
  }
}
</style>
