class User {
    constructor ({name,email,dob,picture, gender}) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.picture = picture;
        this.gender = gender;
    }

    getDob(dob){
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = date.getMonth(); 
        const day = date.getDate(); 
         
        return `${day}-${month}-${year}`;
    }

    hideEmail (email){
        const monkey = this.email.indexOf("@");
        const hidePart = this.email.substring(0,3) + "..." + this.email.substring(monkey - 2);
        return hidePart;
    }

}

export default User;