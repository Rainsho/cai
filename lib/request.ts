const message = console;

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
    if (response.ok) {
      const type = response.headers.get('Content-Type');

      return type && /application\/json/i.test(type) ? response.json() : response.text();
    }

    return response.json().then(e => {
      message.error(e.message);
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
