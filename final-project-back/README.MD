# Final project

## Installer les dépendances :

`npm i`

## Intaller la DB et la lancer :

`docker compose up -d`

## Setup les variable d'environnement :

Renommez le fichier .env.example en .env et complétez :
```
DB_PASSWORD=postmdp
DB_DATABASE=comixdb
```

## Lancer le serveur en mode dev :

`npm run dev`

## Lancer la création des tables :

`node ace migration:run`

## Peupler la db :

`node ace db:seed`

## effacer toutes les tables :

`node ace db:wipe`