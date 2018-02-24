export class NewExpensesService {
    expenses: { description: string, number: string, date: string, category: string, checked: boolean }[] = [];

    addNewExpense(expense: { description: string, number: string, date: string, category: string, checked: boolean }) {
        this.expenses.push(expense);

    }

    getNewExpenses() {
        return this.expenses.slice();

    }
}