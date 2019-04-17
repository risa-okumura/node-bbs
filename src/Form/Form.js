import React,{Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            content : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        axios
            .post('/registerArticle',{
                name : this.state.name,
                content: this.state.content
            })
            .then(response =>{
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
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