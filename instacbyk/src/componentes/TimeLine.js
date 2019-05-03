import React, { Component } from 'react';
import Foto from './Foto';

export default class TimeLine extends Component {

    constructor() {
        super();
        this.state = { fotos: [] };
    }

    componentDidMount() {
        this.carregaFotos(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.carregaFotos(nextProps);
    }

    carregaFotos(props) {
        let urlPerfil = 'https://instalura-api.herokuapp.com/api/public/fotos/rafael';

        if (props.login !== undefined) {
            urlPerfil = `https://instalura-api.herokuapp.com/api/public/fotos/${props.login}`;
        }

        fetch(urlPerfil)
            .then(response => response.json())
            .then(fotos => {
                this.setState({ fotos: fotos })
            });
    }

    render() {
        return (

            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <Foto key={foto.id} foto={foto} />)
                }
            </div>
        )
    }
}
