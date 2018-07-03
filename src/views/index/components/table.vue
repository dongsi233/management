<template>
    <div>
        <el-button v-waves="{color:'yellow'}" type="primary">水波纹效果</el-button>
    </div>
</template>
<script>
import waves from '@/directive/waves/index.js'

export default {
    directives: {
        waves
    }
}
</script>
<style lang="scss" scoped>

</style>
