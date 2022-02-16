// 1-ish malumotlar ba'zasidan savollarni olib kelish va ekranga random qilib chiqarish
const url = `http://localhost:3000/level-0` || `https://sinov.vercel.app/level-0.json`;
let db = {};

fetch(url)
    .then(response => response.json())
    .then(dbJson => { db = dbJson });

function func() {
    setTimeout(function () {
        document.getElementById(`preloader`).style.display = 'none';
    }, 1000)
    console.log(db);
}
/* malumotlar ekranga random qilib chiqarish */
let n = [];
let prin = setInterval(frame, 500);
let i;

function frame() {
    i = Math.floor(Math.random() * db.length);
    if ((n.length < 10) && (n[0] != i) && (n[1] != i) && (n[2] != i) && (n[3] != i) && (n[4] != i) && (n[5] != i) && (n[6] != i) && (n[7] != i) && (n[8] != i) && (n[9] != i)) {
        n.push(i);
    } else if (n.length > 9) {
        clearInterval(prin);
        console.log('tugadi');
        for (let i = 0; i < 10; i++) {
            document.getElementById(`question${i}`).innerHTML = `
    <div class="ques">
        <div class="question">${db[n[i]].question} </div>
        <input type="radio" name="check${i}" id="a${n[i]}">
        <label for="a${n[i]}" id="a${n[i]}L">${db[n[i]].anwers0}</label>
        <br />
        <input type="radio" name="check${i}" id="b${n[i]}">
        <label for="b${n[i]}" id="b${n[i]}L">${db[n[i]].anwers1}</label>
        <br />
        <input type="radio" name="check${i}" id="c${n[i]}">
        <label for="c${n[i]}" id="c${n[i]}L">${db[n[i]].anwers2}</label>
        <br />
        <input type="radio" name="check${i}" id="d${n[i]}">
        <label for="d${n[i]}" id="d${n[i]}L">${db[n[i]].anwers3}</label>
    </div>
    `
            document.getElementById(`preloader`).style.display = 'none';
        }
    }
}

// natijani hisoblash

let res = document.getElementById(`res`);
let natija = 0;

res.onclick = function () {
    natija = 0;
    for (let i = 0; i < 10; i++) {
        if ((document.getElementById(`a${n[i]}`).checked) && (document.getElementById(`a${n[i]}L`).innerHTML == db[n[i]].anw)) {
            natija = +natija + 1;
        } else if ((document.getElementById(`b${n[i]}`).checked) && (document.getElementById(`b${n[i]}L`).innerHTML == db[n[i]].anw)) {
            natija = +natija + 1;
        } else if ((document.getElementById(`c${n[i]}`).checked) && (document.getElementById(`c${n[i]}L`).innerHTML == db[n[i]].anw)) {
            natija = +natija + 1;
        } else if ((document.getElementById(`d${n[i]}`).checked) && (document.getElementById(`d${n[i]}L`).innerHTML == db[n[i]].anw)) {
            natija = +natija + 1;
        }
    }
    res.innerHTML = natija
}





const resdb = `http://localhost:3000/user`;
let dbRes = {};
fetch(resdb)
    .then(response => response.json())
    .then(dbJson2 => { dbRes = dbJson2 });

//
/* res.onclick = function () {
    let a1 = document.querySelector("#a1");
    let b1 = document.querySelector("#b1");
    let c1 = document.querySelector("#c1");
    let d1 = document.querySelector("#d1");
    if (a1.checked) {
        res.innerHTML = `Javobingiz to'g'ri`;
    } else if (b1.checked) {
        res.innerHTML = `Javobingiz noto'g'ri`;
    } else if (c1.checked) {
        res.innerHTML = `Javobingiz noto'g'ri`;
    } else if (d1.checked) {
        res.innerHTML = `Javobingiz noto'g'ri`;
    } else {
        res.innerHTML = `Siz javob belgilamadingiz`;
    }
    document.getElementById("question1").innerHTML = ``;
    // res
    dbRes.hojiakbar.result = +dbRes.hojiakbar.result + 1;
    fetch(resdb, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dbRes)
    }).then(response => {
        return response.json()
    })
}
*/
// savollarni aralashtirib chiqarish