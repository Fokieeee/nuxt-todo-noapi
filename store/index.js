export const state = () => ({
  tasks: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ],
});

export const getters = {
  tasks: (state) => state.tasks,
  currentTask: (state) => (id) => {
    return state.tasks.find((e) => e.id == id).title;
  },
};

export const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  ADD_TASK(state, task) {
    state.tasks.unshift({ title: task[0], completed: false, id: task[1] });
  },
  REMOVE_TASK(state, task) {
    state.tasks = state.tasks.filter((item) => item.id !== task.id);
  },
  TOGGLE_TASK(state, task) {
    task.completed = !task.completed;
  },
  EDIT_TASK: (state, task) => {
    state.tasks.map((e) => {
      if (e.id == task.id) {
        return (e.title = task.title);
      }
    });
  },
};

// export const actions = {
//   async fetch({ commit }) {
//     const tasks = await this.$axios.$get(
//       "https://jsonplaceholder.typicode.com/todos?_limit=5"
//     );
//     commit("SET_TASKS", tasks);
//   },
// };
