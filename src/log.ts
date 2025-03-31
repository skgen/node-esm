import process from 'node:process';

export function logApp(): void {
  console.log();
  console.log('   App running');
  console.log(`   mode: ${process.env.APP_MODE}`);
  console.log(`   port: ${process.env.APP_PORT}`);
}
