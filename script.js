const submitButton = document.getElementById("button");

let values = [];
valuesWithout = localStorage.getItem("myValue");
values = JSON.parse(valuesWithout);
if (values === null) {
    values = [];
}
update();
submitButton.addEventListener("click", submitFun);


function submitFun() {
    document.getElementById("tableBody").innerHTML = "";
    let date = new Date().toLocaleString();
    let senderNumber = document.getElementById("senderNumber").value; //a
    let receiverNumber = document.getElementById("receiverNumber").value; //b
    let amount = document.getElementById("amount").value;//c
    let from = document.getElementById("from").value;//d
    let to = document.getElementById("to").value;//g
    let isDone = false;
    let infoArray = [date, senderNumber, receiverNumber, amount, from, to, isDone];
    values.push(infoArray);
    let jsonValues = JSON.stringify(values);
    localStorage.setItem("myValue", jsonValues);
    update();
}


function update() {

    const sortFunction = (a, b) => {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] > b[0]) ? -1 : 1;
        }
    }

    values.sort(sortFunction);

    values.forEach((val, index) => {
        let html = `
            <tr id="tr${index}">
                <td>${val[0]}</td>
                <td>${val[1]}</td>
                <td>${val[2]}</td>
                <td>${val[3]}</td>
                <td>${val[4]}</td>
                <td>${val[5]}</td>
                <td><button id="okBtn" class="btn" onclick=okb(${index})>Ok</button></td>
            </tr>
    `;
        document.getElementById("tableBody").innerHTML = document.getElementById("tableBody").innerHTML + html;
        if (val[6] == true) {
            document.getElementById(("tr" + index)).classList.add("changeToBlue");
        }
    });
}

function okb(id) {
    document.getElementById(("tr" + id)).classList.add('changeToBlue');
    values[id][6] = true;
    let jsonValues = JSON.stringify(values);
    localStorage.setItem("myValue", jsonValues);
}

const changeToRed = () => {
    document.querySelectorAll(".changeToBlue");
}

