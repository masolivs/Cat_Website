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
      "O primeiro gato a viajar ao espaço foi Félicette, uma gata francesa enviada ao espaço em 1963. Ela retornou com segurança à Terra."
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
  });