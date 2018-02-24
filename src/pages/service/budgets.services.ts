export class BudgetsService {
budgets: {title: string}[] = [];

    addBudget(budget: {title: string}) {
     this.budgets.push(budget);
    }

    getBudget() {
     return this.budgets.slice();
    }
}