document.getElementById('generateCat').addEventListener('click', async () => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const catImage = document.getElementById('catImage');
      catImage.src = data[0].url; 
      catImage.hidden = false; 
    } catch (error) {
      console.error('Erro ao carregar imagem:', error);
      alert('Não foi possível gerar o gatinho. Tente novamente mais tarde.');
    }
  });
 