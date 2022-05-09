import store from '@/store';

class Api {
  baseUrl = 'http://localhost:3000/api';

  async login(token, authProvider) {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        token,
        authProvider,
      }),
    });
    console.log(await response.json());
  }

  async sync() {
    const { tasks, categories, updatedAt } = store.state;

    const response = await fetch(`${this.baseUrl}/sync`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        user: {
          tasks,
          categories,
          updatedAt,
        },
      }),
    });

    const syncedData = await response.json();
    store.commit('setTasks', syncedData.tasks);
    store.commit('setCategories', syncedData.categories);
    store.commit('updated');
  }
}

export default new Api();
