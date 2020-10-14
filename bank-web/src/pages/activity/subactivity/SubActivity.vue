<template>
  <div id="adduser">
    <div class="ipt">
      <div class="name-wrap">
        <Icon type="md-alert" color="red" />
        <p>需要认购的客户ID：</p>
        <input v-model="cID" class="ipt-name" type="text" placeholder="请输入客户ID" />
        <div v-if="cIDflag">
          <Icon type="md-checkmark-circle-outline" color="green" />
          <span>{{cCompany}}</span>
        </div>
        <div v-else>
          <Icon type="ios-close-circle-outline" color="#f93d3d" />
        </div>
        <div style="margin-left:20px" @click="confirmCID" class="btnsub">确认</div>
      </div>
      <div class="name-wrap">
        <Icon type="md-alert" color="red" />
        <p>产品ID：</p>
        <input v-model="pID" class="ipt-name" type="text" placeholder="请输入产品ID" />
        <div v-if="pIDflag">
          <Icon type="md-checkmark-circle-outline" color="green" />
          <span>{{pName}}</span>
        </div>
        <div v-else>
          <Icon type="ios-close-circle-outline" color="#f93d3d" />
        </div>
        <div style="margin-left:20px" @click="confirmPID" class="btnsub">确认</div>
      </div>
      <!-- 去除交易日期 -->
      <!-- <div class="name-wrap">
        <Icon type="md-alert" color="red" />
        <p>交易日期：</p>
        <DatePicker
          @on-change="hTranone"
          type="date"
          placeholder="Select date"
          style="width: 130px"
        ></DatePicker>
        <TimePicker
          @on-change="hTrantwo"
          type="time"
          placeholder="Select time"
          style="width: 130px;margin-left:20px"
        ></TimePicker>
      </div>-->
      <div class="name-wrap">
        <Icon type="md-alert" color="red" />
        <p>起息日：</p>
        <DatePicker
          @on-change="hStartone"
          type="date"
          placeholder="Select date"
          style="width: 130px"
        ></DatePicker>
        <!-- <TimePicker
          @on-change="hStarttwo"
          type="time"
          placeholder="Select time"
          style="width: 130px;margin-left:20px"
        ></TimePicker>-->
      </div>
      <div class="name-wrap">
        <Icon type="md-alert" color="red" />
        <p>到期日：</p>
        <DatePicker @on-change="hEndone" type="date" placeholder="Select date" style="width: 130px"></DatePicker>
        <!-- <TimePicker
          @on-change="hEndtwo"
          type="time"
          placeholder="Select time"
          style="width: 130px;margin-left:20px"
        ></TimePicker>-->
      </div>
      <div class="name-wrap">
        <Icon type="md-alert" color="red" />
        <p>认购金额：</p>
        <InputNumber style="width: 150px" v-model="hSubamount"></InputNumber>
      </div>
    </div>
    <div class="btnsub" @click="sub">提交</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.$store.state["mine"].userInfo,
      cID: "",
      pID: "",
      hTransdate: "",
      hStartdate: "",
      hEnddate: "",
      hSubamount: null,
      cIDflag: false,
      pIDflag: false,
      canFlag: true,
      // hTrantimeone: "",
      // hTrantimetwo: "",
      hStarttimeone: "",
      // hStarttimetwo: "",
      hEndtimeone: "",
      // hEndtimetwo: "",
      cCompany: "",
      pName: "",
      cusInfo: ""
    };
  },
  methods: {
    formatDate(now) {
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var date = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      month = month < 10 ? "0" + month : month;
      date = date < 10 ? "0" + date : date;
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    },
    // hTranone(val) {
    //   console.log(val);
    //   this.hTrantimeone = val;
    // },
    // hTrantwo(val) {
    //   this.hTrantimetwo = val;
    //   console.log(val);
    // },
    hStartone(val) {
      this.hStarttimeone = val;
    },
    // hStarttwo(val) {
    //   this.hStarttimetwo = val;
    // },
    hEndone(val) {
      this.hEndtimeone = val;
    },
    // hEndtwo(val) {
    //   this.hEndtimetwo = val;
    // },
    async confirmCID() {
      if (!this.cID) {
        this.$Message.error("请输入必填客户ID");
        return;
      }
      let result = await this.$store.dispatch("custom/requestDatabyID", {
        cID: this.cID
      });

      if (result) {
        this.cusInfo = result[0];
        this.cCompany = this.cusInfo.cCompany;
        this.cIDflag = true;
      }
      console.log(result);
    },
    async confirmPID() {
      if (!this.pID) {
        this.$Message.error("请输入必填产品ID");
        return;
      }
      let result = await this.$store.dispatch("activity/selectAct", {
        pID: this.pID
      });
      this.pName = result.data.data.pName;
      this.pIDflag = true;
    },
    async sub() {
      var timestamp = new Date();
      if (
        !this.cID ||
        !this.pID ||
        // !this.hTrantimeone ||
        // !this.hTrantimetwo ||
        !this.hStarttimeone ||
        // !this.hStarttimetwo ||
        !this.hEndtimeone ||
        // !this.hEndtimetwo ||
        !this.hSubamount
      ) {
        this.$Message.error("输入信息不能为空");
        return;
      }
      if (this.cIDflag && this.pIDflag) {
        if (this.userInfo.uIdenty !== "部门领导") {
          if (this.userInfo.uStaffnum !== this.cusInfo.uStaffnum) {
            this.$Message.error("对不起，此客户不再您管理的范围下，无权限修改");
            return;
          }

          // let subInfo = {
          //   cID: this.cID,
          //   pID: this.pID,
          //   hTransdate: this.formatDate(timestamp),
          //   hStartdate: this.hStarttimeone + " " + "00:00:00",
          //   hEnddate: this.hEndtimeone + " " + "00:00:00",
          //   hSubamount: this.hSubamount
          // };
          // let result = await this.$store.dispatch(
          //   "activity/subActivity",
          //   subInfo
          // );
          // console.log(result);
          // console.log(subInfo);
          // if (result.data.code == 0) {
          //   this.$Message.success(result.data.message);
          // } else {
          //   this.$Message.error(result.data.message);
          // }
        }
        let subInfo = {
          cID: this.cID,
          pID: this.pID,
          hTransdate: this.formatDate(timestamp),
          hStartdate: this.hStarttimeone + " " + "00:00:00",
          hEnddate: this.hEndtimeone + " " + "00:00:00",
          hSubamount: this.hSubamount
        };
        let result = await this.$store.dispatch(
          "activity/subActivity",
          subInfo
        );
        console.log(result);
        console.log(subInfo);
        if (result.data.code == 0) {
          this.$Message.success(result.data.message);
        } else {
          this.$Message.error(result.data.message);
        }
      } else {
        this.$Message.error("该客户或产品不存在");
      }
    },
    reset() {
      (this.cID = ""),
        (this.pID = ""),
        (this.hTransdate = ""),
        (this.hStartdate = ""),
        (this.hEnddate = ""),
        (this.hSubamount = null),
        (this.cIDflag = false),
        (this.pIDflag = false),
        (this.canFlag = true),
        // (this.hTrantimeone = ""),
        // (this.hTrantimetwo = ""),
        (this.hStarttimeone = ""),
        // (this.hStarttimetwo = ""),
        (this.hEndtimeone = ""),
        // (this.hEndtimetwo = ""),
        (this.cCompany = ""),
        (this.pName = "");
    },
    computedTime(val1, val2) {
      let arrNew = new Array();
      arrNew.push(val1);
      arrNew.push(val2);
      let strNew = arrNew.join(" ");
      return strNew;
    }
  }
};
</script>

<style lang="scss" scoped>
#adduser {
  width: 100%;
  height: 100%;
}
.ipt {
  width: 100%;
  height: 80%;
  padding: 0 0 50px 350px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
}

.ipt-name {
  display: inline-block;
  width: 200px;
  height: 32px;
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

.btnsub {
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
</style>