import React from 'react';

const ButtonComponent: React.FC = () => {
  // Use um ref para armazenar o elemento do botão
  const referenciaDoBotao = React.useRef<HTMLButtonElement>(null);

  // Função para tratar o clique e alterar o texto
  const handleClick = () => {
    const botao = referenciaDoBotao.current;
    if (botao) {
      // Pegue o texto atual, altere-o e atualize o innerHTML do botão
      const textoAtual = botao.textContent || '';
      const novoTexto = textoAtual === 'Clique aqui' ? 'Texto Alterado' : 'Clique aqui';
      botao.innerHTML = novoTexto;
    }
  };

  return (
    <button ref={referenciaDoBotao} onClick={handleClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      Clique aqui
    </button>
  );
};

export default ButtonComponent;
