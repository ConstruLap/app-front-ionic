import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage implements OnInit {

  public formAprender = [
    { servico: 'Serviço pedreiro em geral', isChecked: false },
    { servico: 'Serviço pintura em geral', isChecked: false },
    { servico: 'Serviço elétrica em geral', isChecked: false },
    { servico: 'Serviço Hidráulico em geral', isChecked: false }

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
    { info: 'Onde aplicará seu conhecimento:' },
    { info: 'Como ficou sabendo:' }

  ];

  constructor() { }

  ngOnInit() {}

}
