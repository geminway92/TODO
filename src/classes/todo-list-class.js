import { Todo } from "./todo.class";
import { footerMostrar, marcador } from "../js/componentes.js";




export class TodoList {
    

    constructor() {
        
        // this.todos = [];
        this.cargarLocalStorage();
        this.mostrarFooter();
        this.actualizarMarcador();
        
       
    }

    nuevoTodo( todo) {
        this.todos.push(todo );
        this.mostrarFooter();
        this.actualizarMarcador();
        this.guardarLocalStorage();
        
    }
    
    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.mostrarFooter(),
        this.actualizarMarcador();
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for( const todo of this.todos) {
            
            console.log(id, todo.id)

            if( todo.id == id ) {
                
                todo.completado =  !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){ 

        localStorage.setItem('todo', JSON.stringify( this.todos ));

    }

    cargarLocalStorage(){


        this.todos = ( localStorage.getItem('todo')) 
                      ? JSON.parse(localStorage.getItem('todo')) 
                      : [] ;


        this.todos = this.todos.map( Todo.fromJson);
    }

    
    mostrarFooter( ){
        if(this.todos.length > 0 ) {
        footerMostrar.classList.remove('hidden');
        } else {
            footerMostrar.classList.add('hidden');
        }
    }
   
    actualizarMarcador( ) {
        const comprobarPendientes = this.todos.filter( todo => todo.completado == false);
        marcador.innerHTML = comprobarPendientes.length;
        // console.log(comprobarPendientes);
    }
}

