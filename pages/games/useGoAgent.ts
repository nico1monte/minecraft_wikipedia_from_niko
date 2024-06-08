const COMMANDS: Record<string, boolean> = {
  goAgent: true,
  jumpAgent: true,
};

export function useGoAgent() {

  async function runUserInput(userInput: string) {

    const splittedInput = userInput.split('\n').filter(Boolean).map(row => row.trim());

    for (const row of splittedInput) {
      const splittedRow = row.split(' ');
      const command = splittedRow[0];
      const commandArguments = splittedRow.slice(1);
      const isAvailableCommand = COMMANDS[command] === true;

      if (isAvailableCommand) {
        switch (command) {
          case 'goAgent': {
            await runGoAgent(commandArguments);
          }
        }
      }
    }
  }

  async function runGoAgent(commandArguments: string[]) {
    const steps = commandArguments[0];
    console.log(steps);
    // TO DO: заставить агента ходить
  }

  return {
    runUserInput
  };
}