import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensinar',
  templateUrl: './ensinar.page.html',
  styleUrls: ['./ensinar.page.scss'],
})
export class EnsinarPage implements OnInit {

  public formEnsinar = [
    { servico: 'Serviço pedreiro em geral', isChecked: false },
    { servico: 'Serviço pintura em geral', isChecked: false },
    { servico: 'Serviço elétrico em geral', isChecked: false },
    { servico: 'Serviço hidráulico em geral', isChecked: false }

  ];

  public formConhecimento = [
    { conhecimento: 'Baixo', isChecked: false },
    { conhecimento: 'Médio', isChecked: false },
    { conhecimento: 'Alto', isChecked: false },
    { conhecimento: 'Nenhum', isChecked: false }

  ];

  public formInfos = [
    { info: 'Nome completo:'},
    { info: 'CPF:'},
    { info: 'Idade:'},
    { info: 'Cep:'},
    { info: 'Rua:'},
    { info: 'Complemento:'},
    { info: 'E-mail'},
  ];

  public FormInfoAdicional = [
    { info: 'Disponibilidade:' },
    { info: 'Como ficou sabendo:' }

  ];

  constructor() { }

  ngOnInit() {}

}
