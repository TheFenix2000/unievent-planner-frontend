export async function callApi<T>(
  path: string,
  method: string,
  body?: object,
): Promise<T> {
  const baseURL: string = import.meta.env.VITE_APP_API_BASE_URL;
  const allowedMethods: string[] = ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'];

  if (!allowedMethods.includes(method.toUpperCase())) {
    throw new Error(`Method ${method} is not allowed.`);
  }

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(baseURL + path, options);
  if (!response.ok) {
    throw new Error(
      `${method} ${path} failed with status ${response.status}: ${response.statusText}`,
    );
  }
  return response.json();
}
