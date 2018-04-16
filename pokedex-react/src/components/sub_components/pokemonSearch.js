import React, { Component } from 'react';

class PokemonSearch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.firstType);
    }

    render() {
        return (
            <form>
                <label>
                    Generation of pokemon
                    <select value={this.props.generation} /*onChange={this.handleChange}*/>
                        <option value={this.props.generation}>{this.props.generation}</option>
                        <option value="Generation 1">Generation 1</option>
                        <option value="Generation 2">Generation 2</option>
                        <option value="Generation 3">Generation 3</option>
                        <option value="Generation 4">Generation 4</option>
                        <option value="Generation 5">Generation 5</option>
                        <option value="Generation 6">Generation 6</option>
                        <option value="Generation 7">Generation 7</option>
                    </select>
                </label>
                <label>
                    Pokemon type
                    <select value={this.props.firstType} /*onChange={this.handleChange}*/>
                        <option value="{this.props.firstType}">{this.props.firstType}</option>
                        <option value="Normal">Normal</option>
                        <option value="Fire">Fire</option>
                        <option value="Water">Water</option>
                        <option value="Grass">Grass</option>
                        <option value="Electric">Electric</option>
                    </select>
                </label>
                <label>
                    2nd Pokemon type
                    <select value={this.props.secondType} /*onChange={this.handleChange}*/>
                        <option value="{this.props.secondType}">{this.props.secondType}</option>
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
