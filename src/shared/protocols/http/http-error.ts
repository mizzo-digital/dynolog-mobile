interface HttpErrorProps<ErrorType = unknown> {
  readonly statusCode: number;
  readonly body: ErrorType;
}

export class HttpError<ErrorType = unknown> extends Error {
  readonly statusCode: number;

  readonly body: ErrorType;

  constructor({ statusCode, body }: HttpErrorProps<ErrorType>) {
    super('Request Error');

    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.body = body;
  }
}
