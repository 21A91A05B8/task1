import React, { Component } from 'react'
import Name from './fruits'

class FruitsCollection extends Component {
    render() {
        return (
            <div>
                {this.props.names.map(name => <Name name = {name}/>)}
            </div>
        )
    }
}

export default FruitsCollection