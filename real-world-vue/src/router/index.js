// Configuration de Vue Router : relie chaque adresse (URL) à une vue
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FarahView from "@/views/FarahView.vue";

// Liste des routes de l'application
const routes = [
  {
    // Page d'accueil
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // Ma page perso, accessible sur /farah
    path: "/farah",
    name: "farah",
    component: FarahView,
  },
  {
    // Page About
    path: "/about",
    name: "about",
    // Chargement à la demande : la page n'est chargée que quand on la visite
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

// Création du routeur en mode historique (URL sans #)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// On exporte le routeur pour l'utiliser dans main.js
export default router;
