/* eslint-disable  @typescript-eslint/no-explicit-any */
export const response = (result?: any): string =>
  result ? 'success' : 'failure';
