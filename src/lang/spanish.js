/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 27/12/2018
 * @description File that contains all the literals in Spanish for when the application is in that language.
 */
export const Es = {
	// General Texts of the application 
    TITLE: 'Prueba Desarrollador Senior AngularJS',

    // Header Texts
    CONTACT_WITH_EVALUATOR: 'Contacta con tu evaluador',
    DOUBTS_PARAGRAPH: 'Si tienes algun tipo de duda sobre el test que estas haciendo contacta con tu evaluador en el siguiente email:',
    SELECT_YOUR_LANGUAGE: 'Selecciona tu idioma',

    // Menu Texts
    WELCOME: 'Bienvenido',
    INFO: 'Test/Info',
    FORM: 'Formulario',
    TABLE: 'Tabla/Carrusel',
    SUMMARY: 'Graficas',

    // Footer Texts
    FOOTER: 'Copyright 2018 Ricoh. Todos los derechos reservados.',

    // Text/Info
    INFO_TITTLE: 'Developer advanced Test',
    INFO_TITTLE_PARAGRAPH: 'Esta es su prueba técnica de acceso para ser un desarrollador de angularjs para ricoh. En las siguientes pestañas indicamos los procedimientos a seguir y lo que estamos buscando como desarrollador en angularjs.',
    
    INTRODUCTION:'Introdución',
    INTRODUCTION_TITTLE:'Introdución',
    INTRODUCTION_PARAGRAPH_1:'Está a punto de comenzar a realizar la prueba técnica que Ricoh propone para la contratación de desarrolladores de Angularjs.',
    INTRODUCTION_PARAGRAPH_2:'Esta prueba consta de 4 pruebas independientes que consisten en el desarrollo de una tabla, el desarrollo de un formulario y el desarrollo de un panel de resumen. Estas tres pruebas se explican detalladamente en las siguientes pestañas.',
    INTRODUCTION_PARAGRAPH_3:'La calidad y el resultado de esta prueba tendrán un importante peso de decisión que el grupo de evaluadores tomará cuando evalúe su candidatura para formar parte de nuestro equipo.',
    INTRODUCTION_PARAGRAPH_4:'Somos conscientes de que la prueba puede ser difícil de enfrentar dependiendo de la situación personal de la evaluación, ya que es extensa y requerirá gran parte de su tiempo libre. Pero la compensación será directamente proporcional a su resultado, por lo que pedimos un esfuerzo adicional para la evaluación que será recompensada.',
    INTRODUCTION_PARAGRAPH_5:'Finalmente, en caso de cualquier duda en la realización de esta prueba, póngase en contacto con nuestro equipo y lo resolveremos lo más rápido posible.',
    INTRODUCTION_PARAGRAPH_6:'Atentamente, Sergio Cernuda Fdez desarrollador de Angular js en Ricoh.',
    
    TESTS:'Tests',
    TESTS_TITTLE_1:'Test 1',
    TESTS_TITTLE_1_A:'Haz un formulario',
    TESTS_1_PARAGRAPH_1:'Haga un formulario que simule la inserción de un objeto en el json alojado en "/resources/data/data.json".',
    TESTS_1_PARAGRAPH_2:'Cree todos los campos necesarios en el formulario para la simulación y trátelos correctamente desde el controlador.',
    TESTS_1_PARAGRAPH_3:'Después de esto tienes dos opciones.',
    TESTS_1_LIST_ITEM_1:'Mostrar el objeto en la misma pantalla de formulario.',
    TESTS_1_LIST_ITEM_2:'Mostrar el objeto por consola',
    TESTS_1_PARAGRAPH_4:'El formulario se insertará en una nueva pestaña que deberá crear en el menú lateral con la configuración correcta y el uso de la biblioteca ui-router para la navegación.',
    
    TESTS_TITTLE_2:'Test 2',
    TESTS_TITTLE_2_A:'1.a Haz una tabla con ordenadores de mesa',
    TESTS_2A_PARAGRAPH_1:'Haga una tabla de computadoras de escritorio con la información adjunta al Json con la ruta "/resources/data/data.json". La tabla se insertará en una nueva pestaña que deberá crear en el menú lateral con la configuración correcta y utilizando la biblioteca ui-router para la navegación.',
    TESTS_TITTLE_2_B:'1.b Haz un carrusel con ordenadores portatiles',
    TESTS_2B_PARAGRAPH_1:'Haga un carrusel de computadoras portátiles con la información adjunta al Json con la ruta "/resources/data/data.json". El carrusel se insertará en la misma pestaña de la tabla.',
    
    TESTS_TITTLE_3:'Test 3',
    TESTS_3_TITTLE:'Haz una pantalla resumen',
    TESTS_3_PARAGRAPH_1:'En esta sección, proponemos la realización de un panel de resumen con la información proporcionada dentro de los datos json. Puede ser el panel típico de información general que un usuario de tipo administrador vería como un resumen,',
    TESTS_3_PARAGRAPH_2:'Para esta sección no ponemos ningún tipo de condición previa, le permitimos elegir tanto el diseño como la funcionalidad de esta pantalla, siempre que sea consistente con el resto de la aplicación.',
    TESTS_3_PARAGRAPH_3:'En esta sección, proponemos la realización de un panel de resumen con la información proporcionada dentro de los datos json.',
    TESTS_3_PARAGRAPH_4:'El panel de resumen se insertará en una nueva pestaña que deberá crear en el menú lateral con la configuración correcta y el uso de la biblioteca ui-router para la navegación.',
    
    TESTS_TITTLE_4:'Test 4',
    TESTS_TITTLE_4_A:'1.a Haz multilenguaje la aplicación',
    TESTS_4A_PARAGRAPH_2:'El idioma seleccionado se guardará en una cookie del navegador y se debe consultar al inicio de la aplicación.',
    TESTS_4A_PARAGRAPH_3:'Para esta sección, recomendamos el uso de la biblioteca de traducción angular.',
    TESTS_TITTLE_4_B:'1.b Usted no debe usar hardcode y literales en los controladores y html',
    TESTS_4B_PARAGRAPH_3:'Implementa un archivo "constants" que contenga todos los literales de todos los controladores y html y otro para cada idioma utilizado en la sección anterior.',

    ADITIONAL_INFO:'Información Adicional',
    ADITIONAL_INFO_PARAGRAPH_1:'En esta sección, le expondremos las cosas que valoraremos sobre la prueba que va a hacer:',
    ADITIONAL_INFO_LI1:'Limpieza en el código',
    ADITIONAL_INFO_LI2:'Optimización del código',
    ADITIONAL_INFO_LI3:'Código correctamente comentado',
    ADITIONAL_INFO_LI4:'Originalidad en el desarrollo de la solución',
    ADITIONAL_INFO_LI5:'Mantener en correcto layout de la aplicación',
    ADITIONAL_INFO_LI6:'Usar correctamente los estilos y las clases',
    ADITIONAL_INFO_LI7:'El tiempo requerido para la resolución del test',
    ADITIONAL_INFO_LI8:'Cualquier mejora que el evaluado quiera insertar en la aplicación explicando los motivos por los cuales se implementa.',
    ADITIONAL_INFO_PARAGRAPH_2:'En caso de implementar una biblioteca externa, aparte de las que ponemos a su disposición, debe adjuntar un documento explicativo con la funcionalidad de esa biblioteca y la forma de uso dentro de la explicación.',

    // Form
    FORM_TITTLE:'Crear nuevo ordenador',
    BRAND:'Marca',
    BRAND_INPUT:'Selecciona la marca del ordenador',
    MODEL:'Modelo',
    MODEL_INPUT:'Modelo del ordenador',
    PRICE:'Precio',
    PRICE_INPUT:'Precio del ordenador',
    CPU:'Cpu',
    CPU_INPUT:'Selecciona la Cpu del ordenador',
    RAM:'Ram',
    RAM_INPUT:'Selecciona la Ram del ordenador',
    TYPE:'Tipo',
    TYPE_INPUT:'Selecciona el tipo del ordenador',
    SHAPE:'Forma',
    SHAPE_INPUT:'Selecciona la forma del ordenador',
    CREATE_COMPUTER_BUTTON:'Crear nuevo ordenador',

    // Table/carousel
    DESKTOP_TABLE_TITTLE:'Tabla de ordenadores de mesa',
    LAPTOP_CAROUSEL_TITTLE:'Carrusel de ordenadores portátiles',

    // Summary
    CHEAPEST:'El mas barato:',
    EXPENSIVE:'El mas caro:',
    FAVOURITE:'Nuestro favorito:',
    PRICES:'Precios',
    DEVICES_SHAPES:'Formas',
    DEVICES_TYPES:'Tipos',
    AMOUNT_BY_RAM:'RAM'
};
