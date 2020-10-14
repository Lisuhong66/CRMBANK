<template>
  <Layout :style="{width: '100%',height:'100%'}">
    <Sider hide-trigger :style="{background: '#fff'}">
      <Menu
        :style="{height:'100%'}"
        active-name="personal-center"
        theme="light"
        width="auto"
        :open-names="['1']"
        @on-select="selectAction"
      >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>首页
          </template>
          <MenuItem name="personal-center">个人中心</MenuItem>
          <MenuItem name="add-user">新增用户</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>对公客户管理
          </template>
          <MenuItem name="query-user">查询客户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>营销活动管理
          </template>
          <MenuItem name="query-pro">产品列表</MenuItem>
          <MenuItem name="add-pro">新增产品</MenuItem>
          <MenuItem name="sub-pro">对公客户认购产品</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <AppContent />
  </Layout>
</template>

<script>
import AppContent from '../content/Content'
export default {
  data(){
    return {
       name:'skk'
    }
  },
  components:{
    AppContent
  },
  methods: {
    selectAction:function(name) {
      console.log(name);
      this.$center.$emit('add',name)
    }
  }
};
</script>

<style>
</style>