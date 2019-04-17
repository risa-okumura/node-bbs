import React,{Component} from 'react';
import axios from 'axios';

//記事情報をリストで表示するコンポーネント.
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    //apiから記事情報を取得する.
    getArticles (){
        axios
        .get('/article')
        .then(results => {
            const data = results.data;
            console.log(data);
            //取得した情報をstateのarticlesにセットする.
            this.setState({
                //スプレッド演算子で全オブジェクトリテラルを配列にセット.
                articles: [...data]
            });
        });
    }

    
    //本当は使ってはいけない
    componentWillMount(){
        this.getArticles();
    };
    
    // componentDidUpdate(){
    //     //ここで再度読み込み？
    //     this.getArticles();
    // };

    render(){
        //Arrayオブジェクトのmapメソッドを使用する.
        //配列内の要素を順に取り出して加工.
        const articles = this.state.articles.map(article =>{
            //リスト項目の追跡のためにkey属性（一意のキー）を付与する.
            return <li key={article.id}>{article.name}さん:{article.content}</li>;
        }) 
        
        return (
            <div>
            <ul>
                {articles}
            </ul>
        </div>
        )
    }
}
