<template>
  <div>
    <el-table
      :data="tableData2"
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
<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [{
          platform: '火币',
          coinType: 'BTC',
          price: '15688',
          range: '12.5'
        }, {
          platform: '火币',
          coinType: 'ETH',
          price: '1499',
          range: '12.2134'
        }, {
          platform: '火币',
          coinType: 'QASH',
          price: '1246',
          range: '19.999'
        }, {
          platform: '火币',
          coinType: 'ETC',
          price: '2234',
          range: '-2.123'
        }]
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
