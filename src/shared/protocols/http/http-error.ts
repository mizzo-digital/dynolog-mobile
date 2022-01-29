interface HttpErrorProps {
  readonly statusCode: number;
  readonly errorBody: string;
}

export class HttpError extends Error {
  readonly statusCode: number;

  readonly errorBody: any;

  constructor({ statusCode, errorBody }: HttpErrorProps) {
    super('Request Error');

    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.errorBody = errorBody;
  }
}
