<template>
  <div class="Home">
    <el-container class="container-main-box">
      <el-header height="50px"> </el-header>
      <el-container class="container-second-box">
        <el-aside width="260px">
          <HomeAside></HomeAside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeAside from "../../components/home/HomeAside.vue";
export default {
  name: "Home",

  components: {
    HomeAside,
  },

  data() {
    return {};
  },
};
</script>


<style lang="less" scoped>
@asider-width: 260px;
.Home {
  height: 100vh;
  width: 100vw;

  .container-main-box {
    height: 100%;
    width: 100%;

    .el-header {
      width: 100%;
      background: #eee;
    }

    .container-second-box {
      .el-aside {
        background: cornsilk;
      }

      .el-main {
      }
    }
  }
}
</style>