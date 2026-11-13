<!-- Composant RecipeCard : affiche UNE recette sous forme de carte -->
<template>
  <article class="recipe-card">
    <!-- Emoji de la recette (à la place d'une image) -->
    <div class="recipe-image">
      {{ recipe.emoji }}
    </div>

    <div class="recipe-content">
      <!-- {{ }} affiche une valeur JavaScript dans le HTML -->
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.description }}</p>

      <!-- Exercice 2 : nombre de personnes (affiché seulement s'il existe) -->
      <p v-if="recipe.persons"> {{ recipe.persons }} personnes</p>

      <div class="recipe-info">
        <!-- Temps de préparation -->
        <span>⏱ {{ recipe.time }} min</span>

        <!-- Badge de difficulté : la classe CSS dépend de la difficulté
             (ex. "Facile" donne la classe "facile") -->
        <span
          class="difficulty"
          :class="recipe.difficulty.toLowerCase()"
        >
          {{ recipe.difficulty }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
// La carte reçoit une prop "recipe" (un objet) envoyée par le parent
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Exercice 4 : design modifié */
.recipe-card {
  background: #fffdf8; /* 4.1 couleur de fond changée (avant : white) */
  border-radius: 20px; /* 4.2 cartes plus arrondies (avant : 12px) */
  overflow: hidden;

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);

  /* Animation douce au survol */
  transition: transform 0.2s;
}

/* La carte monte un peu au survol */
.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image {
  background: #e8f1ec;
  height: 150px;

  /* Centre l'emoji */
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 80px; /* 4.3 emojis plus grands (avant : 65px) */
}

.recipe-content {
  padding: 20px;
}

.recipe-content h2 {
  color: #173d35;
  margin-top: 0;
}

.recipe-content p {
  color: #666;
  font-size: 14px;
}

.recipe-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  font-size: 13px;
}

/* Forme commune des badges */
.difficulty {
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
}

/* Couleurs selon la difficulté */
.facile {
  background: #d9f5df;
  color: #23733b;
}

.moyen {
  background: #fff0ce;
  color: #946000;
}

/* 4.4 nouvelle couleur pour les recettes difficiles */
.difficile {
  background: #fde0e0;
  color: #b42318;
}
</style>
