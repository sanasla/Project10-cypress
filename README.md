# Installation du projet
1. Téléchargez ou clonez le dépôt
2. Depuis un terminal ouert dans le dossier du projet, lancer la commande : `sudo docker-compose up --build`
3. Ouvrez le site depuis la page http://localhost:8080 

Eco-Bliss-Bath

Eco Bliss Bath est une start-up de 20 personnes, spécialisée dans la vente de produits de beauté écoresponsables dont le produit principal est un savon solide.

La boutique prépare un site de vente en ligne.

Prérequis:
Pour  lancer et faire fonctionner le projet, vous aurez besoin de Docker, Node.js, NPM (ou autre gestionnaire de paquets tel que yarn), Cypress et votre navigateur préféré (Chrome et/ou Firefox recommandés)


Procédure pour l'exécution du projet:
1-Cloner le projet:
    git clone https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_Automatisez_des_tests_pour_une_boutique_en_ligne.git

2-Lancer de Backend:
    Lancer Docker desktop
    Lancer votre terminal de commande dans le dossier racine du projet et saisir la commande "docker-compose up" afin de lancer le back-end
    Saisir "docker-compose down" afin de stopper le back-end
    Vous pouvez désormais consulter le site à l'adresse suivante : Http://localhost:8080

3-Lancer le Frontend:
    Ouvrez un terminal de commande.
    Accédez au répertoire du projet cloné.
    Tapez les commandes suivantes :
    npm install
    npm start

Procédure pour lancer les tests
1-Installer Cypress:
    Installer la librairie Cypress en saisissant la commande suivante dans votre terminal (toujours à la racine du projet) : npm install cypress --save-dev

2-Ouvrir Cypress: 
    Pour accéder à l'interface Cypress, saisir la commande : npx cypress open
    Pour lancer tous les tests présents dans le dossier Cypress sans lancer l'interface et obtenir un rapport de test, saisir la commande : npx cypress run


Infos login:
    Identifiant: test2@test.fr
    Mot de passe : testtest

Infos API: 
    Le swagger du projet se trouve à l'adresse suivante :
    http://localhost:8081/api/doc

Auteur:
    Sana Slama
    email: 