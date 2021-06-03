import React from 'react';
import './styles.css';

export default function Loading() {

    return (
        <div class="screen-main">
            <p class="p-loading" >Carregando...</p>

        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        </div>
    )
}


