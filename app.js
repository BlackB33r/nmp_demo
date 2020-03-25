const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = "debug";

logger.debug("Mi primera app con npm.");
logger.info("Se ejecuto correctamente");
logger.warn("No se encontro el archivo");
logger.error("La app no se pudo conectar a la base de datos");
logger.fatal("La app no se pudo conectar a la DB");