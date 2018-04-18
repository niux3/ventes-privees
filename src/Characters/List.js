import React, { Component } from 'react';

export default class List extends Component{
    getList(data){
        return data.map((row, i) => {
            return (
                <li key={i}><a href={row.resourceURI} target="_blank">{row.name}</a></li>
            );
        });
    }
    render(){    
        return (
            <div className="listLinks">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.getList(this.props.data)}
                </ul>
            </div>
        );
    }
}