export class UserLoginMsg {
    email: string;
    passWord: string;

    constructor(
        email: string,
        passWord: string
        ){
        this.email = email;
        this.passWord = passWord;
    }
}
