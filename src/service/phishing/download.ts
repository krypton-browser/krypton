import electron from 'electron';
import fs from 'fs';
import axios from 'axios';
import path from 'path';
import util from 'util';
import stream from 'stream';

const pipeline = util.promisify(stream.pipeline);

const root =
  (electron?.app || electron.remote?.app)?.getPath('userData') || __dirname;

export async function isModified(): Promise<boolean> {
  const response = await axios({
    method: 'HEAD',
    url: 'http://data.phishtank.com/data/online-valid.json',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38',
    },
  });
  console.log(response);
  return true;
}

export default async function download(): Promise<
  'complete' | 'nothing' | 'error'
> {
  const response = await axios({
    method: 'GET',
    url: 'http://data.phishtank.com/data/online-valid.json',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 Edg/93.0.961.38',
    },
  });
  if (response.status !== 200) return 'error';
  console.log(response.headers.etag);
  try {
    console.log(response);
    await pipeline(
      response.data.pipe(
        fs.createWriteStream(path.resolve(root, 'phishing.data'))
      )
    );
    return 'complete';
  } catch (err) {
    console.log(err);
    return 'error';
  }
}
