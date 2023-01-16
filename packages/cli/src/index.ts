import { hexColors, Logger } from '@termifier/logger';
import { centerMessage } from '@termifier/utilities';

const logger = new Logger();

console.log(centerMessage(logger.buildMessage('WELCOME', 'back, User !\n', { labelColor: hexColors.crimson }).join(' ')));
logger.error('Hello world !');
