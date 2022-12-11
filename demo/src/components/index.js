import HelloWorld from './HelloWorld.vue'
import Demo from './demo.vue'




const plugin = {
    install(app) {
        console.log('insatll')
        app.component('HelloWorld', HelloWorld)
        app.component('Demo', Demo)
    }
}


export default plugin 

