
const checkEmail = (userEmail) =>
{
    const emailRegex = new RegExp("\w+@\w+")
    return emailRegex.test(userEmail)
}
const checkPHNO = (userNo) =>
{
    const phRegex = new RegExp("(+)?91( )?\d{10}")
    return phRegex.test(userNo)
}