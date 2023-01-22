import { createTsupConfig } from '../../scripts/tsup.config';

export default createTsupConfig({ globalName: 'TermifierUtilities', target: 'es2020' });
