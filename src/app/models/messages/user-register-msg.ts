export class UserRegisterMsg {
    userName: string;
    email: string;
    passWord: string;
    avatarURL?: string;

    constructor(
        userName: string,
        email: string,
        passWord: string,
        avatarURL?: string,
        ){
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
        this.avatarURL = avatarURL;
    }
}
