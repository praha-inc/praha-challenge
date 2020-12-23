export const saveUserInput = async (
  save: (input: string) => Promise<void>,
  input: string
): Promise<void> => {
  if (!input || input.length === 0) {
    return;
  }
  return save(input);
};
