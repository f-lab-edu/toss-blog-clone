import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.mjs',
  output: {
    filename: 'main.mjs',
    path: path.resolve(__dirname, 'dist'),
  },
};
