<template>
  <el-pagination
    :small="small"
    :disabled="disabled"
    :background="background"
    :current-page="finalCurrentPage"
    :page-size="finalPageSize"
    :page-sizes="finalPageSizes"
    :pager-count="pagerCount"
    :popper-class="popperClass"
    :layout="layout"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"/>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'KlgRouterPagination',
  props: {
    small: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    background: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: undefined
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
    pagerCount: {
      type: Number,
      default: 7
    },
    popperClass: {
      type: String,
      default: undefined
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
    emitChange () {
      this.$emit('change', {
        currentPage: this.finalCurrentPage,
        pageSize: this.finalPageSize
      })
    },
    handleSizeChange (size) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ..._.omit(this.$route.query, 'page'),
          ...{limit: size}
        }
      })
      this.emitChange()
    },
    handleCurrentChange (currentPage) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...{page: currentPage}
        }
      })
      this.emitChange()
    }
  }
}
</script>
