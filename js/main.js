// function func (param){
//     let param1 = ''
//     let param2 = ''
//     for(i=0; i<param.length; i++){
//         if (param[i] == '#' || param[i] == '?'){

//         }
//         else if(param[i] == param[i].toUpperCase()){
//             param1 += param[i].toLowerCase()
//         }
//         else{
//             param2 += param[i].toUpperCase()
//         }
        
//     }
//     return param1.concat(param2)
// }

// console.log(func('he#LL?o'));






// Birinci masala

function funt (a,b){
    if(a==b){
        return  'Ikkala son ham teng'
    }
    let son1 = Math.abs(10-a)
    let son2 = Math.abs(10-b)
    if(son1 > son2){
        return b
    }
    return a
}

console.log(funt(20,20));








// // Ikkinchi Masala

function func (param1){
    let count = param1.filter((item) => item[0] == 'S' && item[item.length-1] == 'S')
    return count
}

console.log(func(['SalomS', 'Alik', 'Social']));



