import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import plugin from './components/index.js'
import './assets/variable.css'

const app = createApp(App)
app.use(plugin)
app.mount('#app')


console.log('xxxs')

var arr = [1,2,3,4,5,6,7,8,1,2,3,4]

function unique(arr) {
    // console.log('arr', arr);
    // var temp = {};
    var _arr = []
    // for(var i = 0; i < arr.length; i++){
    //     if(_arr.indexOf(arr[i]) == -1) {
    //         _arr.push(arr[i])
    //     }
    // }
     return arr.filter((item, index) => {
        return arr.indexOf(item) == index
    })

    return _arr
    // return new Set(arr)
    
}

// console.log('result', [...unique(arr)]);
console.log('result', unique(arr));