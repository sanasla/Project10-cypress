
## Eco-Bliss-Bath  

Eco Bliss Bath est une start-up de 20 personnes, spécialisée dans la vente de produits de beauté écoresponsables dont le produit principal est un savon solide.

La boutique prépare un site de vente en ligne.

## Prérequis


Pour le lancement du projet vous aurez besoin de Docker, Node.js, NPM, Cypress et d'un navigateur (Chrome ou Firefox recommandés)


## Procédure pour l'exécution du projet

1- Cloner le projet:


- *[Git clone ](https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_Automatisez_des_tests_pour_une_boutique_en_ligne.git)*


2- Lancer de Backend:

- Lancer Docker desktop

- Lancer votre terminal de commande dans le dossier racine du projet et saisir la commande 

  *docker-compose up* afin de lancer le back-end

- Saisir *docker-compose down* afin de stopper le back-end

- Vous pouvez désormais consulter le site à l'adresse suivante : Http://localhost:8080

3- Lancer le Frontend:

- Ouvrez un terminal de commande.  
- Accédez au répertoire du projet cloné
- Tapez les commandes suivantes 

        npm install

        npm start

## Procédure pour lancer les tests 

1-Installer Cypress:

- Installer la librairie Cypress en saisissant la commande suivante dans votre terminal (toujours à la racine du projet) : 

        npm install cypress --save-dev

2-Ouvrir Cypress: 

- Pour accéder à l'interface Cypress, saisir la commande : 

        npx cypress open




## Procédure pour la génération du rapport
Pour exécuter les tests avec Cypress et générer un rapport des résultats, suivez les étapes ci-dessous :



1 - Ouvrez un terminal de commande.
- Assurez-vous que Node.js est installé sur votre machine et que Cypress est configuré dans votre projet.

2 -Accédez au répertoire du projet cloné.

3- Tapez la commande suivante pour exécuter les tests et générer un rapport


        npx cypress run


## Infos login

Identifiant: test2@test.fr

 Mot de passe : testtest

## Infos API


Le swagger du projet se trouve à l'adresse suivante : [Lien swagger](http://localhost:8081/api/doc)

## Auteur

Sana Slama

Email: sana.slama2017@gmail.com

## Hitorique des versions

version: 1.0.0 Tests manuels

version: 2.0.0 Tests automatisés avec cypress