const container = document.getElementById('container');
const reload = document.getElementById('reload');


function makeGrid(row, column){
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-column', column);
    for (let i = 0; i < (row * column); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}



function colorChange(){
    const cell = document.querySelectorAll('.grid-item')
    cell.forEach(function color(item){
        item.addEventListener('mouseover', () => {
            item.classList.add('color');
        })
    })
}


let num = 16;
makeGrid(num, num);
colorChange();



refresh.addEventListener('click', ()=> {
    document.querySelectorAll('.grid-item').forEach(function (item) {
        item.classList.remove('color');
        item.parentNode.removeChild(item);
    })
    let size = prompt("dimensioni griglia");
    if (size > 100){
        console.log("errore");
        } else{
        makeGrid(size, size);
        colorChange();
    }
})

