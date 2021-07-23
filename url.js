function getUrl() {
    return "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='simbolo_moeda'&@dataInicial='cotacao_inicial'&@dataFinalCotacao='cotacao_final'&$top=10000&$skip=0&$format=json&$select=cotacaoVenda,dataHoraCotacao";
  }