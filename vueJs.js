const app = new Vue({
    el:'#app',
    data:{
        titulo:'TODO LIST',
        items: [],
        newItem:'',
        id:0
    },
    methods:{
        addItem(){
            if(this.newItem != ''){
                this.items.unshift({
                    msg: this.newItem, checked:false, id: this.id
                });
                this.id++;
                this.newItem='';
                $('#todo-item').focus();
            }
        },
        deleteItem(index){
           this.items.splice(index,1);
           $('#todo-item').focus();
        },
        changeIcon(item){
            return (item.checked) ? 'check_box' : 'check_box_outline_blank';
         }
    }
});