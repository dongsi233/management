<template>
    <div class="loading">
        <div v-for="(dotNum, index) in dotNums" :key="index" 
            :style="dotTransform(index, dotNums)">
            <span :style="dotAimation(index, dotNums)"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'loading',
    props: {
        loadingRadiusVal: {
            type: Number,
            required: true,
            default: 168
        },
        dotRadiusVal: {
            type: Number,
            required: true,
            default: 24
        },
        dotColorVal: {
            type: String,
            required: true,
            default: '#d8d8d8'
        },
        dotNums: {
            type: Number,
            required: true,
            default: 10
        }
    },
    
    methods: {
        dotTransform: function(index, dotNums) {
            let rad = 2 * Math.PI / dotNums  * index;
            let dotX =  Math.cos(rad) * this.loadingRadiusVal / 2;
            let dotY =  Math.sin(rad) * this.loadingRadiusVal / 2;
            return {
                transform: `translate(${dotX}px,${dotY}px)`
            };
        },
        dotAimation: function(index, dotNums) {
            let delayTime = `${-1 * (1 + (index + 1) * 1 / dotNums) }s`
            return {
                animationDelay: delayTime
            }
        }
    }
}
</script>
<style lang="scss" scoped>
   :root {
    --loadingRadius: 168px;
    --dotRadius: 24px;
    --dotColor: #d8d8d8;
    }

    .loading{
        margin:10px;
        position: relative;
        font-size: 0;
        border-radius: 50%;
        transform-origin: center;
        
        width: var(--loadingRadius);
        height: var(--loadingRadius);
        color: var(--dotColor);
        
        div {
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 100%;

            width: var(--dotRadius);
            height: var(--dotRadius);
            color: var(--dotColor);
            margin-top: calc((var(--dotRadius) / 2) * -1);
            margin-left: calc((var(--dotRadius) / 2) * -1);
            
        }
        
        span {
            display: block;
            background-color: currentColor;
            border: 0 solid currentColor;
            border-radius: 100%;
            animation: ball-spin 1s infinite ease-in-out;  
            
            width: var(--dotRadius);
            height: var(--dotRadius);
        }
    }

    // animation keyframes

    @keyframes ball-spin {
        0%,
        100% {
        opacity: 1;
        transform: scale(1);
        }
        20% {
        opacity: 1;
        }
        80% {
        opacity: 0;
        transform: scale(0);
        }
    }
</style>


