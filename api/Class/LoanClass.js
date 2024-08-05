

import _default from "concurrently";
import LoanModel from "../models/LoanModel.js";
import PaymentModel from "../models/PaymentModel.js";

class LoanManager {
    constructor(
        userId,
        LoanType,
        amount,
        interestRate,
        numberPayments,
        startDate,
        endDate,
        status,
    ){
        this.userId
        this.LoanType
        this.amount
        this.interestRate
        this.numberPayments
        this.startDate
        this.endDate
        this.status
    }

    async createLoan(){
        try {
            const loan = await LoanModel.create({
               userId: this.userId,
        LoanType: this.LoanType,
       amount:  this.amount,
        interestRate: this.interestRate,
        numberPayments: this.numberPayments,
        startDate: this.startDate,
        endDate :this.endDate,
        status: this.status,

            });
         return loan;
        } catch (error) {
            throw new Error("No se pudo crear el prestamo!")
            
        }
    }

    async payLoan(
        userId,
        amount,
        numberPayment){
            try {
                const payment = await PaymentModel.create({
                    userId,
                    loanId,
                    amount,
                    numberPayment
                });
                return payment;
            } catch (error) {
                throw new Error("Hubo un error al intenat pagar!")
            }
                
        }
        async getLoan(id){
            try {
                const loan = await LoanModel.findById(id);
            } catch (error) {
                throw new Error("Hubo un error al intenat pagar!")
            }
        }
        async getLoans(id){
            try {
                const loans = await LoanModel.findById(id);
            } catch (error) {
                throw new Error("Hubo un error al intenat pagar!")
            }
        }
        async validateUser(){
 "El usuario debe tener al menos 3 días en la plataforma Haber hecho 2 transacciones Y mantener un saldo superior a 5000"


        }




 }
 export default LoanManager;
    
