<template>
  <div id="adduser">
    <template v-if="userInfo.uIdenty == '部门领导' ">
      <div class="ipt">
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>产品ID：</p>
          <input v-model="pID" class="ipt-name" type="text" placeholder="请输入产品ID" />
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>产品名称：</p>
          <input v-model="pName" class="ipt-name" type="text" placeholder="请输入产品名称" />
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>产品目的：</p>
          <input v-model="pTarget" class="ipt-name" type="text" placeholder="请输入产品目的" />
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>产品类型：</p>
          <Select v-model="pTypes" style="width:150px;margin-right:100px">
            <Option v-for="item in typesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>产品适用对象：</p>
          <input v-model="pAppobj" class="ipt-name" placeholder="请输入产品适用对象" />
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>额度期限：</p>
          <input v-model="pLimitperiod" class="ipt-name" placeholder="请输入额度期限" />
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>产品特色：</p>
          <input v-model="pProCharact" class="ipt-name" placeholder="请输入产品特色" />
        </div>
        <div class="name-wrap">
          <Icon type="md-alert" color="red" />
          <p>币种：</p>
          <input v-model="pCurrency" class="ipt-name" placeholder="请输入币种" />
        </div>
        <div class="name-wrap">
          <p>备注：</p>
          <input v-model="pRemarksVarchar" class="ipt-name" placeholder="请输入备注" />
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
      pID: "",
      uStaffnum: "",
      pTypes: "",
      pName: "",
      pTarget: "",
      pAppobj: "",
      pLimitperiod: "",
      pProCharact: "",
      pCurrency: "",
      pReleasedate: "",
      pRemarksVarchar: "",
      typesList: [
        {
          value: "小额化产品",
          label: "小额化产品"
        },
        {
          value: "周转类产品",
          label: "周转类产品"
        },
        {
          value: "固定资产类",
          label: "固定资产类"
        }
      ]
    };
  },
  methods: {
    async sub() {
      var timestamp = new Date();
      console.log(timestamp);
      if (
        !this.pID ||
        !this.pTypes ||
        !this.pName ||
        !this.pTarget ||
        !this.pAppobj ||
        !this.pLimitperiod ||
        !this.pProCharact ||
        !this.pCurrency ||
        !this.pRemarksVarchar
      ) {
        console.log(9999);
        this.$Message.error("输入信息不能为空");
        return;
      }
      let proInfo = {
        pID: this.pID,
        pTypes: this.pTypes,
        pName: this.pName,
        pTarget: this.pTarget,
        pAppobj: this.pAppobj,
        pLimitperiod: this.pLimitperiod,
        pCurrency: this.pCurrency,
        pReleasedate: this.formatDate(timestamp),
        pRemarksVarchar: this.pCurrency,
        pProCharact: this.pProCharact,
        uStaffnum: this.userInfo.uStaffnum
      };
      let result = await this.$store.dispatch("activity/addPro", proInfo);
      if (result.data.code == 0) {
        this.$Message.success(result.data.message);
        this.pID = "";
        this.uStaffnum = "";
        this.pTypes = "";
        this.pName = "";
        this.pTarget = "";
        this.pAppobj = "";
        this.pLimitperiod = "";
        this.pProCharact = "";
        this.pCurrency = "";
        this.pReleasedate = "";
        this.pRemarksVarchar = "";
      } else {
        this.$Message.error(result.data.message);
      }
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
#adduser {
  //   padding-left: 300px;
  width: 100%;
  height: 100%;
}
.ipt {
  //   display: flex;
  //   flex-direction: row;
  width: 100%;
  height: 80%;
  padding: 0 100px 50px 100px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  //   justify-content:space-around;
  //   align-content:flex-start;
  //   align-items: center;
}

.ipt-name {
  display: inline-block;
  width: 200px;
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
  margin-left: 380px;
  //   margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

.btnsub2 {
  width: 100px;
  color: #2d8cf0;
  background-color: #eee;
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
  margin-left: -100px;
  margin-top: 200px;
}
</style>