<script>
import Personal from "../../pages/home/index/index";
import AddUser from "../../pages/home/adduser/AddUser";
import QueryInfo from "../../pages/custom/queryInfo/QueryInfo";
import Panorama from "../../pages/custom/panorama/Panorama";
import ShowActivity from '../../pages/activity/showactivity/ShowActivity'
import AddActivity from '../../pages/activity/addactivity/AddActivity'
import SubActivity from '../../pages/activity/subactivity/SubActivity'

export default {
  name: "AppContent",
  data() {
    return {
      activeName: "personal-center",
      show: false
    };
  },
  methods: {},
  mounted() {
    this.$center.$on("add", name => {
      this.activeName = name;
      //  <router-link to="login">Go to Foo</router-link>
      // <router-link to="/bar">Go to Bar</router-link>
    });
    console.log(this.show);

    // this.show = this.$store.state["custom"].pageShow;
  },
  computed: {
    haha() {
      return this.$store.state["custom"].pageShow;
    }
  },
  watch: {
    haha: function() {
      //插入需要在仓库数据变化时做的逻辑处理
      this.show= this.$store.state["custom"].pageShow;
    },
    activeName:function(){
      this.$store.dispatch('custom/setPageshow',false);
    }
  },
  render() {
    return (
      <layout style="position:relative">
        <Content style={{ minHeight: "280px", background: "#fff" }}>
          {this.activeName == "personal-center" ? <Personal /> : ""}
          {this.activeName == "add-user" ? <AddUser /> : ""}
          {this.activeName == "query-user" ? <QueryInfo /> : ""}
          {this.activeName == "query-pro" ? <ShowActivity /> : ""}
          {this.activeName == 'add-pro' ? <AddActivity /> :""}
          {this.activeName == 'sub-pro' ? <SubActivity />:""}
          {this.show && <Panorama />}
        </Content>
      </layout>
    );
  }
};
</script>