# Projet Angular B2B

## Présentation

Ce projet est une application Angular SSR (Server-Side Rendering) pour un site B2B, structurée autour de pages principales : Accueil, Expertises, Offres, Événements, Agenda, Research Lab, Développement, Politiques, et Contact. L'application utilise le lazy loading pour optimiser les performances et Angular SSR pour le SEO et la rapidité d'affichage.

## Structure du projet

- `src/app/_pages/` : Contient les pages principales, chacune dans son propre dossier avec composants, services, et stores.
- `src/app/app.routes.ts` : Déclare les routes principales avec lazy loading.
- `src/app/app.routes.server.ts` : Configure le rendu SSR (prerender) pour chaque page.
- `public/` : Fichiers statiques accessibles publiquement.
- `src/styles.css` : Styles globaux.

## Installation

```bash
npm install
```

## Lancement du serveur de développement

```bash
npm start
```
Accédez à http://localhost:4200

## Build production

```bash
npm run build
```

## SSR (Server-Side Rendering)

Pour lancer le serveur SSR après build :

```bash
npm run build
npm run serve:ssr:projet
```

## Tests

- Unitaires :
  ```bash
  npm test
  ```
- End-to-end :
  ```bash
  ng e2e
  ```

## Pages principales

- `/` ou `/home` : Accueil
- `/expertises` : Expertises
- `/offres` : Offres
- `/events` : Événements
- `/egenda` : Agenda
- `/researchlab` : Research Lab
- `/developpement` : Développement
- `/politiques` : Politiques
- `/contact` : Contact

## Bonnes pratiques

- **Lazy loading** : Chaque page est chargée dynamiquement pour optimiser les performances.
- **SSR** : Toutes les pages sont configurées en prerender (statique) pour le SEO. Modifier `app.routes.server.ts` pour changer le mode de rendu (Prerender, Server, Client).
- **Composants par défaut** : Tous les composants de page utilisent `export default class`.

## Dépendances principales

- Angular 21+
- @angular/ssr
- Express (pour SSR)
- Vitest (tests unitaires)

## Personnalisation

Adaptez les routes, composants, et services selon vos besoins métier. Consultez la documentation Angular pour approfondir : https://angular.dev

## Maquettes

- Accueil                 :  https://xd.adobe.com/view/838ea6aa-990b-49df-86f9-dba400cff71d-d6dd/

- Expertises              :  https://xd.adobe.com/view/2fed78e8-b72a-455e-8a5d-0f767d88577f-7abe/

- Offres de valeur        :  https://xd.adobe.com/view/c9f7871b-217b-463a-9728-77961e484426-9ca4/

- Événements              :  https://xd.adobe.com/view/069945ee-a1d4-44bf-9254-6641de8feb9a-53ca/

- Agenda                  :  https://xd.adobe.com/view/9832fa26-7fc7-430d-ba9f-2a80c7573b3c-cd61/

- Research Lab            :  https://xd.adobe.com/view/1456e825-4721-4379-8225-b170f8a5546e-4105/

- Développement durable   :  https://xd.adobe.com/view/24cc708e-688b-48cd-a891-1667bfceba6b-719f/

- Politiques              :  https://xd.adobe.com/view/3f6bbb16-e4d0-4871-a17d-70047f81e931-6a38/

- Contact                 :  https://xd.adobe.com/view/6e96d733-2fbe-49d4-963e-2450f0a18908-3bc5/

---

© 2026 Top Management. Tous droits réservés.
