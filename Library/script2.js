function book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author},${pages} pages, ${read}`
    }
}
let con = document.querySelector(".container");
let myLib = [];

function add(title,author,pages,read){
    console.log("add called")
    var b = new book(title,author,pages,read);
    myLib.push(b);
    var d = document.createElement("div");
    d.className = 'child';
    var str1 = `Book:${b.title}`;
    var str2 = `Author:${b.author}`;
    var str3 = `Pages:${b.pages}`;
    var str4 = `${b.read}`;
    var p1 = document.createElement("p");
    p1.textContent = str1;
    var p2 = document.createElement("p");
    p2.textContent = str2;
    var p3 = document.createElement("p");
    p3.textContent = str3;
    var p4 = document.createElement("p");
    p4.className = 'reading';
    p4.textContent = str4;
    var but = document.createElement("button");
    but.textContent = "Change Read Status";
    but.className = "readBtn";
    
    var del = document.createElement('button');
    del.textContent = 'Delete this book';
    del.className = 'delete';

    d.appendChild(p1);
    d.appendChild(p2);
    d.appendChild(p3);
    d.appendChild(p4);
    d.appendChild(but);
    d.appendChild(del);
    con.appendChild(d);
    console.log(myLib);
}



function reset(){
    form.book.value = null;
    form.author.value = null;
    form.pages.value = null;
    form.read.value = null;
    form.style.display = 'none';
}


var form = document.querySelector('.hide');
var addBut = document.querySelector('.add');
addBut.addEventListener('click',()=>{
    form.style.display = 'block';
});

var sub = document.querySelector('.submit');
sub.addEventListener('click',(e)=>{
    e.preventDefault();
    add(form.book.value,form.author.value,form.pages.value,form.read.value);
    document.querySelectorAll('.delete').forEach(item=>{
        item.addEventListener('click',()=>{
            var temp = item.parentElement;
            temp.remove();
        })
    });
    document.querySelectorAll('.readBtn').forEach(item=>{
        item.addEventListener('click',()=>{
            var temp = item.parentElement;
            if(temp.children[3].innerHTML == "Read"){
                temp.children[3].innerHTML = "Not Read";
            }
            else{
                temp.children[3].innerHTML = "Read";
            }
        })
    });
    reset();
});


// Book.prototype.sayInfo = function (){
//    console.log(this.title," is an awesome book")
//}
//
//const book = new Book ("HP","J.K.Rowling", 256, true)
//book.sayInfo()
//
//console.log(book.infoBook()) -->