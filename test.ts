import { isModified } from './src/service/phishing/download';

(async () => {
  const res = await isModified();
  console.log(res);
})();
