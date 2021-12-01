<template>
    <div class="main">
    <!-- 顶部展板 -->
    <section class="view hm-gradient">
      <div id="top" class="top_board">
        <header>
          <nav class="nav_top">
            <el-row>
              <el-col class='top_left_box' :span="14" :offset="2">
                <div class="box title_left">Leftlist</div>
              </el-col>
              <el-col class='top_right_box' :offset="2" :span="6">
                <div class="box title-right" :class="{active: isActive1}" @click="homeClick"><i
                    class="iconfont bont">&#xe611;</i>首页</div>
                <div class="box title-right" :class="{active: isActive2}" @click="entryClick"><i
                    class="iconfont bont">&#xe619;</i>入口</div>
              </el-col>
            </el-row>
          </nav>
          <div class="box-motto">
            <div class="box_center">
              <div class="box_head">
                Leftlist
              </div>
              <div class="title_box">
                [反者道之动,弱者道之用]
              </div>
            </div>

          </div>

        </header>
      </div>
    </section>


    <!-- 底部展板 -->
    <!-- <div id="bottom" class="bottom_board">

    </div> -->
  </div>
</template>

<script>
export default {
  name: "WelcomeFirst",
  data() {
    return {
      isActive1: true,
      isActive2: false,
    };
  },

  methods: {
    homeClick() {
      this.isActive1 = true;
      this.$router.push("/welcome");
    },
    entryClick() {
      this.isActive2 = false;
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;

  .view {
    width: 100%;
    height: 100vh;
    background: url(../../assets/images/random.jpeg) no-repeat center center;
    background-size: cover;

    .top_board {
      width: 100%;
      height: 100%;

      background: linear-gradient(
        45deg,
        rgba(42, 27, 161, 0.7),
        rgba(29, 210, 177, 0.7) 100%
      );

      header {
        width: 100%;
        height: 100%;

        nav {
          width: 100%;
          position: absolute;
          top: 10px;

          .el-row {
            display: inline-block;
            width: 100%;

            .top_left_box {
              display: flex;

              color: #ffffff;
            }

            .top_right_box {
              //background-color: rosybrown;
              display: flex;
              justify-content: center;
              color: #ffffff;
            }

            .box {
              height: 50px;
              line-height: 50px;
              color: inherit;
              text-align: center;
              user-select: none;
              -moz-user-select: none;
              /*火狐*/
              -webkit-user-select: none;
              /*webkit浏览器*/
              -ms-user-select: none;
              /*IE10*/
              -khtml-user-select: none;
              /*早期浏览器*/
            }

            .title_left {
              font-family: "title-speed";
              font-size: 25px;
            }

            .bont {
              margin-right: 5px;
            }

            .title-right {
              width: 80px;
              margin: 0 15px;
              font-size: 15px;

              cursor: pointer;
              //font-family: "HanYiBaiQiTiJian";
            }

            .active {
              background-color: rgba(255, 255, 255, 0.1);
            }
          }
        }

        .box-motto {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;

          .box_center {
            width: 40%;
            margin-left: auto;
            margin-right: auto;
            font-family: HARRINGT;

            .box_head {
              font-size: 70px;
              font-family: inherit;
              color: #ffffff;
            }
            .title_box {
              color: #ffffff;
              font-size: 30px;
              font-family: inherit;
              padding-left: 20px;
            }
          }
        }
      }
    }
  }

  .bottom_board {
    width: 100%;
    height: 50px;
    background-color: powderblue;
  }
}
</style>
