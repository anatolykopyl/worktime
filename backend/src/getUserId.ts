export default async function getUserId(token: string, authProvider: string) {
  switch (authProvider) {
    case 'yandex':
      return getYandexUserId(token);
  }
}

async function getYandexUserId(token: string) {
  const baseUrl = 'https://login.yandex.ru/info';
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `OAuth ${token}`
    }
  })
  return (await response.json()).id;
}
