<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <span class="mine-logo">logo</span>
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>首页
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>对公客户管理
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>营销活动管理
        </MenuItem>

        <MenuItem name="4" to="/logout">
          <Icon type="ios-log-out"></Icon>
          <span style="color:rgb(70,140,233)">{{userInfo.uAccount}}</span>
          退出
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  // name:'AppHeader'
  data() {
    return {
      userInfo: this.$store.state["mine"].userInfo
    };
  },
  computed: {
    hahaha() {
      return this.$store.state["mine"].userInfo;
    }
  },
  watch:{
    hahaha:function() {
    //插入需要在仓库数据变化时做的逻辑处理
    this.userInfo = this.$store.state["mine"].userInfo
  }
  } 
};
</script>

<style lang="scss" scoped>
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: 20px;
}
.mine-logo {
  color: #d7dde4;
  position: absolute;
  top: -13px;
  left: 20px;
  font-size: 30px;
}
</style>