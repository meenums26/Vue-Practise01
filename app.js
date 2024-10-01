Vue.createApp({
    data(){
        return {
            goals : [],
            enteredValue : ''
        }
    },
    methods : {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = ''
        }
    }
}).mount('#app');


// const inputEl = document.querySelector('input');
// const buttonEl = document.querySelector('button');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click',()=>{
//     const listCont = document.createElement('li');
//     listCont.textContent = inputEl.value;
//     listEl.appendChild(listCont);
//     inputEl.value = '';
// })