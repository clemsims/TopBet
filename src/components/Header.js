/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { withRouter } from "react-router";
import api from "../services/api";
import $ from "jquery";

class Header extends Component {
    state = {
        ranking: "",
        home: "",
        admin: false,
        changePassword: "",
        changeNewPassword: ""
    };

    async componentWillMount() {
        let response = await api.get(`users/username/${sessionStorage.getItem("username")}`);
        sessionStorage.setItem("admin", response.data.admin);
        if (response.data.admin) {
            this.setState({ admin: true });
            $("#admin").removeClass("invisible");
        }
    }

    handleGoPage(e) {
        this.props.history.push(e.target.name);
    }

    handleLogout = (e) => {
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("admin");
        $(".modal-backdrop").remove();
        this.props.history.push("/login");
    };

    handleDeleteAccount = async (e) => {
        e.preventDefault();
        const { changePassword } = this.state;
        const response = await api.get(`users/username/${sessionStorage.getItem("username")}`);

        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

        if (changePassword === response.data.password) {
            const responseDelete = await api.delete(`users/delete/${sessionStorage.getItem("username")}`);
            $("#alert-excluir-conta").addClass("alert alert-success").text("Conta excluída com sucesso! Redirecionando ..");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(() => {
                $("#alert-excluir-conta").removeClass("alert alert-success").text("");
                $("#inputPasswordChange").css("border-color", "");
                this.handleLogout();
            }, 3000);
        } else {
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            $("#inputPasswordChange").css("border-color", "red");
            $("#alert-excluir-conta").addClass("alert alert-danger").text("As senhas não são iguais!");
            $("#inputPasswordChange").text("");
            setTimeout(function () {
                $("#alert-excluir-conta").removeClass("alert alert-danger").text("");
                $("#inputPasswordChange").css("border-color", "");
            }, 3000);
        }

    }

