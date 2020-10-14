
<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{width: '100%',height:'100%'}">
        <AppHeader />
        <Layout :style="{padding: '0 50px'}">
          <AppBread />
          <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
            <AppSider />
          </Content>
        </Layout>
        <Footer class="layout-footer-center">2020 &copy;</Footer>
      </Layout>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from "./layout/header/Header";
import AppBread from "./layout/breadcrumb/Breadcrumb";
import AppSider from "./layout/sider/Sider";

export default {
  components: {
    AppHeader,
    AppBread,
    AppSider
  },
  data() {
    return {
      islogin: localStorage.getItem('isLogin')
    };
  },
  created() {
    //需要检查登录
    this.$store.dispatch("mine/requestCheckLogin");
    if (localStorage.getItem('isLogin') == "false") {
      this.$router.push('/login');
    }
  }
};
</script>

<style>
#app {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.layout-footer-center {
  text-align: center;
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #aab2bd;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #aab2bd;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #aab2bd;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #aab2bd;
}
</style>
