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
    darkTheme: true,
  },
  mutations: {
    addCategory(state, category) {
      if (category && !state.categories.includes(category)) {
        state.categories = [...state.categories, category];
      }
    },
    removeCategory(state, categoryId) {
      state.categories = state.categories.filter((element) => element.id !== categoryId);
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        if (newTask.category && newTask.category.id === categoryId) newTask.category = undefined;
        return newTask;
      });
    },
    assignCategory(state, { name, category }) {
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        if (newTask.name === name) {
          newTask.category = category;
        }
        return newTask;
      });
    },
    updateCategory(state, category) {
      state.categories = state.categories.map((c) => {
        if (c.id === category.id) {
          return category;
        }
        return c;
      });
    },

    addTask(state, name) {
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
      state.tasks = state.tasks.filter((task) => task.name !== name);
    },
    removeAllTasks(state) {
      state.tasks = [];
    },
    startTask(state, name) {
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
      state.tasks = state.tasks.map((task) => {
        const newTask = task;
        newTask.running = false;
        newTask.totalTime = 0;
        newTask.startedAt = undefined;
        return newTask;
      });
      state.lastReset = new Date();
    },

    setMidnightReset(state, value) {
      state.midnightReset = !!value;
    },
  },
  plugins: [vuexLocal.plugin],
});
