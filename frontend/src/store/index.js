import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    categories: [],
    tasks: [],
    midnightReset: false,
    lastReset: new Date(),
    updatedAt: new Date(),
    darkTheme: true,
  },
  mutations: {
    addCategory(state, category) {
      this.commit('updated');
      if (category && !state.categories.includes(category)) {
        state.categories = [...state.categories, category];
      }
    },
    removeCategory(state, category) {
      this.commit('updated');
      state.categories = state.categories.filter((element) => element !== category);
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        if (newTask.category === category) newTask.category = undefined;
        return newTask;
      });
    },
    assignCategory(state, { name, category }) {
      this.commit('updated');
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        if (newTask.name === name) {
          newTask.category = category;
        }
        return newTask;
      });
    },
    setCategories(state, categories) {
      state.categories = categories;
    },

    addTask(state, name) {
      this.commit('updated');
      if (name) {
        const task = {
          name,
          startedAt: undefined,
          running: false,
          totalTime: 0,
          category: undefined,
        };
        state.tasks = [...state.tasks, task];
      }
    },
    removeTask(state, name) {
      this.commit('updated');
      state.tasks = state.tasks.filter((task) => task.name !== name);
    },
    removeAllTasks(state) {
      this.commit('updated');
      state.tasks = [];
    },
    startTask(state, name) {
      this.commit('updated');
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        if (newTask.name === name) {
          newTask.running = true;
          newTask.startedAt = Date.now();
        } else if (newTask.running) {
          newTask.running = false;
          newTask.totalTime += Date.now() - newTask.startedAt;
          newTask.startedAt = undefined;
        }
        return newTask;
      });
    },
    stopTask(state, name) {
      this.commit('updated');
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        if (newTask.name === name) {
          newTask.running = false;
          newTask.totalTime += Date.now() - newTask.startedAt;
          newTask.startedAt = undefined;
        }
        return newTask;
      });
    },
    resetTasks(state) {
      this.commit('updated');
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        newTask.running = false;
        newTask.totalTime = 0;
        newTask.startedAt = undefined;
        return newTask;
      });
      state.lastReset = new Date();
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    setMidnightReset(state, value) {
      state.midnightReset = !!value;
    },

    updated(state, at) {
      state.updatedAt = at ?? new Date();
    },
  },
  plugins: [vuexLocal.plugin],
});
