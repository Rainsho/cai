import { Toast } from 'antd-mobile';

async function fetchExt<T, R>(path: string, method: string, body?: T): Promise<R> {
  const request =
    method === 'GET'
      ? fetch(path)
      : fetch(path, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

  return request.then(response => {
    if (response.redirected && window.location.href !== response.url) {
      window.location.replace(response.url);
      return;
    }

    if (response.ok) {
      const type = response.headers.get('Content-Type');

      return type && /application\/json/i.test(type) ? response.json() : response.text();
    }

    return response.json().then(e => {
      Toast.show(e.message);
      throw e;
    });
  });
}

export const request = {
  get: function <R = any>(url: string): Promise<R> {
    return fetchExt<never, R>(url, 'GET');
  },
  post: function <T = any, R = any>(url: string, body?: T): Promise<R> {
    return fetchExt<T, R>(url, 'POST', body);
  },
  put: function <T = any, R = any>(url: string, body?: T): Promise<R> {
    return fetchExt<T, R>(url, 'PUT', body);
  },
  delete: function <T = any, R = any>(url: string, body?: T): Promise<R> {
    return fetchExt<T, R>(url, 'DELETE', body);
  },
};
