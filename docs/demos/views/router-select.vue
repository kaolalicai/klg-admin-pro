<template>
  <demo-section>
    <demo-block title="基础单选">
      <klg-router-select
        filter-key="status"
        placeholder="按订单状态筛选"
        :options="ORDER_STATUS_OPTIONS"
        @change="fetchData"
      />
    </demo-block>
    <demo-block title="基础多选">
      <klg-router-select
        filter-key="role"
        placeholder="按用户角色筛选"
        :options="USER_ROLES_OPTIONS"
        :multiple="true"
      />
    </demo-block>
  </demo-section>
</template>

<script>
  import convertFilterOptions from '../utils/convertFilterOptions'

  const ORDER_STATUS_TEXT = {
    pending: '进行中',
    done: '完成',
    fail: '失败'
  }

  const USER_ROLES_TEXT = {
    INVESTOR: '投资人',
    BORROWSER: '借款人',
    COLLABORATOR: '合作机构'
  }

  export default {
    data() {
      return {
        ORDER_STATUS_OPTIONS: convertFilterOptions(ORDER_STATUS_TEXT),
        USER_ROLES_OPTIONS: convertFilterOptions(USER_ROLES_TEXT)
      }
    },
    methods: {
      fetchData(value) {
        this.$message(`当前选中：${value}`)
      }
    }
  }
</script>
