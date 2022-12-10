let getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }// essa função retorna um numero inteiro entre min e max, incluindo min mas excluindo max.

  let lancarDado=()=>{return getRandomInt(1,7)}// essa função simula o lançamento do dado
  
  let valor_esperado_pratica;
  let soma=0;
  let  experimento= process.argv[2] || 1000
  let valor_esperado_formula=(1/6)*(1+2+3+4+5+6)
  let distribucao=[0,0,0,0,0,0];

  for (let i = 0; i < experimento; i++) {
    let experimentar=lancarDado();
    if (experimentar===1) distribucao[experimentar-1]++;
    if (experimentar===2) distribucao[experimentar-1]++;
    if (experimentar===3) distribucao[experimentar-1]++;
    if (experimentar===4) distribucao[experimentar-1]++;
    if (experimentar===5) distribucao[experimentar-1]++;
    if (experimentar===6) distribucao[experimentar-1]++;
    // console.log(`${i}:${experimentar}`); // descomenta para ver o lançamento acontecer
    soma+=experimentar
  }
  valor_esperado_pratica=soma/experimento
  console.log(`
  =================================================
    distribução
  ------------------
  1: ${distribucao[0]}
  2: ${distribucao[1]}
  3: ${distribucao[2]}
  4: ${distribucao[3]}
  5: ${distribucao[4]}
  6: ${distribucao[5]}
  ------------------
  total: ${experimento}
  ------------------
  =================================================
  valor esperado pratica: ${valor_esperado_pratica}
  valor esperado formula: ${valor_esperado_formula}
  `);