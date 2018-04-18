import React, { Component } from 'react';

class PokemonSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.onFormSubmit}>
                <label>
                    Generation of pokemon
                    <select name="generation" value={this.props.generation} onChange={this.props.onFormChange}>
                        <option value={null}>All</option>
                        <option value="1">Generation 1</option>
                        <option value="2">Generation 2</option>
                        <option value="3">Generation 3</option>
                        <option value="4">Generation 4</option>
                        <option value="5">Generation 5</option>
                        <option value="6">Generation 6</option>
                        <option value="7">Generation 7</option>
                    </select>
                </label>
                <label>
                    Pokemon type
                    <select name="firstType" value={this.props.firstType} onChange={this.props.onFormChange}>
                        <option value={null}>Not Selected</option>
                        <option value="Normal">Normal</option>
                        <option value="Fire">Fire</option>
                        <option value="Water">Water</option>
                        <option value="Grass">Grass</option>
                        <option value="Electric">Electric</option>
                    </select>
                </label>
                <label>
                    2nd Pokemon type
                    <select name="secondType" value={this.props.secondType} onChange={this.props.onFormChange}>
                        <option value={null}>None</option>
                        <option value="Normal">Normal</option>
                        <option value="Fire">Fire</option>
                        <option value="Water">Water</option>
                        <option value="Grass">Grass</option>
                        <option value="Electric">Electric</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default PokemonSearch;
