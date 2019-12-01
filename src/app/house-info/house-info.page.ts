import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.page.html',
  styleUrls: ['./house-info.page.scss'],
})
export class HouseInfoPage implements OnInit {

  public formComodo = [
    { comodo: 'Sala', isChecked: false },
    { comodo: 'Cozinha', isChecked: false },
    { comodo: 'Banheiro', isChecked: false },
    { comodo: 'Lavanderia', isChecked: false },
    { comodo: 'Quarto', isChecked: false }

  ];
  public formArea = [
    { area: 'Elétrica', isChecked: false },
    { area: 'Hidráulica', isChecked: false },
    { area: 'Construção', isChecked: false }
  ];

  public formNecessidade = [
    { necessidade: 'Material', isChecked: false },
    { necessidade: 'Mão de obra', isChecked: false }
  ];
  public formInfos = [
    { info: 'Nome completo:'},
    { info: 'CPF:'},
    { info: 'Idade:'},
    { info: 'Cep:'},
    { info: 'Rua:'},
    { info: 'Complemento:'},
    { info: 'E-mail:'},
  ];
  public FormInfoAdicional = [
    { info: 'Motivo da Reforma:' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
