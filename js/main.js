const { createApp } = Vue

  createApp({
    data() {
      return {
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
    }
  }).mount('#app')