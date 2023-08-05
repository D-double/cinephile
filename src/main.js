import './assets/style/main.scss'
import routers from '@/routes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import BtnMore from '@/components/UI/BtnMore.vue';
import Actors from '@/components/UI/Actors.vue';
import errorImage from './assets/img/no-image.png'

const pinia = createPinia()
const app = createApp(App)

app.use(routers)
app.use(pinia)
app.use(VueLazyload, {
  error: errorImage
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)
app.mount('#app')
