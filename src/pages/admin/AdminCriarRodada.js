import React, { Component } from 'react';
import ReactTable from "react-table";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import 'react-table/react-table.css'

import api from "../../services/api"
import $ from "jquery";

export default class Admin extends Component {
    state = {
        data: [],
        competitions: [],
        select: [],
        teams: [],
        nameRodada: ""
    }

    componentWillMount() {
        if (sessionStorage.getItem("admin") === false || !sessionStorage.getItem("username")) return this.props.history.push("/main");
        $.ajax({
            headers: { 'X-Auth-Token': '63ca4f51870a40aa8d72ad9ef3f7d753' },
            url: "http://api.football-data.org/v2/competitions?plan=TIER_ONE",
            dataType: 'json',
            type: 'GET',
        }).done(response => {
            for (const i of response.competitions) {
                this.state.competitions.push(i);
            }
            
            this.state.select.push(<option>Selecione uma liga</option>)
            this.state.competitions.map((data) =>
                this.state.select.push(<option value={data.id} id={data.name}>{data.name}</option>)
            )

            this.setState({ select: this.state.select });

            console.log(this.state.select)
        });
    }

    handleOnChange = (e) => {
        this.setState({ teams: [] });

        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        this.setState({
            [name]: value
        });

        $.ajax({
            headers: { 'X-Auth-Token': '63ca4f51870a40aa8d72ad9ef3f7d753' },
            url: `http://api.football-data.org/v2/competitions/${value}/standings?plan=TIER_ONE`,
            dataType: 'json',
            type: 'GET',
        }).done(response => {
            let obj = {};

            for (const i of response.standings) {
                if (i.stage === "REGULAR_SEASON" && i.type === "TOTAL") {
                    for (const j of i.table) {
                        this.state.teams.push(obj = {
                            name: j.team.name,
                            position: j.position,
                            points: j.points,
                            won: j.won,
                            lost: j.lost
                        });
                    }
                }
            }

            this.setState({ teams: this.state.teams });
        });
    }

    handleGetNameLiga = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)
        this.setState({
            [name]: value
        });
    }

    renderEditable = cellInfo => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    };

    removeRow = row => {
        return (
            <div className="container">
                <button className="btn btn-danger btn-block" onClick={(e) => {
                    const { data } = this.state;

                    data.splice(row.index, 1);
                    this.setState({
                        data: data
                    })
                    console.log(data)
                }}>Remover Time</button>
            </div>
        )
    }

    saveTableAdmin = async () => {
        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

        if (this.state.teams.length < 1) {
            $("#alert-admin-rodada").addClass("alert alert-danger").text("A tabela de times não pode ser vazia!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
            }, 3000);
            return;
        } else if (!this.state.competition) {
            $("#alert-admin-rodada").addClass("alert alert-danger").text("O nome da rodada não pode ser vazio!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
            }, 3000);
            return;
        }

        try {
            let response = await api.post('/admin/criar/rodada', { users: [], tableAdmin: this.state.teams, nameRodada: `${this.state.competition}`.replace('2013', "Brasileirão Série A").replace('2021', "Premier League").replace('2016', "Championship").replace('2015', "Ligue 1").replace('2002', "Bundesliga").replace('2019', "Serie A").replace('2003', "Eredivise").replace('2017', "Primeira Liga").replace('2014', "Primera Divison") });

            if (response.data === false) {
                $("#alert-admin-rodada").addClass("alert alert-danger").text("A rodada já foi criada, crie uma rodada de outra liga!");
                $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");

                setTimeout(function () {
                    $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
                }, 3000);
                return;
            }

            $("#alert-admin-rodada").addClass("alert alert-success").text("Rodada criada com sucesso!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");

            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-success").text("");
            }, 3000);

            await this.setState({ teams: [] });
            await this.setState({ competition: "" });

            await console.log(response);
        } catch (error) {
            $("#alert-admin-rodada").addClass("alert alert-danger").text("Ocorreu um erro ao criar a rodada!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-rodada").removeClass("alert alert-danger").text("");
            }, 3000);
        }

    }

    render() {

        return (
            <div>
                <Header />
                <div className="container text-center p-2">
                    <div class="" role="alert" id="alert-admin" data-dismiss="alert"></div>
                    <div className="container"><p className="h2">Criação de rodadas</p></div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <select className="form-control" name="competition" onChange={(event) => { this.handleOnChange(event) }}>
                                {this.state.select}
                            </select>
                        </label>
                    </form>

                    <div className="container">
                        <button className="btn btn-success" id="btn-add" data-toggle="modal" data-target="#modalSalvarTabela">Criar rodada</button>
                    </div>

                    <div className="container mt-5">
                        <ReactTable
                            previousText="Anterior"
                            nextText="Próximo"
                            noDataText="Ainda não houve jogos nesta liga"
                            data={this.state.teams}
                            columns={[
                                {
                                    Header: "#",
                                    accessor: "position",
                                },
                                {
                                    Header: "Time",
                                    accessor: "name",
                                },
                                {
                                    Header: "Pontos",
                                    accessor: "points",
                                },
                                {
                                    Header: "Vitórias",
                                    accessor: "won"
                                },
                                {
                                    Header: "Derrotas",
                                    accessor: "lost"
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
                                    <h5 class="modal-title" id="modalSalvarTabelaLabel">Confirme se você deseja criar a rodada</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" class="btn btn-primary" id="btn-confimarRodada" onClick={this.saveTableAdmin}>Confirmar &nbsp;<i className="" id="icon-loading"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

