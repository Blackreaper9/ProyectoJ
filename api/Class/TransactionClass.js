//Movimiento de dinero(Crear transaccion)
//Obtener transacciones 
//Obtener transaciiones por usuario

import TransactionModel from "../models/TransactionModel.js";

class ManagerTransaction {
    constructor(accoountFromId, accountToId, type, amount, description){
      this.accoountFromId = accoountFromId;
      this.accountToId = accountToId;
      this.type = type;
      this.amount = amount;
      this.description = description;
    }

    async createTransaction(){
        try {
            const transaction = TransactionModel.create({
                accountFromId: this.accoountFromId,
                accountToId: this.accountToId,
                type: this.type,
                amount: this.amount,
                description: this.description,
            })
            return transaction;
        } catch (error) {
            throw new Error(`Error al crear la transaccion: ${error}`)
            
        }
    }

    async getTransaction(id){
        try {
            const transaction = await TransactionModel.findById(id);
            return transaction;
        } catch (error) {
            throw new Error(`Error al obtener la transaccion: ${error}`)  
        }
    }

    async getTransactions(){
        try {
            const transactions = await TransactionModel.find();
            return transactions;
        } catch (error) {
            throw new Error(`Error al obtener la transacciones: ${error}`)  
        }
    }

    async getAccountTransaction(id){
        try {
            const transactions = await TransactionModel.find({accoountFromId:id});
            return transactions;
        } catch (error) {
            throw new Error(`Error al obtener la transaccion: ${error}`)  
        }
    } 
}