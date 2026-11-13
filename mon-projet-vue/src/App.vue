<!-- Composant principal (parent) de l'application -->
<script setup>
// On importe le composant enfant Bonjour (le chemin indique où est le fichier)
// Avec <script setup>, il est directement utilisable dans le template
import Bonjour from './components/Bonjour.vue'
</script>

<template>
  <div>
    <!-- Titre qui vient du parent (App.vue) -->
    <h1>Mon application Vue.js de faarax</h1>
    <!-- On affiche le composant enfant ici -->
    <Bonjour />
  </div>
</template>
