import { Injectable } from '@angular/core';

@Injectable()

export class GlobalVariables {
  user: Object;

  constructor() {
    this.user = {
      name: 'Fahad Hossain',
      username: 'fahad',
      mt: {type: 1, res: 'Cashier'},
      userid: 4000000000000000
    };
  }

}
