import { createTsupConfig } from '../../scripts/tsup.config';

export default createTsupConfig({ globalName: 'TermifierCore', target: 'es2020' });
