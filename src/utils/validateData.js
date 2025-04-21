export const validateData = (name,email,password,isSignIn) =>{
    const isEmialValid=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /[a-zA-Z]+\\.?/.test(name);
    if(!isSignIn){
        if(!isEmialValid){
            return "Eneter valid email address"
        }
        if(!isPasswordValid){
            return "Eneter correct password"
        }
        if(!name){
            return "Enter valid name";
        }
    }else {
        if(!isEmialValid){
            return "Eneter valid email address"
        }
        if(!isPasswordValid){
            return "Eneter correct password"
        }
    }
  
   
    return null;
}
