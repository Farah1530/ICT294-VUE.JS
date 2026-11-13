# Exercice 5 – Comprendre l'imbrication

```
App.vue (parent, contient les données)
├── AppHeader.vue
├── RecipeList.vue
│   └── RecipeCard.vue  (x4, une par recette)
└── RecipeFooter.vue
```

- **Composant parent :** `App.vue`, le composant principal qui contient tous les autres.
- **Composants enfants :** `AppHeader`, `RecipeList` et `RecipeFooter` (enfants de App) ; `RecipeCard` est l'enfant de `RecipeList`.
- **Qui contient les données ?** `App.vue`, dans le tableau `recipes`.
- **Comment les données arrivent dans RecipeCard ?** App envoie le tableau à RecipeList avec la prop `:recipes="recipes"`. RecipeList fait un `v-for` sur ce tableau et envoie chaque recette à une RecipeCard avec la prop `:recipe="recipe"`. RecipeCard la reçoit avec `defineProps` et l'affiche avec `{{ }}`.
