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
                    done: false
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
        removeToDo(todo) {
            this.toDos.splice(this.toDos.indexOf(todo), 1);
        },
        addToDo() {
            if (this.newToDo.trim().length > 0) {
                this.toDos.push({
                    text: this.newToDo,
                    done: false
                })
            };
            this.newToDo = '';
        },
        toggleDone(todo) {
            console.log('toggle');
            //come "togglare" un valore booleano
            todo.done =!todo.done;
        },
        //funzionalità extra non richiesta dalla consegna
        clearCompleted() {
            this.toDos = this.toDos.filter(todo =>!todo.done);
        }
    }
}).mount('#app')