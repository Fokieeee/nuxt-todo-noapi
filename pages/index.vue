<template>
  <div class="hero-body is-flex-direction-column">
    <section>

        <input v-model="newTitle" placeholder="Add new task"></input>
        <button @click="addTask" class="ml-3">Add</button>

    </section>

    <div
      class="is-flex is-flex-wrap-wrap is-justify-content-center mt-6"
      :style="{ gap: '2rem' }"
    >
      <Task
        v-for="task in this.$store.state.tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      newTitle: "",
    };
  },

  methods: {
    addTask() {
      if (this.newTitle) {
        let id = new Date();
        this.$store.commit("ADD_TASK", [this.newTitle, id.getTime()]);
        this.newTitle = "";
      }
    },
    toggleTask() {
      this.$store.commit("TOGGLE_TASK", task.id);
    },
  },
};
</script>
