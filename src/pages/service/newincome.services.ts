export class NewIncomesService {
  newincomes: { description: string, checked: boolean, date: string, number: string, category: string }[] = [];

  addNewIncome(newincome: {description: string, checked: boolean, date: string, number: string, category: string }) {
    this.newincomes.push(newincome);

  }

  getNewIncome() {
    return this.newincomes.slice();
  }
}