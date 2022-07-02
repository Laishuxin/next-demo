import log, { Logger } from 'loglevel'
export const logger: Logger = log.noConflict()
logger.enableAll()
makePrefix(logger, '[COMMON LOGGER]: ')

function makePrefix(logger: Logger, prefix: string = '') {
  const methods = ['track', 'debug', 'error', 'log', 'warn', 'info']

  methods.forEach(method => {
    const _originMethod = logger[method]

    logger[method] = (...args: any) => _originMethod(prefix, ...args)
  })
}
