<template>
  <el-select
    :value="value"
    :size="size"
    :clearable="clearable"
    :filterable="filterable"
    :multiple="multiple"
    :placeholder="placeholder"
    :loading="loading"
    :popper-class="popperClass"
    @input="handleSelectChange"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'KlgRouterSelect',
  props: {
    defaultValue: {
      type: String,
      default: undefined
    },
    filterKey: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    popperClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: undefined
    }
  },
  watch: {
    '$route' (to, from) {
      this.updateValueFromQuery(to.query)
    }
  },
  created () {
    const {
      [this.filterKey]: filterKey
    } = this.$route.query

    if (this.defaultValue && !filterKey) {
      this.handleSelectChange(this.defaultValue)
    } else {
      this.updateValueFromQuery()
    }
  },
  methods: {
    updateValueFromQuery (query = this.$route.query) {
      const {
        [this.filterKey]: filterValue
      } = query

      this.value = filterValue

      // fix multiple
      if (this.multiple && !filterValue) {
        this.value = []
      }
    },
    handleSelectChange (value) {
      if (!this.filterKey) throw new Error('filterKey required')
      this.$router.push({
        path: this.$route.path,
        query: {
          ..._.omit(this.$route.query, 'page'),
          ...{
            [this.filterKey]: value || undefined
          }
        }
      })
      this.$emit('change', value)
    }
  }
}
</script>
