const { createApp } = Vue

  createApp({
    data() {
      return {
        doneClass: 'done',
        toDos : [
            {
                text: 'Buy milk',
                done: false
            },

            {
                text: 'Drink tea',
                done: true
            },

            {
                text: 'Pay rent',
                done: false
            },

            {
                text: 'Learn Vue.js',
                done: false
            },

            {
                text: 'Practice German',
                done: false
            }
        ]
      }
    },
    methods: {
        removeToDo(todo){
            //console.log('clicked');
            //console.log(todo);
            //console.log(this.toDos.indexOf(todo));
            this.toDos.splice(this.toDos.indexOf(todo),1);
        }
    }
  }).mount('#app')