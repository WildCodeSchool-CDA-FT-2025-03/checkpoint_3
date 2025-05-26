# Checkpoint frontend

## Instructions

:warning: Commence par créer un branche `nom_prenom` et synchronise là avec le repo pour t'assurer des droits d'écriture.
Ensuite, lis les consignes jusqu'au bout

Tu vas utiliser une API GraphQL qui fournit des informations sur un ensemble de pays.
Celle-ci est déjà mise en place. Ce checkpoint ne va s'intéresser qu'à la partie Front d'une application

## Le tour du propriétaire

Pour commencer, explore les différentes parties du repo : (On a appris à ne pas se jeter à corps perdu dans le code)

- La racine
- Le client
- Le backend
- Les screenshots

## Lancement

`Docker` est mis en place, mais tu es libre d'utiliser `node` directement pour lancer ton projet. A ta guise
Une fois le projet lancé, rends-toi sur [http://localhost:4000/graphql](http://localhost:4000/graphql) afin d'explorer l'API.

Pour réaliser ce projet, tu peux si tu le souhaites utiliser du CSS pur ou bien utiliser un framework CSS de ton choix (TailwindCSS, MaterialUI, Schadcn, AntDesign, ...)

- 1/ Configure ton environnement de css
- 2/ Configure ton environnement vite react
- 3/ Configure ton environnement graphQL Client - Codegen

## Features

Tu vas devoir développer la partie front de 3 fonctionnalités :

- 4/ Listing des pays (avec au minimum les infos "name" et "emoji") pour chaque pays
- 5/ Affichage des détails d'un pays sur une page dédiée ("name", "code", "emoji" et nom du continent s'il est renseigné)
- 6/ Ajout d'un pays (avec au minimum les infos "name", "code" et "emoji")

Pour ces 3 fonctionnalités, tu devras structurer ton code au maximum en créeant et utilisant des composants réutilisables (Nav, carte, ...)

Voici un aperçu de ce que cela pourrait donner :

![ajout et listing des pays](./screenshots/example/listing_add_desktop.png?raw=true)

![details d'un pays](./screenshots/example/country_details_desktop.png?raw=true)

### En bonus, tu pourras compléter le développement :

- 7/ Permettre de renseigner un continent (à l'aide d'un select) lors de l'ajout d'un pays.
- 8/ Intégration de test Vitest sur tes composants

## Warning

:warning: N'oublie pas de faire un commit précis pour chaque point que tu réalises (env@1-IntegrationCSS)
# checkpoint_3
