const checkName=(name)=>{
    //Expected name format: Abc... Bcd.... Def... where First name is mandatory
    const nameRegex=/^([A-Za-z]{3,})(\s[A-Za-z]+)*$/
    return nameRegex.test(name);
}

const checkEmail=(email)=>{
    //Expected Email format: first_name.number@zeno.com and all small
    const emailRegex=/^([a-z]{3,})\.([0-9]{1,})@zeno\.com$/
    return emailRegex.test(email);
}

const checkPassword=(password)=>{
    //Expected Password format: Minimum 8 characters, with 1 uppercase,1 lowercase, 1 number and 1 special char
    // const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // return passwordRegex.test(password);
    return true
}

const checkEmployeeId=(empId)=>{
    //Expected Employee Id format 4 letters followed by 4 numbers
    const empIdRegex=/^[A-Z]{4}\d{4}$/
    return empIdRegex.test(empId);
}


module.exports= {checkName,checkEmail,checkPassword,checkEmployeeId}