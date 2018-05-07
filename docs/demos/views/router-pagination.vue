<template>
  <demo-section>
    <demo-section title="基础用法">
      <klg-router-pagination
        :total="100"
        @change="handleChange"
      />
    </demo-section>
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