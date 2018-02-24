export class InputsService {
    inputs: { figure: string, selections: string, alerts: string }[] = [];

    addInput(input: { figure: string, selections: string, alerts: string }) {
        this.inputs.push(input);
    }

    getInput() {
        return this.inputs.slice();
    }
}