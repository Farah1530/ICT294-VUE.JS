<!-- Composant AppHeader : en-tête de l'application (logo + menu) -->
<template>
  <header class="header">
    <!-- Logo de l'application -->
    <div class="logo">
      🍲 CookBook
    </div>

    <!-- Menu de navigation -->
    <nav>
      <a href="#">Accueil</a>
      <a href="#">Mes recettes</a>
    </nav>
  </header>
</template>

<script setup>
// Pas besoin de JavaScript pour ce composant
</script>

<!-- scoped = ces styles ne s'appliquent qu'à ce composant -->
<style scoped>
.header {
  background-color: #173d35;
  color: white;
  padding: 20px 40px;

  /* Logo à gauche, menu à droite */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  color: white;
  text-decoration: none;
}

/* Couleur du lien au survol de la souris */
nav a:hover {
  color: #b8dfc5;
}
</style>
