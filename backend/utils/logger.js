class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    Logger.instance = this;
  }

  log(message) {
    console.log(`[Ajantha Yoga Logger]: ${message}`);
  }

  error(message) {
    console.error(`[Ajantha Yoga Error]: ${message}`);
  }
}

const loggerInstance = new Logger();

module.exports = loggerInstance;