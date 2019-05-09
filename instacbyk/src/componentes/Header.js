import React, { Component } from 'react'

export default class Header extends Component {

    pesquisa(event){
        event.preventDefault();

        fetch(`https://instalura-api.herokuapp.com/api/public/fotos/${this.loginPesquisado.value}`)
        .then(response => response.json())
        .then(fotos => {
            console.log(fotos);
        })
    }

    render() {
        return (
            <header className="header container">
                <h1 className="header-logo">
                    Instalura
          </h1>

                <form className="header-busca" onSubmit={this.pesquisa.bind(this)}>
                    <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" />
                    <input type="submit" value="Buscar" className="header-busca-submit" ref={input => this.loginPesquisado = input} />
                </form>

                <nav>
                    <ul className="header-nav">
                        <li className="header-nav-item">
                            <a href="#/teste">

                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}