    handleChangePassword = async (e) => {
        e.preventDefault();
        const { changePassword, changeNewPassword } = this.state;
        const response = await api.get(`users/username/${sessionStorage.getItem("username")}`);

        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

        if (changePassword === response.data.password && changeNewPassword.length >= 6 && changeNewPassword !== response.data.password) {
            const responseUpdate = await api.post(`alterar/senha/${sessionStorage.getItem("username")}/${changeNewPassword}`);
            $("#alert-alterar-senha").addClass("alert alert-success").text("Senha alterada com sucesso! Redirecionando ..");
            setTimeout(() => {
                $("#alert-alterar-senha").removeClass("alert alert-success").text("");
                this.handleLogout();
            }, 3000);
        } else if (changeNewPassword.length < 6) {
            $("#inputNewPasswordChangeAlterar").css("border-color", "red");
            $("#alert-alterar-senha").addClass("alert alert-danger").text("A senha não pode possuir menos que 6 caracteres!");
            $("#inputPasswordChange").text("");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-alterar-senha").removeClass("alert alert-danger").text("");
                $("#inputPasswordChangeAlterar").css("border-color", "");
            }, 3000);
        } else if (changePassword !== response.data.password) {
            $("#inputPasswordChangeAlterar").css("border-color", "red");
            $("#alert-alterar-senha").addClass("alert alert-danger").text("A senha informada não é igual a anterior!");
            $("#inputPasswordChange").text("");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-alterar-senha").removeClass("alert alert-danger").text("");
                $("#inputPasswordChangeAlterar").css("border-color", "");
            }, 3000);
        } else if (response.data.password === changeNewPassword) {
            $("#inputPasswordChangeAlterar").css("border-color", "red");
            $("#alert-alterar-senha").addClass("alert alert-danger").text("A nova senha não pode ser a mesma que a senha atual!");
            $("#inputPasswordChange").text("");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-alterar-senha").removeClass("alert alert-danger").text("");
                $("#inputPasswordChangeAlterar").css("border-color", "");
            }, 3000);
        }
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)

        this.setState({
            [name]: value
        });
    }

    handleClearState = (e) => {
        this.setState({
            changeNewPassword: ""
        });

        this.setState({
            changePassword: ""
        });
    }

    handleResetRanking = async (e) => {
        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");
        try {
            let ranking = await api.get("ranking");
            if (ranking.data.length === 0) {
                $("#alert-reset-ranking").addClass("alert alert-danger").text("Ainda não há usuários rankeados, não é possível resetar o ranking!");
                $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
                setTimeout(() => {
                    $("#alert-reset-ranking").removeClass("alert alert-danger").text("");
                }, 3000);
                return;
            }
            let response = await api.delete(`ranking/reset`);
            $("#alert-reset-ranking").addClass("alert alert-success").text("O ranking foi resetado com sucesso!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(() => {
                $("#alert-reset-ranking").removeClass("alert alert-success").text("");
            }, 3000);
        } catch (error) {
            console.error(error);
            $("#alert-reset-ranking").addClass("alert alert-danger").text("Ocorreu um erro na sua requisição!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(() => {
                $("#alert-reset-ranking").removeClass("alert alert-danger").text("");
            }, 3000);
        }
    }

    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a
                        className="navbar-brand h4 mb-0 link-pointer"
                        name="/main"
                        onClick={(event) => this.handleGoPage(event)}>
                        <span
                            className="foot-name"
                            name="/main"
                            onClick={(event) => this.handleGoPage(event)}
                        >
                            Football&nbsp;
                        </span>
                        <span
                            className="betting-name"
                            name="/main"
                            onClick={(event) => this.handleGoPage(event)}
                        >
                            Betting
                        </span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="" name="/main" onClick={(event) => this.handleGoPage(event)}>Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="" name="/ranking" onClick={(event) => this.handleGoPage(event)}>Ranking</a>
                            </li>
                            <li class="nav-item">
                                <li class="nav-item dropdown link-pointer invisible" id="admin">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownAdmin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Admin</a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownAdmin">
                                        <a class="dropdown-item" name="/admin/editar_usuario" onClick={(event) => this.handleGoPage(event)}><i class="fas fa-users"></i> Usuários</a>
                                        <a class="dropdown-item" name="/admin/encerrar_rodada" onClick={(event) => this.handleGoPage(event)}><i class="fas fa-edit"></i> Rodadas</a>
                                        <a class="dropdown-item" name="/admin/criar_rodada" onClick={(event) => this.handleGoPage(event)}><i class="fas fa-plus-square"></i> Criar rodada</a>
                                        <a class="dropdown-item" data-toggle="modal" data-target="#modalResetarRanking"><i class="fas fa-list-ol"></i> Resetar Ranking</a>
                                    </div>
                                </li>
                            </li>
                        </ul>


                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown link-pointer">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Configurações</a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" data-toggle="modal" data-target="#modalAlterarSenha"><i class="fas fa-edit"></i> Alterar senha</a>
                                    <a class="dropdown-item" data-toggle="modal" data-target="#modalExcluir"><i class="fas fa-trash-alt"></i> Apagar conta</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" onClick={this.handleLogout}><i class="fas fa-sign-out-alt"></i> Sair</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="modal fade" id="modalExcluir" role="dialog" aria-labelledby="modalExcluirLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Você deseja realmente excluir sua conta?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div class="" role="alert" id="alert-excluir-conta" data-dismiss="alert"></div>
                                    <input id="inputPasswordChange" class="w-100 mx-auto" type="password" placeholder="Insira sua senha" name="changePassword" value={this.state.changePassword} onChange={this.handleOnChange} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handleClearState}>Cancelar</button>
                                    <button type="submit" class="btn btn-primary" id="btn-confimarExcluir" name="/login" onClick={(event) => { this.handleDeleteAccount(event) }}>Confirmar &nbsp;<i className="" id="icon-loading"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modalAlterarSenha" role="dialog" aria-labelledby="modalAlterarSenhaLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalAlterarSenhaLabel">Insira sua nova senha abaixo</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div class="" role="alert" id="alert-alterar-senha" data-dismiss="alert"></div>
                                    <input id="inputPasswordChangeAlterar" class="w-100 mx-auto" type="password" placeholder="Senha anterior" name="changePassword" value={this.state.changePassword} onChange={this.handleOnChange} />
                                    <input id="inputNewPasswordChange" class="w-100 mx-auto" type="password" placeholder="Nova senha" name="changeNewPassword" value={this.state.changeNewPassword} onChange={this.handleOnChange} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.handleClearState}>Cancelar</button>
                                    <button type="submit" class="btn btn-primary" id="btn-confimarAlterar" onClick={this.handleChangePassword}>Confirmar &nbsp;<i className="" id="icon-loading"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="modalResetarRanking" role="dialog" aria-labelledby="modalResetarRankingLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="" role="alert" id="alert-reset-ranking" data-dismiss="alert"></div>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalResetarRankingLabel">Você deseja realmente resetar o ranking?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary" id="btn-confimarExcluir" onClick={this.handleResetRanking}>Confirmar &nbsp;<i className="" id="icon-loading"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);