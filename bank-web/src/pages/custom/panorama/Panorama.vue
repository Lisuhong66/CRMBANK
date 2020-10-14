<template>
  <div id="pana">
    <div @click="backAction">
      <Icon type="md-arrow-round-back" />返回
    </div>
    {{clickCID}}
    <Tabs type="card">
      <TabPane label="基本信息">
        <Collapse v-model="value2">
          <Panel name="1">
            基本信息
            <div class="content" slot="content">
              <div style="margin-left:20px">
                <span>对公客户编号:</span>
                <Input disabled :value="allInfo[0].cID " style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>对公客户名称:</span>
                <Input disabled :value="allInfo[0].cCompany" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>注册地址:</span>
                <Input disabled :value="allInfo[0].cRegadd" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>证件类型:</span>
                <Input disabled :value="allInfo[0].cDoctype" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>证件号码:</span>
                <Input disabled :value="allInfo[0].cDocnum" style="width:auto" />
              </div>

              <div style="margin-left:20px">
                <span>所属行业:</span>
                <Input disabled :value="allInfo[0].cIndustry" style="width:auto" />
              </div>

              <div style="margin-left:20px">
                <span>企业规模:</span>
                <Input disabled :value="allInfo[0].cScale" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>是否核心客户:</span>
                <Input disabled :value="allInfo[0].cCore" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>客户状态:</span>
                <Input disabled :value="allInfo[0].cState" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>所属客户经理:</span>
                <Input disabled :value="allInfo[0].uStaffnum" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>法人性质:</span>
                <Input disabled :value="allInfo[0].cLegalnature" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>是否上市:</span>
                <Input disabled :value="allInfo[0].cMarket" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>所有制形式:</span>
                <Input disabled :value="allInfo[0].cOwnership" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>注册资本:</span>
                <Input disabled :value="allInfo[0].cRegcapital" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>法人代表:</span>
                <Input disabled :value="allInfo[0].cLegalperson" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>电话:</span>
                <Input :disabled="flag" v-model="upTel" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>邮编:</span>
                <Input :disabled="flag" v-model="upPost" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>单位地址:</span>
                <Input :disabled="flag" v-model="upAdd" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>EMAIL:</span>
                <Input :disabled="flag" v-model="upEmail" style="width:auto" />
              </div>
              <div style="margin-left:20px">
                <span>公司主页:</span>
                <Input :disabled="flag" v-model="upHome" style="width:auto" />
              </div>
              <div style="margin-left:20px" @click="updateAction" class="btn">点击修改</div>
              <div
                style="margin-left:20px"
                @click="comfirmAction"
                v-if="showConfirm"
                class="btn"
              >确认上传</div>
            </div>
          </Panel>
          <Panel name="2">
            股东构成
            <div slot="content">
              <div
                style="border-bottom:1px solid #eee"
                v-for="item in allInfo[4]"
                v-bind:key="item.sID"
              >
                <div class="self">
                  <div class="self_one">
                    <span>股东编号:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.sID"
                      :placeholder="allInfo[0].cRegadd"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>股东名称:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.sName"
                      :placeholder="allInfo[0].cRegadd"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>持股数量:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.sAmout"
                      :placeholder="allInfo[0].cRegadd"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>持股比例:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.sRatio"
                      :placeholder="allInfo[0].cRegadd"
                      style="width:100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel name="3">
            高管结构
            <div slot="content">
              <div
                style="border-bottom:1px solid #eee"
                v-for="item in allInfo[5]"
                v-bind:key="item.mID"
              >
                <div class="self">
                  <div class="self_one">
                    <span>高管编号:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.mID"
                      :placeholder="allInfo[0].cRegadd"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>高管名称:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.mName"
                      :placeholder="allInfo[0].cRegadd"
                      style="width:100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </TabPane>

      <TabPane label="业务合作信息">
        <Collapse v-model="value2">
          <Panel name="1">
            账户信息- 存款信息
            <div slot="content">
              <div v-for="item in depoInfo" v-bind:key="item.dAccount">
                <div class="self">
                  <div class="self_one">
                    <span>存款账号:</span>
                    <Input :disabled="flag2" :value="item.dAccount" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>存款类型:</span>
                    <Input :disabled="flag2" :value="item.dTypes" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>存款状态:</span>
                    <Input :disabled="flag2" :value="item.dAccnstate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>开户机构:</span>
                    <Input :disabled="flag2" :value="item.dOpenorg" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>开户日期:</span>
                    <Input :disabled="flag2" :value="item.dOpendate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>币种:</span>
                    <Input :disabled="flag2" :value="item.dCurrency" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>利率:</span>
                    <Input :disabled="flag2" :value="item.dRate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>帐户余额:</span>
                    <Input :disabled="flag2" :value="item.dBalance" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>到期日期:</span>
                    <Input :disabled="flag2" :value="item.dEnddate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>续存存期:</span>
                    <Input :disabled="flag2" :value="item.dPeriod" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>续存标志:</span>
                    <Input :disabled="flag2" :value="item.dFlag" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>开户金额:</span>
                    <Input :disabled="flag2" :value="item.dOpenaccount" style="width:100px" />
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel name="2">
            账户信息- 贷款信息
            <div slot="content">
              <div v-for="item in loanInfo" v-bind:key="item.eID">
                <div class="self">
                  <div class="self_one">
                    <span>贷款账号:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eID"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>贷款方式:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eLoanway"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>还款方式:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eRepayway"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>开户机构:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eOpenorg"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>合同开始日期:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eConstart"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>合同结束日期:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eConend"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>币种:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eCurrency"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>汇率:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eRate"
                      style="width:100px"
                    />
                  </div>
                  <div class="self_one">
                    <span>余额:</span>
                    <Input
                      :disabled="flag2"
                      :value="item.eBalance"
                      style="width:100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel name="3">
            认购的产品信息
            <div slot="content">
              <div
                style="border-bottom:1px solid #eee"
                v-for="(item,index) in cusPro"
                v-bind:key="index"
              >
                <div class="self">
                  <div class="self_one">
                    <span>产品编号:</span>
                    <Input :disabled="flag2" :value="item.pID" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>交易日期:</span>
                    <Input :disabled="flag2" :value="item.hTransdate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>起息日:</span>
                    <Input :disabled="flag2" :value="item.hStartdate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>到期日:</span>
                    <Input :disabled="flag2" :value="item.hEnddate" style="width:100px" />
                  </div>
                  <div class="self_one">
                    <span>认购金额:</span>
                    <Input :disabled="flag2" :value="item.hSubamount" style="width:100px" />
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </TabPane>
      <TabPane label="合作协议">
        <div class="self_one">
          <span>合同编号:</span>
          <Input :disabled="flag2" :value="allInfo[0].cContractID" style="width:200px" />
        </div>
        <div class="self_one">
          <span>合同名称:</span>
          <Input :disabled="flag2" :value="allInfo[0].cConname" style="width:200px" />
        </div>
        <div class="self_one">
          <span>合同签约日期:</span>
          <Input :disabled="flag2" :value="contraSign" style="width:200px" />
        </div>
        <div class="self_one">
          <span>合同有效期:</span>
          <Input :disabled="flag2" :value="contraEnd" style="width:200px" />
        </div>
        <div class="self_one">
          <span>合同详情:</span>
          <Input :disabled="flag2" :value="allInfo[0].cDetail" style="width:200px" />
        </div>
      </TabPane>
      <TabPane label="联系人信息">
        <div
          style="border-bottom:1px solid #eee"
          v-for="item in contractList"
          v-bind:mID="1"
          v-bind:key="item.mID"
        >
          <div class="self">
            <div class="self_one">
              <span>联系人编号:</span>
              <Input :disabled="flag2" :value="item.mID" style="width:100px" />
            </div>
            <div class="self_one">
              <span>联系人名称:</span>
              <Input :disabled="flag2" :value="item.mName" style="width:100px" />
            </div>
            <div class="self_one">
              <span>联系人电话:</span>
              <Input :disabled="flag2" :value="item.mTel" style="width:100px" />
            </div>
            <div @click="upContanAction(item.mID)" class="btn">点击修改</div>
            <div @click="deleteAction(item.mID)" class="btn">点击删除</div>
          </div>
        </div>

        <div class="self">
          <div class="self_one">
            <span>新增联系人:</span>
          </div>

          <div class="self_one">
            <span>联系人编号:</span>
            <Input v-model="newmID" style="width:100px" />
          </div>
          <div class="self_one">
            <span>联系人名称:</span>
            <Input v-model="newmName" style="width:100px" />
          </div>
          <div class="self_one">
            <span>联系人电话:</span>
            <Input v-model="newmTel" style="width:100px" />
          </div>
          <div @click="addContact" class="btn">点击确认</div>
        </div>
      </TabPane>
      <TabPane label="归属信息">
        <div class="self_one">
          <span>归属客户经理ID:</span>
          <Input :disabled="flag2" :value="allInfo[0].uStaffnum" style="width:200px" />
        </div>
      </TabPane>
    </Tabs>
    <Modal v-model="modal1" title="修改联系人信息" @on-ok="ok" @on-cancel="cancel">
      <div class="self_one">
        <span>联系人编号:</span>
        <Input disabled :value="showmID" style="width:200px" />
      </div>
      <div class="self_one">
        <span>联系人姓名:</span>
        <Input v-model="updataName" placeholder="请输入联系人姓名" style="width:200px" />
      </div>
      <div class="self_one">
        <span>联系人手机号:</span>
        <Input v-model="updataTel" placeholder="请输入联系人手机号" style="width:200px" />
      </div>
    </Modal>

    <Modal v-model="modal2" title="确认删除该联系人" @on-ok="oktwo">
      <p>确认删除编号为{{deletemID}}的联系人吗？</p>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.$store.state["mine"].userInfo,
      modal1: false,
      modal2: false,
      flag: true,
      flag2: true,
      clickCID: this.$store.state["custom"].clickCID,
      value2: "1",
      allInfo: [],
      cRegadd1: "",
      contractList: [],
      upTel: "",
      upPost: "",
      upAdd: "",
      upEmail: "",
      upHome: "",
      cID: "",
      showConfirm: false,
      updataName: "",
      updataTel: "",
      showmID: "",
      deletemID: "",
      newmID: "",
      newmName: "",
      newmTel: "",
      // allInfo[3] 存款信息
      depoInfo: [],
      //  allInfo[2] 贷款信息
      loanInfo: [],
      // allInfo[1] 认购的产品信息
      cusPro: [],

      contraSign: "",
      contraEnd: ""
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

    async requestCusData() {
      this.contractList = [];
      console.log(this.clickCID);
      let result = await this.$store.dispatch("custom/requestDatabyID", {
        cID: this.clickCID
      });
      console.log(result);
      this.allInfo = result;

      result[3].forEach(item => {
        let obj = {};
        obj.dOpendate = this.renderTime(item.dOpendate);
        obj.dEnddate = this.renderTime(item.dEnddate);
        obj.dAccount = item.dAccount;
        obj.dTypes = item.dTypes;
        obj.dAccnstate = item.dAccnstate;
        obj.dOpenorg = item.dOpenorg;
        obj.dCurrency = item.dCurrency;
        obj.dBalance = item.dBalance;
        obj.dRate = item.dRate;
        obj.dPeriod = item.dPeriod;
        obj.dFlag = item.dFlag;
        obj.dOpenaccount = item.dOpenaccount;
        this.depoInfo.push(obj);
      });

      result[2].forEach(item => {
        let obj = {};
        obj.eConstart = this.renderTime(item.eConstart);
        obj.eConend = this.renderTime(item.eConend);
        obj.eID = item.eID;
        obj.eLoanway = item.eLoanway;
        obj.eRepayway = item.eRepayway;
        obj.eOpenorg = item.eOpenorg;
        obj.eCurrency = item.eCurrency;
        obj.eRate = item.eRate;
        obj.eBalance = item.eBalance;
        this.loanInfo.push(obj);
      });

        result[1].forEach(item => {
        let obj = {};
        obj.hTransdate = this.renderTime(item.hTransdate);
        obj.hStartdate = this.renderTime(item.hStartdate);
        obj.hEnddate = this.renderTime(item.hEnddate);
        obj.pID = item.pID;
        obj.hSubamount = item.hSubamount;
        this.cusPro.push(obj);
      });

this.contraSign = this.renderTime(result[0].cSigndate);
this.contraEnd = this.renderTime(result[0].cEffecttime);




      var data = result[5];
      data.forEach(item => {
        if (item.mContacts == "是") {
          this.contractList.push(item);
        }
      });

      this.upTel = result[0].cTel;
      this.upPost = result[0].cPostcode;
      this.upAdd = result[0].cAddress;
      this.upEmail = result[0].cEmail;
      this.upHome = result[0].cHomepage;
    },
    backAction() {
      this.$store.dispatch("custom/setPageself", false);
    },
    updateAction() {
      if (this.userInfo.uIdenty !== "部门领导") {
        if (this.userInfo.uStaffnum !== this.allInfo[0].uStaffnum) {
          this.$Message.error("对不起，此客户不再您管理的范围下，无权限修改");
          return;
        }
        this.showConfirm = true;
        this.flag = false;
      }

      this.showConfirm = true;
      this.flag = false;
      console.log(this.cRegadd1);
    },
    async comfirmAction() {
      let obj = {
        upTel: this.upTel,
        upPost: this.upPost,
        upAdd: this.upAdd,
        upEmail: this.upEmail,
        upHome: this.upHome,
        cID: this.clickCID
      };
      if (
        !this.upAdd ||
        !this.upEmail ||
        !this.upHome ||
        !this.upTel ||
        !this.upPost
      ) {
        console.log(1111);
        this.$Message.error("请正确输入");
        return;
      }
      let result = await this.$store.dispatch("custom/upBasicInfo", obj);
      console.log(result);
      if (result.data.code == 0) {
        this.$Message.success("修改成功");
        this.showConfirm = false;
        this.flag = true;
      } else {
        this.$Message.error(result.data.message);
      }
    },
    upContanAction(val) {
      if (this.userInfo.uIdenty !== "部门领导") {
        if (this.userInfo.uStaffnum !== this.allInfo[0].uStaffnum) {
          this.$Message.error("对不起，此客户不再您管理的范围下，无权限修改");
          return;
        }
        this.modal1 = true;
        this.showmID = val;
      }
      this.modal1 = true;
      this.showmID = val;
    },
    deleteAction(val) {
      if (this.userInfo.uIdenty !== "部门领导") {
        if (this.userInfo.uStaffnum !== this.allInfo[0].uStaffnum) {
          this.$Message.error("对不起，此客户不再您管理的范围下，无权限修改");
          return;
        }
        this.deletemID = val;
        this.modal2 = true;
      }
      this.deletemID = val;
      this.modal2 = true;
    },
    async oktwo() {
      let result = await this.$store.dispatch("custom/deleteContact", {
        mID: this.deletemID
      });
      if (result.data.code == 0) {
        this.$Message.success(result.data.message);
        this.requestCusData();
      } else {
        this.$Message.error(result.data.message);
      }
      (this.updataName = ""), (this.updataTel = "");
    },
    async ok() {
      console.log(this.updataName, this.updataTel);
      if (this.updataTel.length != 11) {
        this.$Message.error("请输入正确的11位号码");
        return;
      }
      let objup = {
        mID: this.showmID,
        mName: this.updataName,
        mTel: this.updataTel
      };
      // console.log(objup)
      let result = await this.$store.dispatch("custom/upContact", objup);
      if (result.data.code == 0) {
        this.$Message.success(result.data.message);
        this.requestCusData();
      } else {
        this.$Message.error(result.data.message);
      }
      (this.updataName = ""), (this.updataTel = "");
    },
    cancel() {
      (this.updataName = ""), (this.updataTel = "");
    },
    async addContact() {
      if (this.userInfo.uIdenty !== "部门领导") {
        if (this.userInfo.uStaffnum !== this.allInfo[0].uStaffnum) {
          this.$Message.error("对不起，此客户不再您管理的范围下，无权限修改");
          console.log(this.userInfo.uStaffnum, this.allInfo[0].uStaffnum);
          return;
        }
        let Conobj = {
          mID: this.newmID,
          cID: this.clickCID,
          mName: this.newmName,
          mTel: this.newmTel
        };
        if (!this.newmName || !this.newmID || !this.newmTel) {
          this.$Message.error("请输入完整信息");
          return;
        }
        if (this.newmTel.length != 11) {
          this.$Message.error("请输入正确的11位手机号");
          return;
        }
        let result = await this.$store.dispatch("custom/addContact", Conobj);
        if (result.data.code == 0) {
          this.newmID = "";
          this.newmName = "";
          this.newmTel = "";
          this.$Message.success(result.data.message);
          this.requestCusData();
        } else {
          this.$Message.error(result.data.message);
        }
      }
      let Conobj = {
        mID: this.newmID,
        cID: this.clickCID,
        mName: this.newmName,
        mTel: this.newmTel
      };
      if (!this.newmName || !this.newmID || !this.newmTel) {
        // this.$Message.error("请输入完整信息");
        return;
      }
      if (this.newmTel.length != 11) {
        this.$Message.success("请输入正确的11位手机号");
        return;
      }
      let result = await this.$store.dispatch("custom/addContact", Conobj);
      if (result.data.code == 0) {
        this.newmID = "";
        this.newmName = "";
        this.newmTel = "";
        this.$Message.success(result.data.message);
        this.requestCusData();
      } else {
        this.$Message.error(result.data.message);
      }
    }
  },
  mounted() {
    this.requestCusData();
  }
};
</script>

<style lang="scss">
input:disabled {
  color: #000 !important;
}
#pana {
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-right: 66px;
  color: #000 !important;
  overflow: scroll;
  z-index: 999;
}
.content {
  width: 100%;
  // background: #0ed;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  // justify-content: center;
}
.btn {
  width: 100px;
  height: 30px;
  margin-top: 20px;

  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  padding: 6px 15px 0 15px;
  font-size: 14px;
  border-radius: 4px;
  outline: 0;
}
.self {
  width: 100%;
  border-bottom: 1px sloid #000;
  display: flex;
  padding-bottom: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
}

.self_one {
  // display: flex;
  margin-top: 20px;
}
</style>