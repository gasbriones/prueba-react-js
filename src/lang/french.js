

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 27/12/2018
 * @description File that contains all the literals in French for when the application is in that language.
 */
export const Fr = {
	// General Texts of the application 
    TITLE: 'Développeur de test AngularJS Senior',  

    // Header Texts
    CONTACT_WITH_EVALUATOR: 'Contactez votre évaluateur',
    DOUBTS_PARAGRAPH: 'Si vous avez des doutes sur le test que vous effectuez, contactez votre évaluateur dans le courrier électronique suivant:',
    SELECT_YOUR_LANGUAGE: 'Sélectionnez votre langue',

    // Menu Texts
    WELCOME: 'Bienvenue',
    INFO: 'Test/Info',
    FORM: 'Formulaire',
    TABLE: 'Table/carrousel',
    SUMMARY: 'Graphiques',

    // Footer Texts
    FOOTER: 'Copyright 2018 Ricoh. Tous droits réservés.',

     // Text/Info
    INFO_TITTLE: 'Test avancé de développeur',
    INFO_TITTLE_PARAGRAPH: 'Ceci est votre test technique d accès en tant que développeur js angulaire pour ricoh. Dans les onglets suivants, nous indiquons les procédures à suivre et ce que nous recherchons en tant que développeur dans angularjs.',
   
    INTRODUCTION:'Introduction',
    INTRODUCTION_TITTLE:'Introduction',
    INTRODUCTION_PARAGRAPH_1:'Vous êtes sur le point de commencer à exécuter le test technique proposé par Ricoh pour le recrutement de développeurs Angularjs.',
    INTRODUCTION_PARAGRAPH_2:'Ce test consiste en 4 tests indépendants comprenant le développement d un tableau, le développement d un formulaire et le développement d un panneau de résumé. Ces trois tests sont expliqués en détail dans les onglets suivants.',
    INTRODUCTION_PARAGRAPH_3:'La qualité et les résultats de ce test auront un poids important dans la décision du groupe d’évaluateurs lorsqu’il évaluera votre candidature pour faire partie de notre équipe.',
    INTRODUCTION_PARAGRAPH_4:'Nous sommes conscients que le test peut être difficile à affronter en fonction de la situation personnelle de l’évalué, car il est long et prendra beaucoup de temps. Mais la compensation sera directement proportionnelle à son résultat, nous demandons donc un effort supplémentaire aux évalués qui seront récompensés.',
    INTRODUCTION_PARAGRAPH_5:'Enfin, en cas de doute sur la réalisation de ce test, contactez notre équipe et nous le résoudrons le plus rapidement possible.',
    INTRODUCTION_PARAGRAPH_6:'Cordialement, Sergio Cernuda Fdez développeur angularJs sur Ricoh.',
    
    TESTS:'Tests',
    TESTS_TITTLE_1:'Test 1',
    TESTS_TITTLE_1_A:'Faire un formulaire',
    TESTS_1_PARAGRAPH_1:'Créez un formulaire qui simule l insertion d un objet dans le JSON hébergé dans "/resources/data/data.json".',
    TESTS_1_PARAGRAPH_2:'Créez tous les champs nécessaires dans le formulaire pour la simulation et traitez-les correctement à partir du contrôleur.',
    TESTS_1_PARAGRAPH_3:'Après cela, vous avez deux options.',
    TESTS_1_LIST_ITEM_1:'Afficher l objet dans le même écran de formulaire.',
    TESTS_1_LIST_ITEM_2:'Montrer l objet par console',
    TESTS_1_PARAGRAPH_4:'Le formulaire sera inséré dans un nouvel onglet qui doit être créé dans le menu latéral avec la configuration correcte et l utilisation de la bibliothèque ui-router pour la navigation.',
    
    TESTS_TITTLE_2:'Test 2',
    TESTS_TITTLE_2_A:'Faire une table avec des ordinateurs de bureau',
    TESTS_2A_PARAGRAPH_1:'Créez un tableau des ordinateurs de bureau avec les informations attachées au Json avec le chemin "/resources/data/data.json". La table sera insérée dans un nouvel onglet qui doit être créé dans le menu latéral avec la configuration correcte et en utilisant la bibliothèque ui-router pour la navigation.',
    TESTS_TITTLE_2_B:'Faire un carrousel avec des ordinateurs portables',
    TESTS_2B_PARAGRAPH_1:'Faites un carrousel d’ordinateurs portables avec les informations attachées au Json avec le chemin "/resources/data/data.json". Le carrousel sera inséré dans le même onglet du tableau.',
    
    TESTS_TITTLE_3:'Test 3',
    TESTS_3_TITTLE:'Faire un écran de résumé',
    TESTS_3_PARAGRAPH_1:'Dans cette section, nous proposons la réalisation d’un panneau récapitulatif avec les informations fournies dans les données JSON. Ce peut être le panneau typique d’informations générales qu’un utilisateur de type administrateur verrait comme un résumé,',
    TESTS_3_PARAGRAPH_2:'Pour cette section, nous n imposons aucune condition préalable, nous vous permettons de choisir à la fois le design et les fonctionnalités de cet écran, à condition qu il soit cohérent avec le reste de l application.',
    TESTS_3_PARAGRAPH_3:'Dans cette section, nous proposons la réalisation d’un panneau récapitulatif avec les informations fournies dans les données JSON.',
    TESTS_3_PARAGRAPH_4:'Le panneau de résumé sera inséré dans un nouvel onglet qui devrait être créé dans le menu latéral avec la configuration correcte et l utilisation de la bibliothèque ui-router pour la navigation.',
    
    TESTS_TITTLE_4:'Test 4',
    TESTS_TITTLE_4_A:'Faire l application multilingue',
    TESTS_4A_PARAGRAPH_2:'La langue sélectionnée sera enregistrée dans un cookie du navigateur et devra être consultée au début de l application.',
    TESTS_4A_PARAGRAPH_3:'Pour cette section, nous recommandons l utilisation de la bibliothèque de traduction angulaire.',
    TESTS_TITTLE_4_B:'Vous ne devez pas utiliser de hardcode et de littéraux dans les pilotes et le HTML',
    TESTS_4B_PARAGRAPH_3:'Implémentez un fichier "constantes" contenant tous les littéraux de tous les contrôleurs et html, ainsi qu un autre pour chaque langue utilisée dans la section précédente.',

    ADITIONAL_INFO:'Information complémentaire',
    ADITIONAL_INFO_PARAGRAPH_1:'Dans cette section, nous allons vous montrer ce que nous allons apprécier du test que vous allez faire:',
    ADITIONAL_INFO_LI1:'Nettoyage dans le code',
    ADITIONAL_INFO_LI2:'Optimisation du code',
    ADITIONAL_INFO_LI3:'Code correctement commenté',
    ADITIONAL_INFO_LI4:'Originalité dans le développement de la solution',
    ADITIONAL_INFO_LI5:'Maintenir la disposition correcte de l application',
    ADITIONAL_INFO_LI6:'Utiliser les styles et les classes correctement',
    ADITIONAL_INFO_LI7:'Le temps nécessaire pour la résolution du test',
    ADITIONAL_INFO_LI8:'Toute amélioration que l’évalué souhaite insérer dans l’application en expliquant les raisons pour lesquelles elle est mise en œuvre.',
    ADITIONAL_INFO_PARAGRAPH_2:'En cas d implémentation d une bibliothèque externe, en plus de celles que nous mettons à votre disposition, vous devez joindre un document explicatif contenant les fonctionnalités de cette bibliothèque et le mode d utilisation qui y est associé.',

    // Form
    FORM_TITTLE:'Créer un nouvel ordinateur',
    BRAND:'Marque',
    BRAND_INPUT:'Sélectionnez la marque de l ordinateur',
    MODEL:'Modèle',
    MODEL_INPUT:'Modèle d ordinateur',
    PRICE:'Prix',
    PRICE_INPUT:'Prix ​​de l ordinateur',
    CPU:'Cpu',
    CPU_INPUT:'Sélectionnez le processeur de l ordinateur',
    RAM:'Ram',
    RAM_INPUT:'Sélectionnez l ordinateur Ram',
    TYPE:'Type',
    TYPE_INPUT:'Sélectionnez le type de lordinateur',
    SHAPE:'chemin',
    SHAPE_INPUT:'Sélectionnez la forme de l ordinateur',
    CREATE_COMPUTER_BUTTON:'Créer un nouvel ordinateur',

    // Table/carousel
    DESKTOP_TABLE_TITTLE:'Tableau des ordinateurs de bureau',
    LAPTOP_CAROUSEL_TITTLE:'Carrousel d ordinateurs portables',

    // Summary
    CHEAPEST:'Le moins cher:',
    EXPENSIVE:'Le plus cher:',
    FAVOURITE:'Notre préféré:',
    PRICES:'Les prix',
    DEVICES_SHAPES:'Les formulaires',
    DEVICES_TYPES:'Types',
    AMOUNT_BY_RAM:'RAM' 
};
