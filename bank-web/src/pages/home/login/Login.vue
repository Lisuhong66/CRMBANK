<template>
  <div id="login">
    <div class="container">
      <div class="logo">
        <img src="../../../assets/logo.svg" alt />
      </div>
      <div class="title">银行对公CRM系统</div>
      <div class="ipt">
        <div class="name-wrap">
          <input v-model="username" class="ipt-name" type="text" placeholder="请输入用户名称" />
          <Icon class="icon-person" size="30" color="#808695" type="ios-contact" />
        </div>
        <div class="name-wrap">
          <input v-model="password" class="ipt-name" type="password" placeholder="请输入密码" />
          <Icon class="icon-person" size="30" color="#808695" type="md-lock" />
        </div>
      </div>
      <div class="btn" @click="loginAction">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      islogin: this.$store.state["mine"].isLogin
    };
  },
  methods: {
    async loginAction() {
      let userInfo = {
        username: this.username,
        password: this.password
      };
      if (!this.username || !this.password) {
       this.$Message.error("账号或密码不能为空");
        return;
      }
      let result = await this.$store.dispatch("mine/requestLogin", userInfo);
      if(result.data.code==0){
         this.$router.push('/');
      }
      else{
        this.$Message.error(result.data.message)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url("../../../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 999;
}

.title {
  font-size: 40px;
  color: #46a3ff;
}
.container {
  width: 50%;
  height: 80%;
  padding: 30px 0;
  margin: 0 auto;
  //   background-color: #0ed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.ipt {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  align-items: center;
}

.ipt-name {
  display: inline-block;
  width: 360px;
  height: 50px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 18px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
}

input:focus {
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #9ecaed;
}
.name-wrap {
  position: relative;
}
.icon-person {
  position: absolute;
  left: 10px;
  top: 10px;
}
.ipt-name {
  padding-left: 50px;
}
.btn {
  background: #46a3ff;
  color: white;
  width: 50%;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border-radius: 4px;
  line-height: 50px;
  letter-spacing: 5px;
}
</style>