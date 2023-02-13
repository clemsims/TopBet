/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import $ from "jquery";
import api from "../../services/api";

import './styles.css';

export default class Registro extends Component {
    componentWillMount() {
        if (sessionStorage.getItem("username")) this.props.history.push('/main');
    }

    state = {
        name: "",
        username: "",
        password: "",
        email: ""
    }

    handleLogin = () => {
        this.props.history.push("/login");
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value)

        this.setState({
            [name]: value
        });
    }

    handleRegisterUser = async (e) => {
        e.preventDefault();
        const { name, username, password, email } = this.state;
        if (!username) {
            $("#user").css("border-color", "red");
            setTimeout(function () {
                $("#user").css("border-color", "");
            }, 3000);
        }

        if (username.length > 20) {
            $("#user").css("border-color", "red");
            setTimeout(function () {
                $("#user").css("border-color", "");
            }, 3000);
        }

        if (!name) {
            $("#name").css("border-color", "red");
            setTimeout(function () {
                $("#name").css("border-color", "");
            }, 3000);
        }

        if (!password) {
            $("#password").css("border-color", "red");
            setTimeout(function () {
                $("#password").css("border-color", "");
            }, 3000);
        }

        if (password.length < 6) {
            $("#password").css("border-color", "red");
            setTimeout(function () {
                $("#password").css("border-color", "");
            }, 3000);
        }

        if (!email) {
            $("#email").css("border-color", "red");
            setTimeout(function () {
                $("#email").css("border-color", "");
            }, 3000);
        }

        if (!username || !name || !password || !email) return;
        $("#icon-loading").addClass("fas fa-sync-alt loading-refresh-animate");

        let verifyEmail = await api.get(`users/email/${email}`);
        let verifyUser = await api.get(`users/username/${username}`);

        if (verifyEmail.data && verifyUser.data) {
            $("#alert-register").addClass("alert alert-danger").text("O usuário e o e-mail informado já estão em uso!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-register").removeClass("alert alert-danger");
            }, 5000)
        }
        else if (verifyUser.data) {
            $("#alert-register").addClass("alert alert-danger").text("O usuário informado já está em uso!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-register").removeClass("alert alert-danger");
            }, 5000)
        }
        else if (verifyEmail.data) {
            $("#alert-register").addClass("alert alert-danger").text("O e-mail informado já está em uso!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-register").removeClass("alert alert-danger");
            }, 5000)
        }
        else if (password.length < 6) {
            $("#alert-register").addClass("alert alert-danger").text("A senha tem menos que 6 caracteres!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-register").removeClass("alert alert-danger");
            }, 5000)
        }
        else if (username.length > 20) {
            $("#alert-register").addClass("alert alert-danger").text("O usuário não pode ultrapassar 20 caracteres!");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");
            setTimeout(function () {
                $("#alert-register").removeClass("alert alert-danger");
            }, 5000)
        } else {
            await api.post('registro', { name, username, email, password });

            $("#alert-register").addClass("alert alert-success").text("Cadastro realizado com sucesso. Redirecionando para o login ...");
            $("#icon-loading").removeClass("fas fa-sync-alt loading-refresh-animate");

            let props = this.props;
            setTimeout(function () {
                props.history.push("/login");
            }, 3000);
        }
    }

    render() {
        return (
            <div className="div-panel">
                <div className="wrapper fadeInDown">
                    <div class="" role="alert" id="alert-register" data-dismiss="alert"></div>
                    <div id="formContent">
                        <div id="formHeader">
                            <h2 className="h2-login inactive underlineHover" id="loginButton" onClick={this.handleLogin}>Login</h2>

                            <h2 className="h2-login active">Cadastrar</h2>
                        </div>

                        <div className="form-padding">
                            <form>
                                <input type="text" id="name" className="fadeIn second" placeholder="Nome completo" name="name" onChange={(event) => this.handleOnChange(event)} />
                                <input type="text" id="user" className="fadeIn third" placeholder="Usuário" name="username" onChange={(event) => this.handleOnChange(event)} />
                                <input type="email" id="email" className="fadeIn fourth" placeholder="E-mail" name="email" onChange={(event) => this.handleOnChange(event)} />
                                <input type="password" id="password" className="fadeIn five" placeholder="Senha" name="password" onChange={(event) => this.handleOnChange(event)} />
                                <button type="submit" className="fadeIn six btn-register" value="Cadastrar" id="btn-cadastrar" onClick={this.handleRegisterUser}>Cadastrar &nbsp;<i className="" id="icon-loading"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
