import React, { Component } from 'react';

const moment = require('moment');
moment.locale('pt-BR');

// import { Container } from './styles';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer page-footer font-small block mt-5">
                <div class="container-fluid text-center py-3 bg-dark text-white">© {moment(Date.now()).format('L').slice(6)} Copyright - TOPBET </div>
            </footer>
        );
    }
}
