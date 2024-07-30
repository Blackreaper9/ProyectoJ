//Registrar al usuario
//Iniciar sesion
//Cerrar sesion
//Obtener informacion de usuario
//crear transacciones
//pedir prestamos
//Borrar cuenta
//Actualizar

import UserModel from "../models/UserModel.js";
import ManagerAccount from "../Class/Account class.js";
import ManagerCard from "./Card class.js";
class ManagerUser {
    constructor(email,phone,name,lastName,isInSession,isAdmin,password) {

        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin
        this.password = password
    }

    async register(){
        try {
            const user = await UserModel.creat({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password,
            });
            const MA = new ManagerAccount(user._id,12345,"Ahorro",10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id,currentAccount._id,"dgitos al azar","debito","De la fecha actual sumar tres años","generar codigo de 3 cifras","active");
            await MC.createCard();
            return user;

        
        } catch (error) {
        throw new Error(`Error al registrar usuario: ${error}`);
    
       } 
  }
   async Login(email,password){
    try {
        const user = await UserModel.findOne({email: email});
        if(!user){
            throw new Error ("Usuario no registrado")
        }
        if(user.password !== password){
            throw new Error("Contraseña incorrecta")
        }
        return "Succeeded"
    } catch (error) {
        throw new Error(`Error al iniciar sesion: ${error}`);
    }
   }

   async getUserInfo(id){
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (error) {
        throw new Error(`Error al obtener el usuario: ${error}`)
    }

   }
   async updateEmail(email){
    try {
        if(!email){
            throw new Error(`Correo invalido: ${error}`)
        }
        await UserModel.findByIdAndUpdate(id,{
            $set:{email}
        });
        return "ok"
    } catch (error) {
        throw new Error(`Error al actualizar el correo: ${error}`)
    }
   }

   async updatePhone(id,phone){
    try {
        if(!phone){
            throw new Error(`Telefono invalido: ${error}`)
        }
        await UserModel.findByIdAndUpdate(id,{
            $set:{phone}
        });
        return "ok"
    } catch (error) {
        throw new Error(`Error al actualizar el Telefono: ${error}`)
    }
}
async updatePassword(id,password){
    try {
        if(!password){
            throw new Error(`Contraseña invalida: ${error}`)
        }
        await UserModel.findByIdAndUpdate(id,{
            $set:{password}
        });
        return "ok"
    } catch (error) {
        throw new Error(`Error al actualizar la contraseña: ${error}`)
    }
  }
  //Pendiente eliminar usuario
}

export default ManagerUser;

