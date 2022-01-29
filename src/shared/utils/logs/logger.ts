import { format } from 'date-fns';

interface InfoProps {
  tag: string;
  content: any;
}

interface ErrorProps {
  tag: string;
  content: any;
}

type LogLevel = 'info' | 'error';

interface LogProps {
  level: LogLevel;
  content: string;
}

const logColorsMap = (content: string) => ({
  info: `\u001b[44m\u001b[30m${content}\u001b[0m`,
  error: `\u001b[41m\u001b[30m${content}\u001b[0m`,
});

class Logger {
  private static getCurrentTime() {
    const currentDate = new Date();
    const milliseconds = currentDate.getMilliseconds();

    return `${format(currentDate, 'hh:mm:ss')}.${milliseconds}`;
  }

  private static formatLog(tag: string, content: string) {
    return `[${Logger.getCurrentTime()}] - [${tag}]: ${content}`;
  }

  private static log({ level, content }: LogProps) {
    console.log(`${logColorsMap(content)[level]}`);
  }

  public info({ tag, content }: InfoProps) {
    const serializedContent = JSON.stringify(content);

    Logger.log({
      level: 'info',
      content: Logger.formatLog(tag, serializedContent),
    });
  }

  public error({ tag, content }: ErrorProps) {
    const serializedContent = JSON.stringify(content);

    Logger.log({
      level: 'error',
      content: Logger.formatLog(tag, serializedContent),
    });
  }
}

export const logger = new Logger();
