<template>
    <div>
        <el-button v-waves="{color:'yellow'}" type="primary" >水波纹效果</el-button>

        <el-card :body-style="{ padding: '0px' }">
            <div slot="header">
                <span><!-- card title --></span>
            </div>
            <css-doodle>
                :doodle { 
                    @grid: 1x10 / 61.8vmin; 
                }

                @place-cell: center; 
                @size: calc(@index() * 10%);
                
                border-radius: 50%;
                border-style: dashed;
                border-width: calc(@index() * 1vmin); 
                border-color: hsla(
                    calc(20 * @index()), 70%, 68%, 
                    calc(3 / @index() * .8)
                );
                
                --d: @rand(20s, 40s); 
                --rf: @rand(360deg);
                --rt: calc(var(--rf) + @pick(1turn, -1turn));

                animation: spin var(--d) linear infinite;
                @keyframes spin {
                    from { transform: rotate(var(--rf)) }
                    to   { transform: rotate(var(--rt)) }
                }
            </css-doodle> 
        </el-card>
        
    <loading :dot-color-val="dotColor" :dot-nums="dotNums" :loading-radius-val="loadingRadius" :dot-radius-val="dotRadius" :style="changeStyle"></loading>
    
    </div>
</template>
<script>
import waves from '@/directive/waves/index.js'
import CSSDoole from 'css-doodle'
import loading from '@/components/loading'

export default {
    components: {
        loading
    },
    directives: {
        waves
    },
    data () {
        return {
            loadingRadius: 120, 
            dotRadius: 15, 
            dotColor: '#ff3366', 
            dotNums: 12
        }
    },
    computed: {
        changeStyle: function() {
            let rootEle = document.documentElement;
            console.log(rootEle)
            rootEle.style.setProperty('--loadingRadius', `${this.loadingRadius}px`)
            rootEle.style.setProperty('--dotRadius', `${this.dotRadius}px`)
            rootEle.style.setProperty('--dotColor', this.dotColor)
        }
    },
}
</script>
<style lang="scss" scoped>
    .el-card {
        background: #0a0c27;
        overflow: hidden;
    }
</style>
