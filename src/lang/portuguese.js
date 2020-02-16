/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 27/12/2018
 * @description File that contains all the literals in Portuguese for when the application is in that language.
 */
export const Pt = {
	// General Texts of the application 
    TITLE: 'Desenvolvedor de Testes AngularJS Senior',

    // Header Texts
    CONTACT_WITH_EVALUATOR: 'Contato com avaliador',
    DOUBTS_PARAGRAPH: 'Se você tiver alguma dúvida sobre o teste que está fazendo, entre em contato com seu avaliador no seguinte e-mail:',
    SELECT_YOUR_LANGUAGE: 'Selecione seu idioma',

    // Menu Texts
    WELCOME: 'Bemvindo',
    INFO: 'Teste/Info',
    FORM: 'Formulario',
    TABLE: 'Mesa/Carrosel',
    SUMMARY: 'Resumo',

    // Footer Texts
    FOOTER: 'Copyright 2018 Ricoh. Todos os direitos reservados.',

     // Text/Info
    INFO_TITTLE: 'Desenvolvedor avançado Teste',
    INFO_TITTLE_PARAGRAPH: 'Este é o seu teste técnico de acesso para ser um desenvolvedor angular js para o ricoh. Nas abas a seguir, indicamos os procedimentos para fazer e o que estamos procurando como desenvolvedor em angularjs.',
   
    INTRODUCTION:'Introdução',
    INTRODUCTION_TITTLE:'Introdução',
    INTRODUCTION_PARAGRAPH_1:'Você está prestes a começar a realizar o teste técnico que a Ricoh propõe para o recrutamento de desenvolvedores do Angularjs.',
    INTRODUCTION_PARAGRAPH_2:'Este teste consiste em 4 testes independentes que consistem no desenvolvimento de uma tabela, no desenvolvimento de um formulário e no desenvolvimento de um painel de resumo. Esses três testes são detalhadamente explicados nas guias a seguir.',
    INTRODUCTION_PARAGRAPH_3:'A qualidade e o resultado desse teste terão um importante peso de decisão que o grupo de avaliadores tomará ao avaliar sua candidatura como parte de nossa equipe.',
    INTRODUCTION_PARAGRAPH_4:'Estamos conscientes de que o teste pode ser difícil de enfrentar, dependendo da situação pessoal do avaliado, já que é extenso e levará muito do seu tempo. Mas a compensação será diretamente proporcional ao seu resultado, por isso pedimos um esforço extra ao avaliado que será recompensado.',
    INTRODUCTION_PARAGRAPH_5:'Finalmente, em caso de qualquer dúvida na realização deste teste, entre em contato com nossa equipe e vamos resolvê-lo o mais rápido possível.',
    INTRODUCTION_PARAGRAPH_6:'Atenciosamente, Sergio Cernuda Fdez, desenvolvedor angular da Ricoh.',
    
    TESTS:'Testes',
    TESTS_TITTLE_1:'Teste 1',
    TESTS_TITTLE_1_A:'faça um formulário',
    TESTS_1_PARAGRAPH_1:'Faça um formulário que simule a inserção de um objeto no json hospedado em "/resources/data/data.json".',
    TESTS_1_PARAGRAPH_2:'Crie todos os campos necessários no formulário para a simulação e processe-os corretamente a partir do controlador.',
    TESTS_1_PARAGRAPH_3:'Depois disso, você tem duas opções.',
    TESTS_1_LIST_ITEM_1:'Mostrar o objeto na mesma tela de formulário.',
    TESTS_1_LIST_ITEM_2:'Mostrar o objeto pelo console',
    TESTS_1_PARAGRAPH_4:'O formulário será inserido em uma nova guia que deve ser criada no menu lateral com a configuração correta e o uso da biblioteca do roteador da interface do usuário para navegação.',
    
    TESTS_TITTLE_2:'Teste 2',
    TESTS_TITTLE_2_A:'Faça uma mesa com computadores desktop',
    TESTS_2A_PARAGRAPH_1:'Faça uma tabela de computadores desktop com as informações anexadas ao Json com o caminho "/resources/data/data.json". A tabela será inserida em uma nova guia que deve ser criada no menu lateral com a configuração correta e usando a biblioteca do roteador da interface do usuário para navegação.',
    TESTS_TITTLE_2_B:'Faça um carrossel com computadores portáteis',
    TESTS_2B_PARAGRAPH_1:'Faça um carrossel de laptops com as informações anexadas ao Json com o caminho "/resources/data/data.json". O carrossel será inserido na mesma guia da tabela.',
    
    TESTS_TITTLE_3:'Teste 3',
    TESTS_3_TITTLE:'Faça uma tela de resumo',
    TESTS_3_PARAGRAPH_1:'Nesta seção, propomos a realização de um painel de resumo com as informações fornecidas nos dados json. Pode ser o painel típico de informações gerais que um usuário do tipo administrador veria como um resumo,',
    TESTS_3_PARAGRAPH_2:'Para esta seção, não colocamos nenhum tipo de pré-condição, permitimos que você escolha tanto o design quanto a funcionalidade dessa tela, desde que seja consistente com o restante do aplicativo.',
    TESTS_3_PARAGRAPH_3:'Nesta seção, propomos a realização de um painel de resumo com as informações fornecidas nos dados json.',
    TESTS_3_PARAGRAPH_4:'O painel de resumo será inserido em uma nova guia que deve ser criada no menu lateral com a configuração correta e o uso da biblioteca do roteador da interface do usuário para navegação.',
    
    TESTS_TITTLE_4:'Teste 4',
    TESTS_TITTLE_4_A:'Faça o aplicativo multilíngüe',
    TESTS_4A_PARAGRAPH_2:'O idioma selecionado será salvo em um cookie do navegador e deve ser consultado no início do aplicativo.',
    TESTS_4A_PARAGRAPH_3:'Para esta seção, recomendamos o uso da biblioteca de tradução angular.',
    TESTS_TITTLE_4_B:'Você não deve usar hardcode e literais nos drivers e html',
    TESTS_4B_PARAGRAPH_3:'Implemente um arquivo "constantes" que contenha todos os literais de todos os controladores e html e outro para cada idioma usado na seção anterior.',

    ADITIONAL_INFO:'Informação adicional',
    ADITIONAL_INFO_PARAGRAPH_1:'Nesta seção, mostraremos as coisas que valorizaremos no teste que você fará:',
    ADITIONAL_INFO_LI1:'Limpar no código',
    ADITIONAL_INFO_LI2:'Otimização de código',
    ADITIONAL_INFO_LI3:'Código Corretamente Comentado',
    ADITIONAL_INFO_LI4:'Originalidade no desenvolvimento da solução',
    ADITIONAL_INFO_LI5:'Manter o layout correto do aplicativo',
    ADITIONAL_INFO_LI6:'Use estilos e classes corretamente',
    ADITIONAL_INFO_LI7:'O tempo necessário para a resolução do teste',
    ADITIONAL_INFO_LI8:'Qualquer melhoria que o avaliado queira inserir na aplicação explicando as razões pelas quais ele é implementado.',
    ADITIONAL_INFO_PARAGRAPH_2:'No caso de implementar uma biblioteca externa, além daquelas que disponibilizamos para você, você deve anexar um documento explicativo com a funcionalidade dessa biblioteca e a forma de uso dentro da explicação.',

    // Form
    FORM_TITTLE:'Criar novo computador',
    BRAND:'Marca',
    BRAND_INPUT:'Selecione a marca de computador',
    MODEL:'Modelo',
    MODEL_INPUT:'Modelo de computador',
    PRICE:'Preço',
    PRICE_INPUT:'Preço do computador',
    CPU:'Cpu',
    CPU_INPUT:'Selecione a CPU do computador',
    RAM:'Ram',
    RAM_INPUT:'Selecione o Ram computador',
    TYPE:'tipo',
    TYPE_INPUT:'Selecione o tipo do computador',
    SHAPE:'forma',
    SHAPE_INPUT:'Selecione a forma do computador',
    CREATE_COMPUTER_BUTTON:'Criar novo computador',

    // Table/carousel
    DESKTOP_TABLE_TITTLE:'Tabela de computadores desktop',
    LAPTOP_CAROUSEL_TITTLE:'Carrossel de laptops',

    // Summary
    CHEAPEST:'O mais barato:',
    EXPENSIVE:'O mais caro:',
    FAVOURITE:'Nosso favorito:',
    PRICES:'Preços',
    DEVICES_SHAPES:'Formulários',
    DEVICES_TYPES:'Tipos',
    AMOUNT_BY_RAM:'RAM' 
};
