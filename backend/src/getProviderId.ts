export default async function getProviderId(token: string, authProvider: string) {
  switch (authProvider) {
    case 'yandex':
      return getYandexId(token);
  }
}

async function getYandexId(token: string) {
  const baseUrl = 'https://login.yandex.ru/info';
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `OAuth ${token}`
    }
  })
  return (await response.json()).id;
}
