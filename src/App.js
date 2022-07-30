import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Caixa = styled.section`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100vh;

`;
const Calc = styled.div`
display:flex;
align-items:center;
flex-direction:column;
border:solid 2px black;
width:30%;
height:66vh;
border-radius:10px;
background-color:#2E8AB3;
`;
const Appear = styled.div`
display:flex;
justify-content:flex-end;
position:relative;
top:3vh;
width:96%;
height:8.5vh;
padding-right:10px;
border-radius:10px;
background-color:#57cc99;
`;
const CaixaNumeros = styled.div`
position:relative;
top:6.5vh;
display:flex;
flex-flow: row wrap;
align-items:center;
justify-content:space-around;
width:98%;
height:50vh;
`
const Numbers = styled.button`
height:9vh;
width:18%;
border-radius:10px;
border:none;
cursor:pointer;
background-color:#FFBE00;
box-shadow: inset 4px 3px 8px #EFF333,
  inset 0 -8px 8px #DD9206,
  4px 4px 0px #196693;
font-size:20px;
&:hover{
  transform:scale(106%)
}
`;
export default class App extends Component {
  state = {
    primeiroValor: "",
    segundoValor: "",
    terceiroValor: "",
    sinal: "",
    sinal2: "",
    sinaldeigual: "",
    result: "",
    trocaValor: 0,
    random: 0,
    alerta:""
  }
  render() {
    if (this.state.random == 0) {
      document.body.style.backgroundColor = "white"
    } else if (this.state.random == 1) {
      document.body.style.backgroundColor = "*aacc00"
    } else if (this.state.random == 2) {
      document.body.style.backgroundColor = "#ff7096"
    } else if (this.state.random == 3) {
      document.body.style.backgroundColor = "#bc00dd"
    } else if (this.state.random == 4) {
      document.body.style.backgroundColor = "#ff7900"
    } else if (this.state.random == 5) {
      document.body.style.backgroundColor = "#ffea00"
    } else if (this.state.random == 6) {
      document.body.style.backgroundColor = "#80ffdb"
    } else if (this.state.random == 7) {
      document.body.style.backgroundColor = "#d00000"
    } else if (this.state.random == 8) {
      document.body.style.backgroundColor = "#2d00f7"
    } else if (this.state.random == 9) {
      document.body.style.backgroundColor = "#c71f37"
    } else if (this.state.random == 10) {
      document.body.style.backgroundColor = "#9d4edd"
    } else if (this.state.random == 11) {
      document.body.style.backgroundColor = "#affc41"
    } else if (this.state.random == 12) {
      document.body.style.backgroundColor = "#031d44"
    } else if (this.state.random == 13) {
      document.body.style.backgroundColor = "#ff9e00"
    } else if (this.state.random == 14) {
      document.body.style.backgroundColor = "#5e548e"
    } else if (this.state.random == 15) {
      document.body.style.backgroundColor = "#fb5607"
    } else if (this.state.random == 16) {
      document.body.style.backgroundColor = "#ffd670"
    } else if (this.state.random == 17) {
      document.body.style.backgroundColor = "#390099"
    } else if (this.state.random == 18) {
      document.body.style.backgroundColor = "#fb5607"
    } else if (this.state.random == 19) {
      document.body.style.backgroundColor = "#ffea00"
    } else if (this.state.random == 20) {
      document.body.style.backgroundColor = "#0ead69"
    } else if (this.state.random == 21) {
      document.body.style.backgroundColor = "#f15bb5"
    } else if (this.state.random == 22) {
      document.body.style.backgroundColor = "#9e0059"
    } else if (this.state.random == 23) {
      document.body.style.backgroundColor = "#4cc9f0"
    } else if (this.state.random == 24) {
      document.body.style.backgroundColor = "#540d6e"
    } else if (this.state.random == 25) {
      document.body.style.backgroundColor = "#80ed99"
    } else if (this.state.random == 26) {
      document.body.style.backgroundColor = "#43bccd"
    } else if (this.state.random == 27) {
      document.body.style.backgroundColor = "#fbff12"
    } else if (this.state.random == 28) {
      document.body.style.backgroundColor = "#70e000"
    } else if (this.state.random == 29) {
      document.body.style.backgroundColor = "#00963c"
    } else if (this.state.random == 30) {
      document.body.style.backgroundColor = "#f2542d"
    } else if (this.state.random == 31) {
      document.body.style.backgroundColor = "#ffafcc"
    } else if (this.state.random == 32) {
      document.body.style.backgroundColor = "#ff5400"
    } else if (this.state.random == 33) {
      document.body.style.backgroundColor = "#8c1c13"
    } else if (this.state.random == 33) {
      document.body.style.backgroundColor = "#d80032"
    } else if (this.state.random == 34) {
      document.body.style.backgroundColor = "#31081f"
    } else if (this.state.random == 35) {
      document.body.style.backgroundColor = "#7b2cbf"
    }
    return (
      <Caixa>
        <Calc>
          <Appear>
            <p>{this.state.alerta}</p>
            <p>{this.state.primeiroValor}</p>
            <p>{this.state.sinal}</p>
            <p>{this.state.segundoValor}</p>
            <p>{this.state.sinal2}</p>
            <p>{this.state.terceiroValor}</p>
            <p>{this.state.sinaldeigual}</p>
            <p>{this.state.result}</p>
          </Appear>
          <CaixaNumeros>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 6,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 6
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 6
                })
              }
            }}>6</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 7,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 7
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 7
                })
              }
            }}>7</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 8,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 8
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 8
                })
              }
            }}>8</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 9,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 9
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 9
                })
              }
            }}>9</Numbers>
            <Numbers onClick={() => {
              this.setState({
                trocaValor: 0,
                primeiroValor: "",
                segundoValor: "",
                terceiroValor: "",
                sinal: "",
                sinal2: "",
                sinaldeigual: "",
                result: "",
                alerta:"",
                random: Math.floor(Math.random() * 36)
              })
            }}>CE</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 2,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 2
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 2
                })
              }
            }}>2</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 3,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 3
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 3
                })
              }
            }}>3</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 4,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 4
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 4
                })
              }
            }}>4</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 5,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 5,
                  alerta:""
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 5
                })
              }
            }}>5</Numbers>
            <Numbers onClick={() => {
              if (this.state.primeiroValor == "" && this.state.segundoValor == "") {
                this.setState({
                  alerta:"Digite um valor"
                })
              } else if (this.state.trocaValor === 0) {
                this.setState({
                  trocaValor: this.state.trocaValor + 1,
                  sinal: "÷"
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  trocaValor: this.state.trocaValor + 2,
                  sinal2: "÷"
                })

              }
            }}>÷</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 0,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 0
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 0
                })
              }
            }}>0</Numbers>
            <Numbers onClick={() => {
              if (this.state.trocaValor === 0) {
                this.setState({
                  primeiroValor: this.state.primeiroValor + 1,
                  alerta:""
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  segundoValor: this.state.segundoValor + 1
                })
              } else if (this.state.trocaValor === 3) {
                this.setState({
                  terceiroValor: this.state.terceiroValor + 1
                })
              }
            }}>1
            </Numbers>
            <Numbers onClick={() => {
              if (this.state.primeiroValor == "" && this.state.segundoValor == "") {
                this.setState({
                  alerta:"Digite um valor"
                })
              } else if (this.state.trocaValor === 0) {
                this.setState({
                  trocaValor: this.state.trocaValor + 1,
                  sinal: "+"
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  trocaValor: this.state.trocaValor + 2,
                  sinal2: "+"
                })
              }
            }}>+</Numbers>
            <Numbers onClick={() => {
              if (this.state.primeiroValor == "" && this.state.segundoValor == "") {
                this.setState({
                  alerta:"Digite um valor"
                })
              } else if (this.state.trocaValor === 0) {
                this.setState({
                  trocaValor: this.state.trocaValor + 1,
                  sinal: "-"
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  trocaValor: this.state.trocaValor + 2,
                  sinal2: "-"
                })
              }
            }}>-</Numbers>
            <Numbers onClick={() => {
              if (this.state.primeiroValor == "" && this.state.segundoValor == "") {
                this.setState({
                  alerta:"Digite um valor"
                })
              } else if (this.state.trocaValor === 0) {
                this.setState({
                  trocaValor: this.state.trocaValor + 1,
                  sinal: "x"
                })
              } else if (this.state.trocaValor === 1) {
                this.setState({
                  trocaValor: this.state.trocaValor + 2,
                  sinal2: "x"
                })
              }
            }}>X</Numbers>
            <Numbers onClick={() => {
              if (this.state.sinal === "+" && this.state.sinal2 === "") {
                this.setState({
                  result: Number(this.state.primeiroValor) + Number(this.state.segundoValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "+" && this.state.sinal2 === "+") {
                this.setState({
                  result: Number(this.state.primeiroValor) + Number(this.state.segundoValor) + Number(this.state.terceiroValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "+" && this.state.sinal2 === "-") {
                this.setState({
                  result: Number(this.state.primeiroValor) + Number(this.state.segundoValor) - Number(this.state.terceiroValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "+" && this.state.sinal2 === "x") {
                this.setState({
                  result: (Number(this.state.primeiroValor) + Number(this.state.segundoValor) * Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "+" && this.state.sinal2 === "÷") {
                this.setState({
                  result: (Number(this.state.primeiroValor) + Number(this.state.segundoValor) / Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "-" && this.state.sinal2 === "") {
                this.setState({
                  result: Number(this.state.primeiroValor) - Number(this.state.segundoValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "-" && this.state.sinal2 === "-") {
                this.setState({
                  result: Number(this.state.primeiroValor) - Number(this.state.segundoValor) - Number(this.state.terceiroValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "-" && this.state.sinal2 === "+") {
                this.setState({
                  result: Number(this.state.primeiroValor) - Number(this.state.segundoValor) + Number(this.state.terceiroValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "-" && this.state.sinal2 === "x") {
                this.setState({
                  result: (Number(this.state.primeiroValor) - Number(this.state.segundoValor) * Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "-" && this.state.sinal2 === "÷") {
                this.setState({
                  result: (Number(this.state.primeiroValor) - Number(this.state.segundoValor) / Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "x" && this.state.sinal2 === "") {
                this.setState({
                  result: Number(this.state.primeiroValor) * Number(this.state.segundoValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "x" && this.state.sinal2 === "x") {
                this.setState({
                  result: (Number(this.state.primeiroValor) * Number(this.state.segundoValor) * Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "x" && this.state.sinal2 === "+") {
                this.setState({
                  result: (Number(this.state.primeiroValor) * Number(this.state.segundoValor) + Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "x" && this.state.sinal2 === "-") {
                this.setState({
                  result: Number(this.state.primeiroValor) * Number(this.state.segundoValor) - Number(this.state.terceiroValor),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "x" && this.state.sinal2 === "÷") {
                this.setState({
                  result: (Number(this.state.primeiroValor) * Number(this.state.segundoValor) / Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "÷" && this.state.sinal2 === "") {
                this.setState({
                  result: (Number(this.state.primeiroValor) / Number(this.state.segundoValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "÷" && this.state.sinal2 === "÷") {
                this.setState({
                  result: (Number(this.state.primeiroValor) / Number(this.state.segundoValor) / Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "÷" && this.state.sinal2 === "+") {
                this.setState({
                  result: (Number(this.state.primeiroValor) / Number(this.state.segundoValor) + Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "÷" && this.state.sinal2 === "-") {
                this.setState({
                  result: (Number(this.state.primeiroValor) / Number(this.state.segundoValor) - Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              } else if (this.state.sinal === "÷" && this.state.sinal2 === "x") {
                this.setState({
                  result: (Number(this.state.primeiroValor) / Number(this.state.segundoValor) * Number(this.state.terceiroValor)).toFixed(2),
                  sinaldeigual: '=',
                  random: Math.floor(Math.random() * 36)
                })
              }
            }}>=</Numbers>
          </CaixaNumeros>
        </Calc>
      </Caixa>
    )
  }
}