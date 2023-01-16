import { createTsupConfig } from '../../scripts/tsup.config';

export default createTsupConfig({ globalName: 'TermifierLogger', target: 'es2020' });