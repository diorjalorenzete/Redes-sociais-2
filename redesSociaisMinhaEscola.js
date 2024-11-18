import { criarGrafico, getCSS } from "./common.js"

async function redesSociaisFavoritasMinhaEscola() {
    
    //código omitido
    const res = await fetch(url)
    const dados = await res.json()
    const redesSociais = dados.slice(l).map(redes => redes [1])
    
    const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    }, {})const data = [
        {
          values: valores,
          labels: redes,
          type: 'pie',
          textinfo: 'label+percent'
        }
      ]
      
      const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
          text: 'Redes sociais que os usuários mais gostam',
          x: 0,
          font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
          }
        },
        legend: {
          font: {
            color: getCSS('--primary-color'),
            size: 16
          }
        }
      }
      
      criarGrafico(data, layout)
    }
redesSociaisFavoritasMinhaEscola()