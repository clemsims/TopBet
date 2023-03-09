import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import api from "../../services/api"

import img from "../index/images/img-1.png";

export default class Main extends Component {
    state = {
        loading: false,
        card: []
    }

    handleGoPage(e) {
        this.props.history.push(e.target.name);
    }

    async componentWillMount() {
        if (!sessionStorage.getItem("username")) this.props.history.push("/login");
        else if (sessionStorage.getItem("loading")) {
            this.setState({ loading: true });
            let response = await api.get("/rodada");

            const { card } = this.state;

            if (response.data.length === 0) {
                card.push(
                    <div class="card">
                        <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Não há rodadas disponíveis</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary w-100" disabled>Indisponível</button>
                        </div>
                    </div>
                );
            }

            for (const i of response.data) {
                if (i.active) {
                    card.push(
                        <div class="card">
                            <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                            <div class="card-body">
                                <h5 class="card-title text-center">{i.nameRodada}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block" name="/rodada/play_rolled" onClick={(event) => {
                                    sessionStorage.setItem("nameRodada", i.nameRodada);
                                    this.handleGoPage(event);
                                }
                                }>Jogar</button>
                            </div>
                        </div>
                    );
                }
            }
        }
        else if (!sessionStorage.getItem("loading")) {
            let response = await api.get("/rodada");

            const { card } = this.state;

            if (response.data.length === 0) {
                card.push(
                    <div class="card">
                        <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Não há rodadas disponíveis</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-block" disabled>Indisponível</button>
                        </div>
                    </div>
                );
            }

            for (const i of response.data) {
                if (i.active) {
                    card.push(
                        <div class="card">
                            <img class="card-img-top img-fluid" src={img} alt="discordpy.png" />
                            <div class="card-body">
                                <h5 class="card-title text-center">{i.nameRodada}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-block" name="/rodada/play_rolled" onClick={(event) => {
                                    sessionStorage.setItem("nameRodada", i.nameRodada);
                                    this.handleGoPage(event);
                                }
                                }>Jogar</button>
                            </div>
                        </div>
                    );
                }
            }

            if (card.length === 0) {
                card.push(
                    <div class="card">
                        <img class="card-img-top img-thumbnail img-fluid" src={img} alt="discordpy.png" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Não há rodadas disponíveis</h5>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-block" disabled>Indisponível</button>
                        </div>
                    </div>
                );
            }
            this.setState({ loading: false })
        };
    }

    closeLoading = () => {
        setTimeout(() => {
            this.setState({ loading: false })
            sessionStorage.removeItem("loading");
        }, 4000);
    }

    componentDidMount() {
        this.closeLoading();
    }

    render() {

        return (
            <div>
                <LoadingScreen
                    loading={this.state.loading}
                    bgColor='#1E1E1E'
                    spinnerColor='#318E58'
                    textColor='white'
                    text={`Seja bem vindo ${sessionStorage.getItem("username")}`}
                >
                    <Header />
                    <main role="main" className="container-fluid w-100">
                        <div class="row jumbotron jumbotron">
                            <div class="container-fluid">
                                <h1 class="display-3">Football Betting</h1>
                                <p className="lead">Abaixo está algumas rodadas disponíveis para jogar, para iniciar suas apostas, escolha uma delas e aperte em "jogar".<br />
                                </p>
                            </div>
                        </div>

                        {/* Looping com as rodadas */}
                        <div class="card-deck">
                            {this.state.card.map((key, i) => key)}
                        </div>
                    </main>
                    <Footer />
                </LoadingScreen>
            </div>
        );
    }
}
