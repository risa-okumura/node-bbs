import React,{Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            content : "",
        };
        //bindしないとフォームに入力できなくなる.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //フォーム入力されたらstateを変更する.
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //「投稿する」ボタンが押されたら、DBに登録し、表示内容を更新する.
    handleSubmit(event){
        event.preventDefault();
        axios
            .post('/registerArticle',{
                name: this.state.name,
                content: this.state.content
            })
            .then(response =>{
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
        //Listコンポーネントから受け取った更新メソッドを呼び出す.
        this.props.reloadArticles();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">お名前</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                <br></br>
                <label htmlFor="content">投稿内容</label>
                <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea>
                <br></br>
                <input type="submit" value="投稿する"></input>
            </form>
        );
    }

}