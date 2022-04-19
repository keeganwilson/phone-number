const phoneNumber = arr => {
    let phoneArr = [];
    for (i = 0; i < arr.length; i++) {
        if (i === 0) {
            phoneArr.push('(' + arr[i]);
        } else if (i === 2) {
            phoneArr.push(arr[i] + ') ')  ;  
        } else if (i === 5) {
            phoneArr.push(arr[i] + '-');
        }   else phoneArr.push(arr[i]);
    }
    phoneNum = phoneArr.join('')
    return phoneNum    
}

console.log(phoneNumber([3, 0, 3, 7, 7, 5, 6, 3, 7, 5]));
