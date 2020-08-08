import React, { useState,useEffect} from 'react';
import {Link} from 'react-router-dom' //evita o loading adicional de recursos. (single page aplication)

import logoImg from "../../assets/images/logo.svg"
import landingImg from "../../assets/images/landing.svg"
import studyIcon from "../../assets/images/icons/study.svg"
import giveClassesIcon from "../../assets/images/icons/give-classes.svg"
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg"

import './styles.css';
import api from '../../services/api';
import { response } from 'express';





function  Landing(){

    const [totalConnections, setTotalConnections ] = useState(0) //inciando valor como 0.

    
    useEffect(() => {
        api.get ("/connections").then(response =>{ //quando tiver uma resposta
            // console.log(response)
            const {total} = response.data; //settando os dados para objeto total.
                setTotalConnections(total); //settando na funçao.
        })
    },[]) //executar quando é exibido em tela

    return (
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={logoImg} alt="Proffy"/>
                  <h2>Sua plataforma de estudos online</h2>
              </div>

              <img 
              src={landingImg} 
              alt="Plataforma de estudos" 
              className="hero-image"/>

              <div className="buttons-container">

                  <Link to="/study" className="study"> {/*passando o endereço a ser acesso pelo button*/}
                      <img src={studyIcon} alt="Estudar"/>
                    Estudar
                  </Link>

                  <Link to="/give-classes" className="give-classes">
                      <img src={giveClassesIcon} alt="Estudar"/>
                    Dar aulas
                  </Link>
              </div>

              <span className="total-connections">
                  Total de {totalConnections} conexöes já realizadas <img src={purpleHeartIcon} alt="Coraçäo roxo"/>
              </span>
          </div>
      </div>
    )
}
export default Landing;