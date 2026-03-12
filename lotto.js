function getNumbers(){
    
    for(let i = 1;i <= 5; i++){
        let arr = [];

        while(arr.length < 6){
            let num = Math.floor(Math.random() * 45) + 1;

            if(!arr.includes(num)) arr.push(num);
        }
        
        let numbers = document.getElementById(`numbers${i}`);
        let str = '';
        for(let j = 0;j < arr.length; j++){
            if(arr[j] >= 1 && arr[j] <= 10){
                //yellow
                str += `<div class="number" style="background-color: #f7d43b">${arr[j]}</div>`
            }else if(arr[j] >= 11 && arr[j] <=20){
                //blue
                str += `<div class="number" style="background-color: #338be9">${arr[j]}</div>`
            }else if(arr[j] >= 21 && arr[j] <=30){
                //red
                str += `<div class="number" style="background-color: #f55471">${arr[j]}</div>`
            }else if(arr[j] >= 31 && arr[j] <= 40){
                //gray
                str += `<div class="number" style="background-color: #8e929c">${arr[j]}</div>`
            }else if(arr[j] >= 41 && arr[j] <= 45){
                //green
                str += `<div class="number" style="background-color: #4dc066">${arr[j]}</div>`
            }
            
        }
        numbers.innerHTML = str;
    }

    
}