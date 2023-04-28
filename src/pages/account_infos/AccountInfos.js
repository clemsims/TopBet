import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';
import $ from 'jquery';


import Header_logged from "../../components/header_after_login/Header_after_login";
import Footer from "../../components/Footer";

import api from "../../services/api"

import { openBets, accountInfo } from "../index/constant";
import "./styles.css";

export default class Main extends Component {

    async componentWillMount() {
        // let response = await api.get(`users/username/${sessionStorage.getItem("username")}`);
        // sessionStorage.setItem("admin", response.data.admin);
        // if (response.data.admin) {
        //     this.setState({ admin: true });
        //     $("#admin").removeClass("invisible");
        // } // TODO: REMOVE THIS AND CREATE OUR OWN ADMIN PANEL

        // TMP : EVERYONE IS ADMIN
        this.setState({ admin: true });
        $("#admin").removeClass("invisible");
    }


    handleLogout = (e) => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("refresh_token");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("email");
        $(".modal-backdrop").remove();
        // TODO: send some request to the server to invalidate the token!!!!!
        this.props.history.push("/");
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
                $("#alert-reset-ranking").addClass("alert alert-danger").text("Ainda não há users rankeados, não é possível resetar o ranking!");
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

    renderAccountInfo() {
        return (
            <div className="account-info">
                <h2>Account Information</h2>
                <p> Welcome {sessionStorage.getItem("username")} !</p>
                <p>
                    Your balance is: {accountInfo.balance} {accountInfo.currency}
                </p>
            </div>
        );
    }

    render() {

        return (
            <div className="div-panel">
                <LoadingScreen
                    loading={this.state.loading}
                    bgColor='#1E1E1E'
                    spinnerColor='#318E58'
                    textColor='white'
                    text={`Welcome ${sessionStorage.getItem("username")}`}
                >
                    <Header_logged />
                    <main role="main" className="container">
                        <div className="grid-item" > {this.renderAccountInfo()} </div>
                        <div className="grid-item reset-ranking" >
                            <button onClick={this.handleResetRanking}>
                                Reset Ranking
                            </button>
                        </div>
                        <div className="grid-item logout" >
                            <button onClick={this.handleLogout}>
                                logout
                            </button>
                        </div>
                        <div className="grid-item change-password" >
                            <button onClick={this.handleChangePassword}>
                                Change Password
                            </button>
                        </div>
                        <div className="grid-item delete-account" >
                            <button onClick={this.handleDeleteAccount}>
                                Delete Account
                            </button>
                        </div>
                    </main>
                    <Footer />
                </LoadingScreen>
            </div >
        );
    }
}

