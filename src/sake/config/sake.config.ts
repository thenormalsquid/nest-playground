import { registerAs } from '@nestjs/config';

export default registerAs('sake', () => ({ // 👈
  foo: 'bar', // 👈
}));
