# Project BBC - Braganza Boxing Camp

Manage and develops by ElHombreDeLaNoche.

Présentation du projet BBC_BLOG

Blog de présentation de différentes thématiques axées sport de combat.

Sport de prédilection :

- Boxe anglaise.

Pour avoir un aperçu global de l'application, il faudra dans un premier temps créer la base de données grâce aux fichiers dans le dossier src/db/migrations.

        Il faudra d'abord :
                            - utiliser la commande : knex migrate:up nomDesTables (un par un pour le moment).
                            - Puis faire la même chose pour les tables alter qui ajouterons les clés étrangères dans les bonnes tables.

Ensuite il faudra ajouter les données en base afin d'avoir de la data à traiter :

        Pour cela, il faudra :
                            - Utiliser la commande : knex seed:run --specific=nomDuFichier
                            - Suivre cet ordre :
                                                  1 - mainSeed.mjs
                                                  2 - articles.mjs
                                                  3 - comments.mjs

Maitenant que vous avez les éléments nécéssaires, vous pouvez lancer l'application avec la commande : npm run dev qui vous permettra d'avoir un apreçu de l'application !

Bonne visite à vous !
