<template>
  <div id="adduser">
    <template v-if="userInfo.uIdenty == '管理员'">
      <div class="ipt">
        <div class="name-wrap" style="margin-top:15px">
          <Icon type="md-alert" color="red" />
          <p>登录账号：</p>
          <input v-model="uAccount" class="ipt-name" type="text" placeholder="请输入用户名称" />
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>登录密码：</p>
          <input v-model="uPassword" class="ipt-name" type="password" placeholder="请输入密码" />
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>员工姓名：</p>
          <input v-model="uName" class="ipt-name" placeholder="员工姓名" />
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>员工性别：</p>
          <RadioGroup v-model="uGender">
            <Radio label="boy">
              <span>男</span>
            </Radio>
            <Radio label="girl">
              <span>女</span>
            </Radio>
          </RadioGroup>
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>手机号码：</p>
          <input v-model="uTel" class="ipt-name" placeholder="手机号码" />
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>员工号码：</p>
          <input v-model="uStaffnum" class="ipt-name" placeholder="员工号码" />
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>所属部门：</p>
          <input v-model="uGroup" class="ipt-name" placeholder="所属部门" />
        </div>
        <div class="name-wrap" style="margin-top:20px">
          <Icon type="md-alert" color="red" />
          <p>当前职务：</p>
          <Select v-model="uIdenty" size="large" style="width:330px">
            <Option v-for="item in jobList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
        <div class="btnsub" @click="sub">提交</div>
    </template>
    <template v-else>
      <div class="not">抱歉您无权限查看</div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.$store.state["mine"].userInfo,
      jobList: [
        {
          value: "部门领导",
          label: "部门领导"
        },
        {
          value: "客户经理",
          label: "客户经理"
        }
      ],
      uStaffnum: "",
      uAccount: "",
      uPassword: "",
      uGroup: "",
      uIdenty: "",
      uName: "",
      uGender: "boy",
      uTel: ""
    };
  },
  methods: {
    async sub() {
      if (
        !this.uStaffnum ||
        !this.uAccount ||
        !this.uPassword ||
        !this.uGroup ||
        !this.uIdenty ||
        !this.uName ||
        !this.uGender ||
        !this.uTel
      ) {
        console.log(9999);
        this.$Message.error("输入信息不能为空");
        return;
      }
      if (this.uTel.length != 11) {
        this.$Message.error("输入正确的11位手机号");
        return;
      }
      let userInfo = {
        uStaffnum: this.uStaffnum,
        uAccount: this.uAccount,
        uPassword: this.uPassword,
        uGroup: this.uGroup,
        uIdenty: this.uIdenty,
        uName: this.uName,
        uGender: this.uGender === "girl" ? "女" : "男",
        uTel: this.uTel
      };
      let result = await this.$store.dispatch("mine/addUser", userInfo);
      console.log(result.data);

      if (result.data.code == 0) {
        this.$Message.success(result.data.message);
        this.uStaffnum = "";
        this.uAccount = "";
        this.uPassword = "";
        this.uGroup = "";
        this.uIdenty = "";
        this.uName = "";
        this.uGender = "boy";
        this.uTel = "";
      } else {
        this.$Message.error(result.data.message);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#adduser {
  padding-left: 300px;
}
.ipt {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  align-items: left;
}

.ipt-name {
  display: inline-block;
  width: 330px;
  height: 40px;
  line-height: 1.5;
  padding: 4px 7px 0 10px;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
}
.icon-person {
  position: absolute;
  left: 10px;
  top: 10px;
}
.btn {
  width: 360px;
  margin-left: 80px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.btnsub {
  margin-top: 20px;
  margin-left: -300px;
  width: 100px;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  padding: 6px 15px 6px 15px;
  font-size: 14px;
  border-radius: 4px;
  outline: 0;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
}
.not {
  font-size: 38px;
  margin-left: -200px;
  margin-top: 200px;
}
</style>