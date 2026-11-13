<!-- Exercice 3 : composant RecipeFooter (pied de page) -->
<script setup>
// Données affichées dans le footer
const appName = 'CookBook'
const year = 2026
</script>

<template>
  <footer>
    <!-- Nom de l'application, année et texte de copyright -->
    <p>© {{ year }} {{ appName }} - Projet Vue.js CFC de faarax. Tous droits réservés.</p>
  </footer>
</template>

<style scoped>
footer {
  background: #173d35;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  font-size: 13px;
}
</style>
