import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Title from './Title/Title.js';
import ArticleList from './Article/List.js';

class App extends Component {
    render(){
        return (
        <div>
            <Title title="掲示板アプリ" />
            <ArticleList />
        </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('content'));
