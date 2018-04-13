<template>
  <div class="klg-pagination-wrapper">
    <el-pagination
      :current-page="finalCurrentPage"
      :page-size="finalPageSize"
      :page-sizes="finalPageSizes"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'klg-pagination',
  props: {
    small: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 60, 100]
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  computed: {
    finalCurrentPage () {
      return +this.$route.query.page || this.currentPage
    },
    finalPageSize () {
      return +this.$route.query.limit || this.pageSize
    },
    finalPageSizes () {
      const finalPageSizes = this.pageSizes.filter(s => +s !== +this.finalPageSize)
      finalPageSizes.unshift(this.finalPageSize)
      return finalPageSizes
    }
  },
  methods: {
    handleSizeChange (size) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ..._.omit(this.$route.query, 'page'),
          ...{limit: size}
        }
      })
      this.$emit('onChange')
    },
    handleCurrentChange (currentPage) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...{page: currentPage}
        }
      })
      this.$emit('onChange')
    }
  }
}
</script>
