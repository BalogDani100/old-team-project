import app from './app.js';
import { PORT } from './constants/base.js';
import { validateEnv } from './config/env.js';

validateEnv();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on ${PORT}...`);
});
