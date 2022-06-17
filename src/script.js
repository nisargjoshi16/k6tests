/* import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '10s',
};
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
 */

import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { target: 10, duration: '5s' },
    { target: 0, duration: '5s' },
  ],
};

export default function () {
  const result = http.get('https://test-api.k6.io/public/crocodiles/');
  check(result, {
    'http response status code is 200': result.status === 200,
  });
}