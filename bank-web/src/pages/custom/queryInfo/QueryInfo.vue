<template>
  <div id="query">
    <div class="mine-content">
      <div class="mine-left">
        <div style="margin-top:100px">
          <span>客户编号：</span>
          <Input v-model="cID" placeholder="请输入客户编号（支持模糊查询）" style="width: 200px" />
        </div>
        <div style="margin-top:30px">
          <span>客户名称：</span>
          <Input v-model="cCompany" placeholder="请输入客户名称（支持模糊查询）" style="width: 200px" />
        </div>
        <div style="margin-top:30px">
          <span>所属行业：</span>
          <Select v-model="cIndustry" style="width:200px">
            <Option
              v-for="item in industryList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </div>
        <div style="margin-top:30px">
          <span>客户类型：</span>
          <Select v-model="cOwnership" style="width:200px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div style="margin-top:30px">
          <span>是否为核心客户：</span>
          <Select v-model="cCore" style="width:150px">
            <Option v-for="item in coreList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="btn" @click="queryAcyion">
          <Icon type="md-search" />点击查询
        </div>
      </div>
      <div class="mine-right">
        <div style="margin-top:25px">查询结果：</div>
        <Table
          width="700"
          height="492"
          :columns="columns1"
          :data="cusList"
          style="margin-top:5px;margin-left:30px"
          @on-row-dblclick="doubelclick"
        ></Table>
        <div style="margin-top:10px;color:gray">向下滑动加载更多（双击进入客户全景视图）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cID: "",
      cCompany: "",
      cIndustry: "",
      cOwnership: "",
      cCore: "",
      industryList: [
        {
          value: "制造业",
          label: "制造业"
        },
        {
          value: "采矿业",
          label: "采矿业"
        },
        {
          value: "文化体育业",
          label: "文化体育业"
        },
        {
          value: "社会福利业",
          label: "社会福利业"
        }
      ],
      typeList: [
        {
          value: "国有",
          label: "国有"
        },
        {
          value: "混合",
          label: "混合"
        },
        {
          value: "集体",
          label: "集体"
        },
        {
          value: "外资",
          label: "外资"
        },
        {
          value: "私有",
          label: "私有"
        }
      ],
      coreList: [
        {
          value: "是",
          label: "是"
        },
        {
          value: "否",
          label: "否"
        }
      ],
      columns1: [
        {
          title: "客户编号",
          key: "cID"
        },
        {
          title: "客户名称",
          key: "cCompany"
        },
        {
          title: "客户类型",
          key: "cOwnership"
        },
        {
          title: "分配客户经理",
          key: "uStaffnum"
        }
      ],
      cusList: []
    };
  },
  methods: {
    async queryAcyion() {
      if(this.cusList.length > 0){
          this.cusList = []
      }
      let cID = this.cID;
      let cCompany = this.cCompany;
      let cIndustry = this.cIndustry;
      let cOwnership = this.cOwnership;
      let cCore = this.cCore;
      if (!cID || !cCompany || !cIndustry || !cOwnership || !cCore) {
        this.$Message.error("输入信息不能为空");
        return;
      }
      let cusInfo = {
        cID,
        cCompany,
        cIndustry,
        cOwnership,
        cCore
      };
      console.log(cusInfo);
      let result = await this.$store.dispatch("custom/queryCus", cusInfo);
      
      let {data} = result.data
      data.forEach(item => {
        var obj = {};
        obj.cID = item.cID;
        obj.cCompany = item.cCompany;
        obj.cOwnership = item.cOwnership;
        obj.uStaffnum = item.uStaffnum;
        this.cusList.push(obj)
      });
    },
    doubelclick(index){
        console.log(index)
        let clickCID = index.cID
        console.log(clickCID)
        this.$store.dispatch('custom/setPageshow',{show:true,clickCID:clickCID});
        
        // this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
.mine-content {
  width: 100%;
  height: 800%;
  display: flex;
  flex-direction: row;
}
.mine-left {
  flex: 3;
  border-right: 1px solid #eee;
}
.mine-right {
  flex: 7;
  /* background: rgb(226, 238, 208); */
}
.btn {
  width: 150px;
  margin-top: 40px;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  padding: 6px 15px 6px 15px;
  font-size: 14px;
  border-radius: 20px;
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