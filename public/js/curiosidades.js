document.addEventListener("DOMContentLoaded", () => {
    const curiosidades = [
      "A domesticação dos gatos começou há cerca de 9.000 anos no Oriente Médio...",
      "Gatos passam cerca de 70% de suas vidas dormindo, o que significa aproximadamente 13-16 horas por dia. Durante o sono REM, eles sonham, assim como nós!",
      "Gatos podem saltar até cinco vezes a altura do próprio corpo, graças à força de suas pernas traseiras.",
      "Há quem diga que gatos de cores diferentes possuem traços de personalidade distintos. Por exemplo, gatos laranja são frequentemente considerados extrovertidos e brincalhões.",
      "O ronronar dos gatos não é apenas sinal de felicidade. Eles também ronronam quando estão com dor ou em recuperação, e acredita-se que as vibrações podem ajudar na cicatrização de tecidos e no alívio de estresse.",
      "O gato mais velho do mundo registrado, chamado Creme Puff, viveu até os 38 anos, enquanto o gato mais alto, Arcturus Aldebaran Powers, media incríveis 48,4 cm.",
      "Os bigodes dos gatos são altamente sensíveis e ajudam a medir espaços, detectar vibrações e até perceber mudanças no ambiente.",
      "Assim como as impressões digitais humanas, os padrões nos narizes dos gatos são únicos para cada indivíduo.",
      "Os gatos têm cerca de 32 músculos em cada orelha, o que lhes permite girá-las em quase 180 graus para captar sons.",
      "Gatos possuem um terceiro pálpebra chamada 'membrana nictitante', que ajuda a proteger e lubrificar seus olhos.",
      "O miado de um gato é quase exclusivamente usado para se comunicar com humanos; eles raramente miam uns para os outros.",
      "Gatos não conseguem sentir o gosto de coisas doces devido a uma mutação genética que desativou seus receptores de sabor doce.",
      "Os gatos têm glândulas odoríferas nas patas, bochechas e cauda, e eles usam isso para marcar território esfregando ou arranhando superfícies.",
      "O Guinness World Records reconhece o salto mais longo de um gato como 213,36 cm (7 pés) de comprimento, realizado por um gato chamado Waffle the Warrior Cat.",
      "Gatos possuem uma habilidade especial chamada 'reflexo de endireitamento', que lhes permite girar o corpo no ar e cair de pé em muitas situações.",
      "Os gatos têm cerca de 200 ossos em seus corpos (mais do que humanos), e muitas dessas articulações extras estão em suas espinhas, permitindo flexibilidade incrível.",
      "Gatos esfregam suas cabeças em você como um sinal de afeto e para marcar você com seu cheiro, declarando 'propriedade'.",
      "O primeiro gato a viajar ao espaço foi Félicette, uma gata francesa enviada ao espaço em 1963. Ela retornou com segurança à Terra.",
      "Gatos possuem cinco dedos nas patas dianteiras e quatro nas traseiras, com exceção de algumas raças que podem ter um dedo extra nas patas dianteiras.",
      "A visão noturna dos gatos é cerca de seis a oito vezes melhor que a dos humanos, graças a uma maior quantidade de células sensíveis à luz na retina.",
      "Os gatos podem detectar cheiros até cinco vezes mais fracos do que os humanos, e usam seu nariz para explorar o mundo ao seu redor.",
      "A língua áspera dos gatos é coberta em pequenas papilas que ajudam a remover pelos mortos e carne dos ossos.",
      "A expectativa de vida média de um gato doméstico é de 12 a 15 anos, mas alguns podem viver até 20 anos ou mais.",
      "Gatos são excelentes nadadores, embora muitos prefiram evitar a água. Essa habilidade é um resquício de seus ancestrais selvagens.",
      "Os gatos podem girar as orelhas em quase 180 graus para localizar a fonte de um som com precisão.",
      "A cor dos olhos de um gato é determinada pela quantidade de melanina presente na íris. Gatos brancos com olhos azuis são mais propensos à surdez.",
      "Os gatos têm glândulas sudoríparas apenas em suas almofadas, o que significa que eles resfriam seus corpos principalmente através da ofegação.",
      "Gatos podem sentir o campo magnético da Terra e usam essa informação para se orientar durante a caça e a exploração.",
      "Os gatos têm um órgão chamado órgão de Jacobson, que detecta feromônios e outros odores que os humanos não conseguem perceber.",
      "Gatos podem ter diferentes grupos sanguíneos, assim como os humanos. É importante conhecer o tipo sanguíneo do seu gato caso ele precise de uma transfusão.",
      "Os gatos podem purrar com a boca fechada e até mesmo enquanto dormem. Acredita-se que o ronronar tenha propriedades curativas.",
      "Gatos são animais crepusculares, o que significa que são mais ativos durante o amanhecer e o crepúsculo.",
      "Gatos podem aprender truques e até mesmo responder a seus nomes, embora sejam mais independentes do que cães.",
      "Os gatos têm uma capacidade incrível de se adaptar a diferentes ambientes e estilos de vida.",
      "Gatos são animais sociais e gostam de ter companhia, seja de outros gatos ou de humanos.",
      "Gatos podem sentir o medo em humanos através de mudanças em sua frequência cardíaca e respiração.",
      "A posição em que um gato dorme pode revelar muito sobre seu estado emocional. Por exemplo, dormir de barriga para cima indica confiança.",
      "A cauda de um gato é como uma extensão de sua coluna e é usada para expressar uma variedade de emoções, desde felicidade até raiva.",
      "Gatos podem reconhecer suas próprias imagens em espelhos e até mesmo brincar com seus reflexos.",
      "O ronronar de um gato tem uma frequência que pode ajudar a reparar ossos e tecidos, o que pode explicar por que eles se curam tão rapidamente.",
      "Os gatos têm glândulas sudoríparas nas almofadas das patas, mas também podem liberar feromônios através dessas glândulas para marcar seu território.",
      "A cor dos olhos de um gatinho pode mudar nas primeiras semanas de vida.",
      "Gatos podem ter diferentes padrões de sono, com alguns sendo mais noturnos do que outros.",
      "A forma da cabeça de um gato pode influenciar sua personalidade. Por exemplo, gatos com rostos arredondados tendem a ser mais amigáveis.",
      "Gatos podem ter diferentes tipos de pelagem, desde curta e lisa até longa e encaracolada.",
      "Os gatos ancestrais dos gatos domésticos eram animais selvagens que caçavam roedores e pequenos animais.",
      "Gatos podem ter preferências por determinadas texturas, como tecidos macios ou grama.",
      "Alguns gatos têm a capacidade de 'hiperestesia', uma condição que causa espasmos musculares e movimentos involuntários da pele, geralmente na base da cauda.",
      "Gatos podem ter diferentes tipos de personalidades, desde introvertidos e independentes até extrovertidos e sociáveis.",
      "A dieta de um gato selvagem consiste principalmente de carne, enquanto a dieta de um gato doméstico pode ser mais variada.",
      "Gatos podem ter alergias a alimentos, poeira, pólen e outros alérgenos.",
      "Os gatos podem sentir a aproximação de uma tempestade devido às mudanças na pressão barométrica."
    ];
  
    function embaralharLista(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    const curiosidadesAleatorias = embaralharLista(curiosidades).slice(0, 8);
    const cards = document.querySelectorAll(".card");
  
    curiosidadesAleatorias.forEach((curiosidade, index) => {
      if (cards[index]) {
        cards[index].innerText = curiosidade;
      }
    });
    cards.forEach(card => {
      card.addEventListener('click', () => {
          const novoIndice = Math.floor(Math.random() * curiosidadesAleatorias.length);
          card.innerText = curiosidadesAleatorias[novoIndice];
      });
  });
  });