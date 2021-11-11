Vue.component('messages', {
    props: ['messages'],
    template: `
    <div>
        <div v-for="message in messages" class="mymessage">
                {{message}}
        </div>
    </div>
    `
})
new Vue({
    el: '#app',
    data: {
        messages: [                                     // Массив сообщений
            'My message'
        ],
        newMessage: ""                                  // Сообщение, которое ввёл пользователь
    },
    methods: {
        addNewMessage: function () {                    // При клике на кнопку
            if (this.newMessage != "") {                // Если сообщение не пустое
                this.messages.push(this.newMessage);    // Добавляем в массив сообщение
                this.newMessage = "";                   // Очищаем значение нового сообщения
            }
        }
    }
});