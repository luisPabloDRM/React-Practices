import React from 'react';


const INITIAL_STATE ={
    moneyInBank: 0,
    moneyInSofa: 999,
    billsToPay: 1000

}

const Reduce = (state, action) => {
    switch(action.type){
        case "INGRESAR DINERO EN EL BANCO":
            return {...state,
                    moneyInBank: state.moneyInBank + action.payload
                   };
        case "PAGAR FACTURAS":
            return {...state,
                    billsToPay: state.billsToPay - action.payload
                   };
        case "BUSCAR MONEDAS EN EL SOFA":
            return {...state,
                    moneyInBank: state.moneyInBank
                                 + state.moneyInSofa,
                    moneyInSofa: 0
                   };
              
	};



},


