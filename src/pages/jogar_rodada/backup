import React, { Component } from 'react';
import ReactTable from "react-table";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import 'react-table/react-table.css'

import api from "../../services/api"
import $ from "jquery";

export default class JogarRodada extends Component {
    state = {
        data: [],
        teams: [],
        select: [],
        nameRodada: ""
    }

    async componentWillMount() {
        if (!sessionStorage.getItem("username") || !sessionStorage.getItem("nameRodada")) return this.props.history.push("/main");
        let response = await api.get(`rodada/name/${sessionStorage.getItem("nameRodada")}`);
        response.data.tableAdmin.map(element => {
            this.state.teams.push(element.name);
        });

        this.state.select.push(<option>Selecione um time</option>);
        this.state.teams.map((data) =>
            this.state.select.push(<option value={data} id={data}>{data}</option>)
        );

        this.setState({ select: this.state.select });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { position, points, data } = this.state;

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.team === this.state.selectTeam) {
                $("#alert-admin").addClass("alert alert-danger").text("O time já foi adicionado, adicione outro time!");
                setTimeout(function () {
                    $("#alert-admin").removeClass("alert alert-danger").text("");
                }, 3000);
                return;
            } else if (element.position === position) {
                $("#alert-admin").addClass("alert alert-danger").text("Já existe um time na posição informada, informe outra posição!");
                setTimeout(function () {
                    $("#alert-admin").removeClass("alert alert-danger").text("");
                }, 3000);
                return;
            }
        }

        if (!points) {
            $("#alert-admin").addClass("alert alert-danger").text("Você precisa adicionar os pontos!");
            setTimeout(function () {
                $("#alert-admin").removeClass("alert alert-danger").text("");
            }, 3000);
            return;
        } else if (data.length === 20) {
            $("#alert-admin").addClass("alert alert-danger").text("O valor máximo de times é 20, não é possível adicionar mais times!");
            setTimeout(function () {
                $("#alert-admin").removeClass("alert alert-danger").text("");
            }, 3000);
            return;
        }

        let obj = {
            team: this.state.selectTeam,
            points: this.state.points,
            position: data.length + 1,
        }
        this.state.data.push(obj);

        this.setState({
            data: this.state.data
        })
        console.log(this.state.data)
    };

    removeRow = row => {
        return (
            <div className="container">
                <button className="btn btn-danger btn-block" onClick={(e) => {
                    const { data } = this.state;

                    data.splice(row.index, 1);
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        element.position = i + 1;
                    }

                    this.setState({
                        data: data
                    })
                    console.log(data)
                }}>Remover Time</button>
            </div>
        )
    }

    saveTable = async () => {
        const { data } = this.state;
        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");
        if (data.length < 1) {
            $("#alert-admin-rodada").addClass("alert alert-danger").text("A tabela de times não pode ser vazia!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
            }, 3000);
            return;
        } else if (data.length < this.state.teams.length) {
            $("#alert-admin-rodada").addClass("alert alert-danger").text("Você precisa adicionar todos os times na tabela!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
            }, 3000);
            return;
        }

        try {
            let response = await api.post('users/enviar/rodada', { user: sessionStorage.getItem("username"), tableUser: this.state.data, nameRodada: sessionStorage.getItem("nameRodada") });
            let updateRodada = await api.post(`rodada/update/${sessionStorage.getItem("nameRodada")}/${sessionStorage.getItem("username")}`);

            let rodadas = await api.get(`rodada/name/${sessionStorage.getItem("nameRodada")}`);

            let pontos = 0;

            for (const i of rodadas.data.tableAdmin) {
                for (const j of data) {
                    if (i.name === j.team) pontos += 1;
                    if (i.points === j.points) pontos += 1;
                    if (i.position === j.position) pontos += 1;
                }
            }

            let ranking = await api.post("ranking/create", { username: sessionStorage.getItem("username"), name: sessionStorage.getItem("name"), points: pontos });

            $("#alert-admin-rodada").addClass("alert alert-success").text("Rodada jogada com sucesso! Visualize sua pontuação no ranking.");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");

            this.setState({ data: [] });
            sessionStorage.removeItem("nameRodada");

            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-success").text("");
                $(".modal-backdrop").remove();
                this.props.history.push("/main");
            }, 3000);

            await console.log(response);
        } catch (error) {
            $("#alert-admin-rodada").addClass("alert alert-danger").text("Ocorreu um erro ao jogar a rodada!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
            }, 3000);
            console.log(error);
        }

    }

    render() {
        const { data, size } = this.state;

        return (
            <div>
                <Header />
                <div className="container text-center p-2">
                    <div class="" role="alert" id="alert-admin" data-dismiss="alert"></div>
                    <div className="container"><p className="h2">{sessionStorage.getItem("nameRodada")}</p></div>
                    <form onSubmit={this.handleSubmit}>

                        <label>
                            <select name="selectTeam" onChange={(event) => { this.handleOnChange(event) }}>
                                {this.state.select}
                            </select>
                        </label>{" "}
                        <label>
                            <input
                                type="number"
                                name="points"
                                id="points"
                                placeholder="Pontos"
                                onChange={(event) => this.handleOnChange(event)}
                            />
                        </label>
                    </form>

                    <div className="container">
                        <button className="btn btn-primary" id="btn-add" onClick={this.handleSubmit}>Adicionar time</button>&nbsp;
                        <button className="btn btn-success" id="btn-add" data-toggle="modal" data-target="#modalSalvarTabela">Criar rodada</button>
                    </div>

                    <div className="container mt-5">
                        <ReactTable
                            previousText="Anterior"
                            nextText="Próximo"
                            noDataText="Sem dados"
                            filterable={true}
                            data={data}
                            columns={[
                                {
                                    Header: "#",
                                    accessor: "position",
                                },
                                {
                                    Header: "Time",
                                    accessor: "team",
                                },
                                {
                                    Header: "Pontos",
                                    accessor: "points",
                                },
                                {
                                    Header: "Remover",
                                    Cell: this.removeRow
                                }
                            ]}
                            defaultPageSize={36}
                            className="-striped -highlight"
                        />
                    </div>

                    <div class="modal fade" id="modalSalvarTabela" role="dialog" aria-labelledby="modalSalvarTabelaLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="" role="alert" id="alert-admin-rodada" data-dismiss="alert"></div>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalSalvarTabelaLabel">Confirme se você deseja enviar sua tabela</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" class="btn btn-primary" id="btn-confimarRodada" onClick={this.saveTable}>Confirmar &nbsp;<i className="" id="icon-loading"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}