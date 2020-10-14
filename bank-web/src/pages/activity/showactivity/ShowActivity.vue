<template>
  <div id="showactivity">
    <div class="searchbox" style="margin-top:30px">
      <div>
        <span>请选择产品类型：</span>
        <Select v-model="pTypes" style="width:150px;margin-right:100px">
          <Option v-for="item in typesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div>
        <span>产品ID：</span>
        <Input v-model="pID" placeholder="请输入产品ID" style="width: 200px" />
      </div>
      <div @click="comfirmAction" class="btn">确认</div>
    </div>
    <div class="content">
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">发布人员工号</p>
        <p>{{productInfo.uStaffnum}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">产品类别</p>
        <p>{{productInfo.pTypes}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">产品ID</p>
        <p>{{productInfo.pID}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">产品名称</p>
        <p>{{productInfo.pName}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">产品目的</p>
        <p>{{productInfo.pTarget}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">适用对象</p>
        <p>{{productInfo.pAppobj}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">额度期限</p>
        <p>{{productInfo.pLimitperiod}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">产品特色</p>
        <p>{{productInfo.pProCharact}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">币种</p>
        <p>{{productInfo.pCurrency}}</p>
      </Card>

      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">发布日期</p>
        <p>{{pReleasedate}}</p>
      </Card>
      <Card style="width:220px;margin-top:20px;margin-left:20px">
        <p slot="title">备注</p>
        <p>{{productInfo.pRemarksVarchar}}</p>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pID: "",
      pTypes: "",
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
      ],
      productInfo: {},
      pReleasedate:""
    };
  },
  methods: {
    renderTime(date) {
      var dateee = new Date(date).toJSON();
      var newDate = new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
      return newDate.split(" ")[0];
    },
    async comfirmAction() {
      if (!this.pID || !this.pTypes) {
        this.$Message.error("输入信息不能为空");
        return;
      }
      let selectInfo = {
        pID: this.pID,
        pTypes: this.pTypes
      };
      let result = await this.$store.dispatch("activity/selectAct", selectInfo);
      this.productInfo = result.data.data;
      this.pReleasedate  = this.renderTime(result.data.data.pReleasedate)
      console.log(result);
    }
  }
};
</script>

<style lang="scss" scoped>
.searchbox {
  // background-color: #0ed;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btn {
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
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>