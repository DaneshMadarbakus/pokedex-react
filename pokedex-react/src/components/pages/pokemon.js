import React, { Component } from 'react';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            livePokemon: []
        };
        this.loadPokemon = this.loadPokemon.bind(this);
    }

    loadPokemon(e) {
        console.log('clicked', e.target.innerHTML);

        fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.innerHTML}`)
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                this.setState({
                    livePokemon: result
                });
            },
            (error) => {

                console.log('error');

            }
            )
    }

    componentDidMount() {
        console.log(this.props.match.params.topicId);
        fetch(`https://pokeapi.co/api/v2/generation/${this.props.match.params.topicId}`)
            .then(res => res.json())
            .then((result) => {
                result.pokemon_species.reverse();
                this.setState({
                    isLoaded: true,
                    items: result.pokemon_species
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoaded: false
        });
        fetch(`https://pokeapi.co/api/v2/generation/${nextProps.match.params.topicId}`)
            .then(res => res.json())
            .then(
            (result) => {
                result.pokemon_species.reverse();
                this.setState({
                    isLoaded: true,
                    items: result.pokemon_species
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    render() {
        const { error, isLoaded, items, livePokemon } = this.state;
        const { match } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (!livePokemon.sprites) {
            return (
                <div>
                    <h1>Pokemon generation {match.params.topicId}</h1>
                    <ul>
                        {items.map(item => (
                            <li key={item.name} onClick={this.loadPokemon}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

            )
        } else {
            return (
                <div>
                    <h1>Pokemon generation {match.params.topicId}</h1>
                    <ul>
                        {items.map(item => (
                            <li key={item.name} onClick={this.loadPokemon}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <div className="pokemon-holder">
                        <img src={livePokemon.sprites.front_default} />
                    </div>
                </div>

            )
        }
    }
}

export default Pokemon;
