import {Component} from 'react'

export class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: ""
        }
    }
    render() {
        return (
            <h1>Todos</h1>
        )
    }
}