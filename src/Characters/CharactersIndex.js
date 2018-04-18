import React, { Component } from 'react';
import ApiMarvel from '../ApiMarvel';
import CharacterItem from './CharacterItem';

export default class CharactersIndex extends Component{
    constructor(props){
        super(props);

        this.state = {
            characterItemsList : []
        }
    }

    componentWillMount(){
        let urlApiMarvel = new ApiMarvel().getUrl();
        fetch(urlApiMarvel).then(response =>{
            return response.json();
        }).then(d =>{
            var dataFromServer = d.data;
            let characterItemsList = dataFromServer.results.map(character =>{
                return (
                    <CharacterItem key={character.id} data={character} />
                )
            });
            this.setState({
                characterItemsList : characterItemsList
            });
            console.log('state characters >>>>', this.state);
        });
    }

    render(){
        return (
            <section id="characters-list">
                <h1>Liste des super héros</h1>
                <div className="content">
                    <div className="grid-3 has-gutter">{this.state.characterItemsList}</div>
                </div>
            </section>
        );
    }
}