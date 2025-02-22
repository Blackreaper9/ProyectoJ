//obtener cuenta
//editar balance
//obtener todas las cuentas
//crear una cuenta
import { AccountModel } from "../models/AccountModel.js";
class ManagerAcount{
   constructor(userid,accountNumber,accountType,balance){
    this.userId = userId;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
   }

   async getAccounts(){
      try {
           const accounts = await AccountModel.find();
           return accounts;
     } catch (error) {
           throw new Error(`Error al obtener cuentas: ${error}`);
        }
    }

    async getAccount(id){
        try {
            const account = await AccountModel.findById(id);
            return account;
        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`);
        }
    }

    async addBalance(id, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return"ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);
            
        }
    }

    async restBalance(id, amount){
        try {
            this.balance -= amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return"ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);
            
        }
    }

    async createAccount(){
        try {
            const account = await AccountModel.create({
                userId:this.userId,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance
            });
            return"ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);
            
        }
    }
}

export default ManagerAcount;

