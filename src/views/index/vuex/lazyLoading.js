
function lazy (name) {
    debugger;
    //let rname = `components/${name}.vue`;
    return () => import (`../components/${name}.vue`)
}

export {lazy}