<template>
  <div id="homeindex">
    <div class="text">你好👋～ {{userInfo.uAccount }}</div>
    <div class="text">当前身份 {{userInfo.uIdenty }}</div>

    <div v-if="userInfo.uIdenty === '部门领导'">
      <Table
        width="700"
        height="492"
        :columns="columns1"
        :data="userList"
        style="margin-top:5px;margin-left:30px"
        @on-row-dblclick="doubelclick"
      ></Table>
    </div>
     <div v-else-if="userInfo.uIdenty === '客户经理'">
      <Table
        width="700"
        height="492"
        :columns="columns2"
        :data="cusList"
        style="margin-top:5px;margin-left:30px"
        @on-row-dblclick="doubelclick"
      ></Table>
    </div>
    <div v-else>
       <Table
        width="700"
        height="492"
        :columns="columns1"
        :data="alluser"
        style="margin-top:5px;margin-left:30px"
        @on-row-dblclick="doubelclick"
      ></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.$store.state["mine"].userInfo,
      columns1: [
        {
          title: "客户经理编号",
          key: "uStaffnum"
        },
        {
          title: "客户经理名称",
          key: "uName"
        },
        {
          title: "客户经理联系电话",
          key: "uTel"
        }
      ],
      columns2: [
        {
          title: "客户编号",
          key: "cID"
        },
        {
          title: "客户名称",
          key: "cCompany"
        },
        {
          title: "客户证件类型",
          key: "cDoctype"
        },
                {
          title: "客户证件号码",
          key: "cDocnum"
        }
      ],
      userList: [],
      cusList:[],
      alluser:[]
    };
  },
  mounted() {
    this.requestData();
    this.requestData2()
  },
  methods: {
    doubelclick() {},
    async requestData() {
      let result = await this.$store.dispatch("mine/queryUser");
      let { data } = result.data;
      this.alluser = data
      data.forEach(item => {
        if (item.uIdenty == "客户经理") {
          var obj = {};
          obj.uStaffnum = item.uStaffnum;
          obj.uName = item.uName;
          obj.uTel = item.uTel;
          this.userList.push(obj);
        }
      });
    },
     async requestData2() {
      let result = await this.$store.dispatch("custom/getcus",{uStaffnum:this.userInfo.uStaffnum});
      let { data } = result.data;
      data.forEach(item => {
          var obj = {};
          obj.cID = item.cID;
          obj.cCompany = item.cCompany;
          obj.cDoctype = item.cDoctype;
          obj.cDocnum = item.cDocnum;
          this.cusList.push(obj);
      });
    }
  }
};
</script>

<style scoped>
#homeindex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  font-size: 28px;
}
</style>