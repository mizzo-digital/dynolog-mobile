interface HttpErrorProps {
  readonly statusCode: number;
  readonly body: string;
}

export class HttpError extends Error {
  readonly statusCode: number;

  readonly body: any;

  constructor({ statusCode, body }: HttpErrorProps) {
    super('Request Error');

    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.body = body;
  }
}
