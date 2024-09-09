let month = 1;

function cal(num) {
    let count = 1;

    if (num == null){
        num = 0;
    }

    let dayInMonth = new Date(2024, num + 1, 0).getDate();
    let firstDay = new Date(2024, num, 1).getDay();
    if (firstDay === 0){
        firstDay = 7;
    }

    const body = document.getElementById('body');

    body.innerHTML = '';  

    for (let w = 0; w < 6; w++) {
        const row = document.createElement('tr'); 
        
        for (let d = 0; d < 7; d++) {
            const cell = document.createElement('td');
            
            if (w === 0 && d < (firstDay-1)) {
                cell.innerHTML = '';  
            } else if (count > dayInMonth) {
                cell.innerHTML = ''; 
            } else {
                cell.innerHTML = count;
                if (d === 6) {  
                    cell.style.color = 'red';
                }
                count++;
            }

            row.appendChild(cell);  
        }
        
        body.appendChild(row); 

        if (count > dayInMonth) {
            break;
        }
    }
}

function add(){
    if(month < 12){
        month++;
        document.getElementById("month").innerHTML = month + "/2024"
        clearTable();
        cal(month-1);
    }

}

function decrease(){
    if(month > 1){
        month--;
        document.getElementById("month").innerHTML = month + "/2024"
        clearTable();
        cal(month-1);
    }

}

function clearTable() {
    const body = document.getElementById('body');
    body.innerHTML = ''; 
}

