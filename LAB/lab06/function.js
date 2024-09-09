function cal(){
    const dayInMonth = 31;
    const firstDay = 3;  
    let count = 1;

    const body = document.getElementById('body');

    for (let w = 0; w < 5 ; w++){
        const row = document.createElement('tr'); 
        
        for (let d = 0; d < 7; d++){
            const cell = document.createElement('td');
            
            if (w === 0 && d < firstDay){
                cell.innerHTML = '';  
            } else if (count <= dayInMonth){
                cell.innerHTML = count;
                count++;
            } else {
                cell.innerHTML = ''; 
            }

            row.appendChild(cell);  
        }
        
        body.appendChild(row); 
    }
}
