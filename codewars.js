let n = 127311456;

function asd(n) {
    if(n>=0){
        n += "";
        let list = [];
        for(let i = 0;i<n.length;i++) {
            list.push(parseInt(n[i].split("")))
        }
        list.sort((a,b) => b-a)
        n = list.values().next
        return n;
    }
    return null;
}


console.log(asd(n));
