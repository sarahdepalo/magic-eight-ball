import styled from 'styled-components';

export const EightBallPosition = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 10;
`;

export const EightBallGradient = styled.div`
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%,rgba(242,242,242,0.2) 7%,rgba(30,30,30,0.1) 30%,rgba(30,30,30,0.00) 100%);
    width: 400px;
    height: 400px;
    border-radius: 100%;
    left: 60%;
    top: 30%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`;

export const Ewin = styled.div`
    position: absolute;
    background: linear-gradient(45deg, rgba(20,0,20,1) 0%, rgba(40,0,40,1) 100%);
    width: 160px;
    height: 160px;
    border-radius: 100%;
    border: solid 4px rgba(20,20,20,0.8);
    box-shadow: 10px -10px 10px rgba(20,20,20,0.6), 10px -10px 1px rgba(20,20,20,0.5),-10px -10px 1px rgba(20,20,20,0.5),10px 10px 1px rgba(50,50,50,0.5),-10px 10px 1px rgba(50,50,50,0.5), 8px -10px 10px rgba(20,20,20,0.6), -8px 10px 10px rgba(60,60,60,0.6), inset -10px 10px 40px rgba(200,0,20,0.05), inset 10px -10px 40px rgba(20,0,200,0.1);
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`;

export const Triangle = styled.div`
    -webkit-transform: translate(-50%,-50%) rotate(5deg);
    transform: translate(-50%,-50%) rotate(5deg);
    position: absolute;
    width: 0px; 
    height: 0px;
    left: 50%;
    top: 60%;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-top: 90px solid rgba(60,10,120,0.0);
    opacity: 0;
    transition: ease-in all 0.2s;
    border-top: 90px solid rgba(60,10,120,0.9);
    -webkit-transform: translate(-50%,-50%) rotate(0deg);
    transform: translate(-50%,-50%) rotate(0deg);
    opacity: 1;
     transition: ease-in all 0.2s;
`;

export const Textbox = styled.div`
    font: 400 11px Oswald;
    text-shadow: 1px 1px 2px rgba(40,0,200,0.8);
    color: rgba(240,220,240,0.8);
    text-align: center;
    line-height: 1.1;
    -webkit-transform: translate(-50%,-50%) rotate(5deg);
    transform: translate(-50%,-50%) rotate(5deg);
    position: absolute;
    text-transform: uppercase;
    width: 48px; 
    height: 50px;
    left: 50%;
    top: 53%;
    opacity: 0;
    transition: ease-in all 0.2s;
    opacity: 1;
    -webkit-transform: translate(-50%,-50%) rotate(0deg);
    transform: translate(-50%,-50%) rotate(0deg);
   transition: ease-in all 0.2s;
`;