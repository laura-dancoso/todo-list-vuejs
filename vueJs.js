const app = new Vue({
    el:'#app',
    data:{
        titulo:'TODO LIST',
        items:[],
        newItem:'',
        id:0
    },
    methods:{
        addItem(){
            if(this.newItem != ''){
                this.items.push({
                    msg: this.newItem, checked:false, id: this.id
                });
                this.id++;
                this.newItem='';
                $('#todo-item').focus();
            }
        },
        deleteItem(id){
           // see https://gist.github.com/scottopolis/6e35cf0d53bae81e6161662e6374da04
           //encuentro el id del elemento a borrar
           let removeIndex = this.items.map(i=>i.id).indexOf(id);
           this.items.splice(removeIndex,1);
           $('#todo-item').focus();
        },
        changeIcon(item){
            return (item.checked) ? 'check_box' : 'check_box_outline_blank';
         }
    }
})