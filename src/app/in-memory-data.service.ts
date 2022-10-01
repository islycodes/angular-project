import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {

    const dados = [
      {id: 111, name: 'Lux', cpf: '579.485.018-35', mensalidade: 'R$ 75,00', cell: '(11)99480-3820', address: 'Av. Mid, 621', clienteDesde: '19/10/2010',  },
      {id: 112, name: 'Renata', cpf: '537.780.568-24', mensalidade: 'R$ 93,00', cell: '(11) 98897-9635', address: 'Rua Bot, 174', clienteDesde: '16/02/2022' },
      {id: 113, name: 'Morgana', cpf: '388.781.298-01', mensalidade: 'R$ 60,00', cell: '(11) 93878-8506', address: 'Rua Bot, 568', clienteDesde: '21/02/2019'},
      {id: 114, name: 'Ezreal', cpf: '534.532.868-47', mensalidade: 'R$ 75,00', cell: '(11) 91045-3915', address: 'Rua Bot, 222', clienteDesde: '16/03/2010'},
      {id: 115, name: 'Evelyn', cpf: '727.978.478-06', mensalidade: 'R$ 79,00', cell: '(11) 96571-2084', address: 'Av. Jungle, 847', clienteDesde: '01/05/2009' },
      {id: 116, name: 'Darius', cpf: '674.702.198-38', mensalidade: 'R$ 55,00', cell: '(11) 96536-6393', address: 'Rua Top, 776', clienteDesde: '23/05/2012'},
      {id: 117, name: 'Irelia', cpf: '147.073.368-41', mensalidade: 'R$ 80,00', cell: '(11) 94814-3178', address: 'Rua Top, 851', clienteDesde: '16/11/2010'},
      {id: 118, name: 'Kaisa', cpf: '947.153.688-03', mensalidade: 'R$ 75,00', cell: '(11) 95669-5006', address: 'Rua Bot, 928', clienteDesde: '07/03/2018'},
      {id: 119, name: 'Khazix', cpf: '536.146.558-57', mensalidade: 'R$ 75,00', cell: '(11) 92719-6141', address: 'Av. Jungle, 428', clienteDesde: '27/09/2012'},
      {id: 120, name: 'Lulu', cpf: '151.716.498-20', mensalidade: 'R$ 55,00', cell: '(11) 93416-4701', address: 'Av. Mid, 244', clienteDesde: '20/03/2012'},
      {id: 211, name: 'Barão Nashor', cnpj: '34.721.943/0001-25', ultimoPagamento: '25/02', cell: '(11) 3745-5542', address: 'Av. Jungle-top, 1256', fornecedorDesde: '28/02/2012' },
      {id: 212, name: 'Dragão Hextec', cnpj: '53.601.016/0001-16', ultimoPagamento: '05/03', cell: '(11) 3287-4064', address: 'Av. Jungle-bot, 1256', fornecedorDesde: '13/04/2015' },
      {id: 213, name: 'Nexus',  cnpj: '31.037.249/0001-03', ultimoPagamento: '20/03', cell: '(11) 2685-7486', address: 'Rua Base, 12', fornecedorDesde: '10/11/2018' },
      {id: 214, name: 'Arauto do Vale', cnpj: '58.834.564/0001-00', ultimoPagamento: '25/02', cell: '(11) 3723-4576', address: 'Av. Jungle-top, 1256', fornecedorDesde: '12/06/2009' },
      {id: 215, name: 'Minions', cnpj: '43.390.073/0001-40', ultimoPagamento: '28/02', cell: '(11) 2114-6524', address: 'sem localização exata', fornecedorDesde: '08/08/2014' },
      {id: 216, name: 'Aronguejo', cnpj: '43.336.825/0001-94', ultimoPagamento: '15/03', cell: '(11) 2084-0153' , address: 'Av. Jungle, 1260', fornecedorDesde: '17/07/2008' },
      {id: 217, name: 'Lobo Trevoguari', cnpj: '70.767.126/0001-71', ultimoPagamento: '10/03', cell: '(11) 3754-0456', address: 'Av. Jungle-bot, 206', fornecedorDesde: '26/09/2011' },
      {id: 218, name: 'Azuporã',  cnpj: '04.139.685/0001-02', ultimoPagamento: '25/02', cell: '(11) 2357-7182', address: 'Av. Jungle, 133', fornecedorDesde: '20/01/2013' },
      {id: 219, name: 'Rubrivira', cnpj: '53.482.566/0001-63', ultimoPagamento: '20/03', cell: '(11) 3065-7407', address: 'Av. Jungle, 533', fornecedorDesde: '16/10/2015' },
      {id: 220, name: 'Grompe', cnpj: '39.285.856/0001-96', ultimoPagamento: '08/03', cell: '(11) 2542-6086', address: 'Av. Jungle, 524', fornecedorDesde: '01/12/2011' },
  ];

  return {dados};

  }

  constructor() { }
}
