import React, { useState } from 'react';
import './App.css';

function App() {
  const opcoes = ['🐶', '🐱', '🐰', '🐼', '🐵', '🦁', '🐷', '🐔', '🐴']; // Opções disponíveis
  const [vitorias, setVitorias] = useState(0); // Estado para controlar o número de vitórias
  const [derrotas, setDerrotas] = useState(0); // Estado para controlar o número de derrotas
  const [jogadas, setJogadas] = useState(0); // Estado para controlar o número de jogadas
  const [roleta, setRoleta] = useState(Array.from({ length: 3 }, () => opcoes[Math.floor(Math.random() * opcoes.length)])); // Estado para armazenar a roleta

  // Função para girar a roleta
  const girarRoleta = () => {
    let novaRoleta;
    const proporcaoVitorias = vitorias / (vitorias + derrotas + 1); // Proporção atual de vitórias

    if (proporcaoVitorias < 0.3) {
      // Gera figuras iguais para vitórias se a proporção for menor que 30%
      const animalVitoria = opcoes[Math.floor(Math.random() * opcoes.length)];
      novaRoleta = Array.from({ length: 3 }, () => animalVitoria);
      setVitorias(vitorias + 1);
    } else {
      // Gera figuras diferentes para derrotas
      novaRoleta = Array.from({ length: 3 }, () => {
        let randomAnimal;
        do {
          randomAnimal = opcoes[Math.floor(Math.random() * opcoes.length)];
        } while (roleta.includes(randomAnimal));
        return randomAnimal;
      });
      setDerrotas(derrotas + 1);
    }

    setRoleta(novaRoleta);
    setJogadas(jogadas + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jogo de Roleta de Animais</h1>
        <div className="Roleta">
          {roleta.map((animal, index) => (
            <span key={index} className="Opcao">{animal}</span>
          ))}
        </div>
        <button className="Botao" onClick={girarRoleta}>
          Girar Roleta
        </button>
        <p>Vitórias: {vitorias}</p>
        <p>Derrotas: {derrotas}</p>
        <p>Jogadas: {jogadas}</p>
      </header>
    </div>
  );
}

export default App;
