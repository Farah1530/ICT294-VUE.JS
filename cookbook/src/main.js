// Point d'entrée de l'application
import { createApp } from 'vue' // crée l'application Vue
import App from './App.vue' // notre composant principal
import './style.css' // le CSS général

// On crée l'app et on l'affiche dans <div id="app"> de index.html
createApp(App).mount('#app')
