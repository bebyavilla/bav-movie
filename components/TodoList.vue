<template>
  <div class="todo-list-item">
    <div class="list">
      <div class="container">
      <div v-if="editMode" class="todo-edit">
        <div class="index-column">{{ index + 1 }}.</div>

        <ApolloMutation
          :mutation="
            (gql) =>
              gql`
                mutation MyMutation($id: Int!, $content: String!) {
                  update_TodoList_by_pk(
                    pk_columns: { id: $id }
                    _set: { content: $content }
                  ) {
                    id
                    content
                  }
                }
              `
          "
          :variables="{ id: todoItem.id, title: editedTodo }"
          :refetchQueries="refetchQueriesAfterMyMutation"
        >
          <template v-slot="{ mutate, error }">
            <input
              v-model="editedTodo"
              @keyup.enter="mutate()"
              type="text"
              class="edit-column"
            />

            <!-- <button :disabled="loading" @click="mutate()">Click me</button> -->
            <p v-if="error">An error occurred: {{ error }}</p>
          </template>
        </ApolloMutation>
      </div>
      <div v-else class="todo">{{ index + 1 }}. {{ todoItem.content }}</div>

      <ApolloMutation
        :mutation="
          (gql) => gql`
            mutation DeleteTodo($id: Int!) {
              delete_TodoList_by_pk(id: $id) {
                id
                content
              }
            }
          `
        "
        :variables="{ id: todoItem.id }"
        :update="refetchQueriesAfterMyMutation"
      >
        <template v-slot="{ mutate, error }">
          <button @click="mutate()" class="action">Delete</button>

          <!-- <button :disabled="loading" @click="mutate()">Click me</button> -->
          <p v-if="error">An error occurred: {{ error }}</p>
        </template>
      </ApolloMutation>
      <button @click="editHandler" class="action">Edit</button>
    </div>
  </div>
  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
  name: "TodoList",
  props: {
    index: Number,
    todoItem: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.editedTodo = this.todoItem.body;
  },
  computed: {
    refetchQueriesAfterMyMutation() {
       return [
        {
          query: gql`
            query MyQuery {
              TodoList {
                id
                content
              }
            }
          `,
        },
      ];
    },
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    editHandler() {
      this.editMode ? this.editTodo() : this.changeEditMode();
    },
    editTodo() {
      this.isEmpty = !this.editedTodo;
      if (!this.isEmpty) {
        this.$emit("edit-todo", this.todoItem.id, this.editedTodo);
        this.changeEditMode();
      }
    },
  },
};
</script>

<style>
/* input{
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center
}
.todo-form{
  margin-top: 30px;
}
.todo{
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  margin-top: 10px;
  padding:10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}

h3{
  margin: 0px;
  padding: 0px;
}
li{
  list-style-type: none;
  width: 50%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216)
}
.content{
  flex:1;
}
i{
  cursor: pointer;
  color: red;
} */
</style>