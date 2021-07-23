class Table{

  constructor(){
    this.tabela = null
    this.head = null
    this.body = null

    this.initialize()
  }
  
  initialize(){
    this
      .setTabela()
      .construirHead()
      .construirBody()  
  }

  draw(idWhere){
    const idTag = document.getElementById(idWhere);
    idTag.appendChild(this.tabela)
  }
  
  getTabela(){
    return this.tabela;
  }

  setTabela(){
    this.tabela = document.createElement('table');
    return this;
  }

  construirHead(){
    const tabela = this.tabela;
    const thead = tabela.createTHead()
    const rowTHead = thead.insertRow(0)
    rowTHead.insertCell(0).innerHTML = "Data"
    rowTHead.insertCell(1).innerHTML = "Cotação"
    this.head = thead;
    return this;
  }

  construirBody(){
    const tabela = this.tabela;
    const tbody = tabela.createTBody()
    this.body = tbody;
    return this;
  }

  insertRow(dados){
    const body = this.body
    const rowBody = body.insertRow()
    for (const iterator in dados)
      rowBody.insertCell(iterator).innerHTML = dados[iterator]
    return this;
  }

  setDadosAtBody(matriz){
    for (const vetor of matriz)
      this.insertRow(vetor)
    return this;
  }
}