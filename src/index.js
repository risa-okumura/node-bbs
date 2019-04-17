import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Title from './Title/Title.js';
import List from './List/List.js';
import Form from './Form/Form.js';


class App extends Component {
    render(){
        return (
        <div>
            <Title />
            <Form />
            <List />
        </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('content'));
