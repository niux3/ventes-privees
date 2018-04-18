import React, { Component } from 'react';
import slug from 'slug';

export default class CharacterItem extends Component{
    render(){
        let data = this.props.data;
        let linkTo = data.urls.map((link)=>{
            return <a href={link.url} target="_blank">{link.type}</a>
        });
        let id = data.id;
        let name = slug(data.name.trim().toLowerCase(), '-');
        
        //pour la minification et le build.... 
        let prefixUrl = window.location.href.substr(0, window.location.href.lastIndexOf('/#/')) 
        return (
            <article>
                <div className="illustration">
                    <a href={`${prefixUrl}/#/character/show/${id}/${name}`}>
                        <img src={data.thumbnail.path + '.' + data.thumbnail.extension} alt={data.name} />
                    </a>
                </div>
                <div className="caption">
                    <h2>{data.name}</h2>
                    <nav>
                        {linkTo}
                    </nav>
                </div>
            </article>
        );
    }
} 