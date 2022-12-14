// merge sort - divide and conquer
let arr = [9,1,4,2,3,8,5,6,7, 89, 65, 900, 32, 21, 54, 888, 9999, 6543, 7654, 0, 89765]

function divideArray(a){
    let l = []
    let r = []
    let middle = Math.floor(a.length/2)

    // base case
    if(a.length === 1) return a;

    l = a.slice(0, middle)
    r = a.slice(middle)

    return merge(divideArray(l), divideArray(r))
}

function merge(l, r){
    let temp = [];
    let lCount = 0;
    let rCount = 0; 

    // console.log(l, ' l')
    // console.log(r, ' r')

    while(lCount < l.length && rCount < r.length){
      if(l[lCount] < r[rCount]){
        temp.push(l[lCount])
        lCount++
      }else{
        temp.push(r[rCount])
        rCount++
      }
    }
    
    return temp.concat(l.slice(lCount)).concat(r.slice(rCount))
}  

let divideA = divideArray(arr) 
console.log(divideA)