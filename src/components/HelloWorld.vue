<template>
  <div>
    <el-table
      :data="coinTable"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column header-align="center"
                       prop="platform"
                       label="交易所"
      >
      </el-table-column>
      <el-table-column header-align="center"
                       prop="coinType"
                       label="币种"
      >
      </el-table-column>
      <el-table-column header-align="center"
                       prop="price"
                       label="价格($)">
      </el-table-column>
      <el-table-column header-align="center"
                       prop="range"
                       label="涨幅度(%)">
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
  .el-table .warning-row {
    background: #f0f9eb;
  }

  .el-table .success-row {
    background: oldlace;
  }
</style>

<script>
  export default {
    data() {
      return {
        coinTable: []
      }
    },
    created() {
      this.getData();
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (row.range>0) {
          return 'warning-row';
        } else  {
          return 'success-row';
        }
      },
      getData() {
        this.search();
      },
      search(){
        this.$axios.get("/hound/coin/v1/getCoinInfo")
          .then((response)=>{
            if (response.data.success == true) {
              this.coinTable=response.data.obj;
            } else {
              this.$message.error("信息获取失败");
            }
          }).catch((response) => {
          this.$message.error(response);})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
