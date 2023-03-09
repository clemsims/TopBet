import React, { Component } from 'react';
import ReactTable from "react-table";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import 'react-table/react-table.css'

import api from "../../services/api"
import $ from "jquery";

export default class AdminLockRound extends Component {
    state = {
        data: [],
        nameRodada: "",
        rowAtual: "",
        rowValue: "",
        button: "btn btn-block btn-default"
    }

    async componentWillMount() {
        if (sessionStorage.getItem("admin") === false || !sessionStorage.getItem("username")) return this.props.history.push("/main");
        let response = await api.get(`users`);

        let obj = await response.data.map(function (data, i) {
            return {
                _id: data._id,
                name: data.name,
                username: data.username,
                admin: `${data.admin}`.replace("true", "Sim").replace("false", "Não")
            }
        })

        this.setState({ data: obj });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    removeRow = row => {
        return (
            <div className="container">
                <button className="btn btn-danger btn-block" data-toggle="modal" data-target="#modalDeletarUsuarios" onClick={(e) => {
                    this.setState({
                        rowAtual: row.index
                    });

                    this.setState({
                        rowValue: row.original._id
                    });

                    //console.log(row)
                }}>Deletar usuário</button>
            </div>
        )
    }

    giveAdmin = row => {
        return (
            <div className="container">
                <button className={this.state.button} onClick={async (e) => {
                    await api.get(`users/${row.original._id}`);
                    await api.post(`admin/users/give_admin/${row.original._id}`);

                    let responseMap = await api.get(`users`);

                    let obj = await responseMap.data.map(function (data, i) {
                        return {
                            _id: data._id,
                            name: data.name,
                            username: data.username,
                            admin: `${data.admin}`.replace("true", "Sim").replace("false", "Não")
                        }
                    })

                    this.setState({ data: obj });

                }}>Adicionar/Remover</button>
            </div>
        )
    }

    saveTableAdmin = async () => {
        const { data, rowAtual, rowValue } = this.state;
        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

        try {
            let response = await api.delete(`admin/users/${rowValue}`)

            await data.splice(rowAtual, 1);

            this.setState({
                data: data
            });

            this.setState({
                rowAtual: ""
            });

            this.setState({
                rowValue: ""
            });

            $("#alert-admin-users").addClass("alert alert-success").text("O usuário foi deletado com sucesso!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-users").removeClass("alert alert-success").text("");
            }, 3000);
        } catch (error) {
            $("#alert-admin-users").addClass("alert alert-danger").text("Ocorreu um erro na sua requisição!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-admin-users").removeClass("alert alert-danger").text("");
            }, 3000);
            console.log(error)
        }
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Header />
                <div className="container text-center p-2">
                    <div class="" role="alert" id="alert-admin" data-dismiss="alert"></div>
                    <div className="container"><p className="h2">Lista de usuários</p></div>

                    <div className="container mt-5">
                        <ReactTable
                            previousText="Anterior"
                            nextText="Próximo"
                            noDataText="Sem dados"
                            resizable={false}
                            filterable={true}
                            data={data}
                            columns={[
                                {
                                    Header: "ID",
                                    accessor: "_id",
                                },
                                {
                                    Header: "Nome",
                                    accessor: "name",
                                },
                                {
                                    Header: "Usuário",
                                    accessor: "username"
                                },
                                {
                                    Header: "Admin",
                                    accessor: "admin"
                                },
                                {
                                    Header: "Ativar/Desativar admin",
                                    Cell: this.giveAdmin,
                                    width: 218
                                },
                                {
                                    Header: "Deletar usuário",
                                    Cell: this.removeRow,
                                    width: 218
                                }
                            ]}
                            defaultPageSize={20}
                            className="-striped -highlight"
                        />
                    </div>

                    <div class="modal fade" id="modalDeletarUsuarios" role="dialog" aria-labelledby="modalDeletarUsuariosLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="" role="alert" id="alert-admin-users" data-dismiss="alert"></div>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalDeletarUsuariosLabel">Confirme se você deseja deletar o usuário</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" class="btn btn-primary" id="btn-deletarUsuario" onClick={this.saveTableAdmin}>Confirmar &nbsp;<i className="" id="icon-loading"></i></button>
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

