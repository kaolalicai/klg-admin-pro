<template>
  <demo-section>
    <demo-block title="基础用法">
      <klg-router-pagination
        :total="20"
        layout="prev, pager, next"
        @change="handleChange"
      />
    </demo-block>
    <demo-block title="显示总数和调整条数">
      <klg-router-pagination
        :total="20"
        layout="total, sizes, prev, pager, next"
        @change="handleChange"
      />
    </demo-block>
    <demo-block title="小型分页">
      <klg-router-pagination
        :total="20"
        :small="true"
        layout="prev, pager, next"
        @change="handleChange"
      />
    </demo-block>
    <demo-block title="完整功能">
      <klg-router-pagination
        :total="20"
        @change="handleChange"
      />
    </demo-block>
  </demo-section>
</template>

<script>
  export default {
    methods: {
      handleChange({currentPage, pageSize}) {
        this.$message(`当前选中第${currentPage}页，每页${pageSize}条`)
      }
    }
  }
</script>