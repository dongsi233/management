import waves from './waves'

const install = function(Vue) {
    Vue.directives('waves', waves)
}

waves.install = install

export default waves