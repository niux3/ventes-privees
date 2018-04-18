import React, { Component } from 'react';
import ApiMarvel from '../ApiMarvel';
import List from './List';

export default class CharacterShow extends Component{
    constructor(props){
        super(props);

        this.state = {
            id : this.props.params.id,
            data : {},
            comics : [],
            series : [],
            srcImg : ''
        }
    }

    componentWillMount(){
        let urlApiMarvel = new ApiMarvel().getUrl();
        fetch(urlApiMarvel).then(response =>{
            return response.json();
        }).then(d =>{
            let dataFromServer = d.data;
            let row = dataFromServer.results.filter((data)=>{
                if(data.id === parseInt(this.props.params.id)){
                    return data;
                }
            })[0];

            if(row.comics.available > 0){
                var comicsList = <List data={row.comics.items} title='Comics' />
            }

            if(row.series.available > 0){
                var seriesList = <List data={row.series.items} title='Series' />
            }

            if(row.thumbnail !== undefined){
                var src = row.thumbnail.path + '.' + row.thumbnail.extension
            }

            this.setState({
                data : row,
                comics : comicsList !== undefined? comicsList : '',
                series : seriesList !== undefined? seriesList : '',
                srcImg : src !== undefined? src : '',
            });
            console.log('state CharacterShow >>>>', this.state);
        });
    }

    render(){    
        var data = this.state.data;
        var description = this.state.data.description !== ''? <div>{this.state.data.description}</div> : ''; 
        return (
            <section id="character">
                <h1>Fiche identité</h1>
                <div className="grid-3 has-gutter">
                    <div className="illustration">
                        <img src={this.state.srcImg} alt={data.name} />
                    </div>
                    <div className="col-2">
                        <div className="highlight">
                            <h2>{this.state.data.name}</h2>
                            {description}
                        </div>
                        <div className="content">
                            {this.state.comics}
                            {this.state.series}
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}