const { createApp } = Vue

createApp({
    data() {
        return {
            doneClass: 'done',
            newToDo: '',
            toDos: [
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
                    done: true
                },

                {
                    text: 'Practice German',
                    done: false
                }
            ]
        }
    },
    methods: {
        removeToDo(todo) {
            this.toDos.splice(this.toDos.indexOf(todo), 1);
        },
        addToDo() {
            if (this.newToDo.length > 0) {
                this.toDos.push({
                    text: this.newToDo,
                    done: false
                })
            };
            this.newToDo = '';
        }
    }
}).mount('#app')