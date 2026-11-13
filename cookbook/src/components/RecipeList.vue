<!-- Composant RecipeList : affiche la liste de toutes les recettes -->
<script setup>
// On importe le composant enfant qui affiche une recette
import RecipeCard from './RecipeCard.vue'

// La liste reçoit une prop "recipes" (un tableau) envoyée par App.vue
defineProps({
  recipes: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="recipes">
    <div class="section-title">
      <h2>Mes recettes</h2>
      <!-- .length = nombre d'éléments dans le tableau -->
      <p>{{ recipes.length }} recettes disponibles</p>
    </div>

    <div class="recipe-grid">
      <!-- v-for : crée une RecipeCard pour chaque recette du tableau
           :key    = identifiant unique pour Vue
           :recipe = on envoie la recette à la carte (prop) -->
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </section>
</template>

<style scoped>
.recipes {
  padding: 30px 40px;
}

.section-title {
  margin-bottom: 25px;
}

.section-title h2 {
  color: #173d35;
  margin-bottom: 5px;
}

.section-title p {
  color: #777;
  font-size: 14px;
}

/* Grille de 3 colonnes */
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px; /* Exercice 4.5 : espacement modifié (avant : 25px) */
}

/* Tablette : 2 colonnes */
@media (max-width: 750px) {
  .recipe-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile : 1 colonne */
@media (max-width: 500px) {
  .recipe-grid {
    grid-template-columns: 1fr;
  }

  .recipes {
    padding: 20px;
  }
}
</style>
