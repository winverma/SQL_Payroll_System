
var arr = ["Unlimited payrolls", "All 50 states", "Multi-state payroll", "Payroll in any single state", "Tax filings and payments", "Next-day direct deposit"];
var new_table = ["2-day direct deposit", "4-day direct deposit", "State and Federal Unemployment Insurance", "W-2s and 1099s", "Garnishments", "Multiple pay rates and schedules", "Tip credits", "Direct deposit", "Paid-time-off policy tracking", "Holiday pay", "Time-off tracker & reporting", "Accounting integrations", "Time-tracking integrations", "State new hire reporting", "Payroll reports", "Payroll on AutoPilot®"];
var emp_be = ["Paystubs and tax forms", "Lifetime access", "Payroll self-onboarding", "Payday emails", "New hire welcome", "Gusto Wallet"];

var removeBtn = document.createElement('button');
removeBtn.textContent = "See less"
removeBtn.setAttribute('id', 'showless')
removeBtn.setAttribute('class', 'btn-design')
var table = document.getElementById('table-container');
var contain = document.getElementById('table-container')
var mainrow = document.createElement('tr');
var head1 = document.createElement('th');
var head2 = document.createElement('th')
var head3 = document.createElement('th');
var head4 = document.createElement('th')
var head5 = document.createElement('th')
head1.setAttribute('class', 'long-th')
head2.setAttribute('class', 'margin-lefty')
head3.setAttribute('class', 'margin-lefty')
head4.setAttribute('class', 'margin-lefty')
head5.setAttribute('class', 'margin-lefty')


head2.textContent = "Basic"
head3.textContent = "Core"
head4.textContent = "Complete"
head5.textContent = "Complete"
mainrow.appendChild(head1)
mainrow.appendChild(head2)
mainrow.appendChild(head3)
mainrow.appendChild(head4)
mainrow.appendChild(head5)
table.appendChild(mainrow)
for (i = 0; i < arr.length; i++) {
    var row = document.createElement('tr');
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    td1.textContent = arr[i];
    td1.setAttribute('class', 'long')
    td2.setAttribute('class', 'check-mark')
    td3.setAttribute('class', 'check-mark')
    td4.setAttribute('class', 'check-mark')
    td5.setAttribute('class', 'check-mark')
    if (i % 2 == 0) {
        row.setAttribute('class', 'white')
    }
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    if (i == 5) {
        var opaRow = row;
        // row.style.opacity = "25%"
        opaRow.style.opacity = "25%"
        // row.setAttribute('class',)
    }
    row.appendChild(td5);
    table.appendChild(row);

    // body.appendChild(table)
}



var btn = document.createElement('button');
btn.textContent = "See all features"
btn.setAttribute('class', 'btn-design')
btn.setAttribute('id', 'see-more')
contain.appendChild(btn)
count = 0;
function displayFuntion() {
    count++;
    arrow.setAttribute('class', 'rotate')
    document.getElementById('answer1').style.display = "block";
    document.getElementById('answer1').style.transition = "0.4s ease-in"
    // document.getElementById('answer1').setAttribute('class','transition')
    if (count % 2 == 0) {
        arrow.removeAttribute('class')
        document.getElementById('answer1').style.display = "none";
        arrow.setAttribute('class', 'rev-rotate')

    }
}
count = 0;
function displayFuntion2() {
    count++;
    arrow2.setAttribute('class', 'rotate')
    document.getElementById('answer2').style.display = "block";
    if (count % 2 == 0) {
        arrow2.removeAttribute('class')
        document.getElementById('answer2').style.display = "none";
        arrow2.setAttribute('class', 'rev-rotate')

    }
}

function tonormal() {
    arrow.setAttribute('class')
}

var arrow = document.getElementById('icon');
var arrow2 = document.getElementById('icon2')
var ques1 = document.getElementById('first-ques');
var ques2 = document.getElementById('second-ques');
arrow.addEventListener('click', displayFuntion)
arrow2.addEventListener('click', displayFuntion2)
ques1.addEventListener('click', displayFuntion)
ques2.addEventListener('click', displayFuntion2)
var seeMoreBtn = document.getElementById('see-more');

function showLess() {
    console.log(newtable.length)
    newrow.style.display = 0;
}
function showMore() {
    for (i = 0; i < new_table.length; i++) {
        var newrow = document.createElement('tr');
        var newtd1 = document.createElement('td')
        var newtd2 = document.createElement('td')
        var newtd3 = document.createElement('td')
        var newtd4 = document.createElement('td')
        var newtd5 = document.createElement('td')
        newtd1.textContent = new_table[i];
        newtd1.setAttribute('class', 'long')
        newtd2.setAttribute('class', 'check-mark')
        newtd3.setAttribute('class', 'check-mark')
        newtd4.setAttribute('class', 'check-mark')
        newtd5.setAttribute('class', 'check-mark')
        if (i % 2 == 0) {
            newrow.setAttribute('class', 'white')

        }
        newrow.appendChild(newtd1);
        newrow.appendChild(newtd2);
        newrow.appendChild(newtd3);
        newrow.appendChild(newtd4);
        newrow.appendChild(newtd5);
        table.appendChild(newrow);
        opaRow.style.opacity = "100%"
        seeMoreBtn.style.display = "none";
    }
    var parent_em = document.getElementById('table-container');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = "Employee Benefits";
    td.style.fontWeight = "bold";
    td.style.paddingLeft = "22px"
    td.style.paddingTop = "22px"
    tr.append(td);

    parent_em.append(tr);
    console.log(emp_be.length);
    for (j = 0; j < emp_be.length; j++) {
        var row_em = document.createElement('tr');
        var td1_em = document.createElement('td')
        var td2_em = document.createElement('td')
        var td3_em = document.createElement('td')
        var td4_em = document.createElement('td')
        var td5_em = document.createElement('td')
        td1_em.textContent = emp_be[i];
        td1_em.setAttribute('class', 'long')
        td2_em.setAttribute('class', 'check-mark')
        td3_em.setAttribute('class', 'check-mark')
        td4_em.setAttribute('class', 'check-mark')
        td5_em.setAttribute('class', 'check-mark')
        if (i % 2 == 0) {
            row_em.setAttribute('class', 'white')
        }
        row_em.appendChild(newtd1);
        row_em.appendChild(newtd2);
        row_em.appendChild(newtd3);
        row_em.appendChild(newtd4);
        row_em.appendChild(newtd5);
        table.appendChild(row_em);
        var parent = document.getElementById('table-container');
        parent.appendChild(removeBtn)
    }
}
function showless() {
    var tab = document.getElementById('table-container');
    var tr = tab.querySelectorAll('tr');
    for (i = 7; i < tr.length; i++) {
        tr[i].style.display = "none";
        removeBtn.remove();
        seeMoreBtn.style.display = "block";


    }
}
seeMoreBtn.addEventListener('click', showMore)
removeBtn.addEventListener('click', showless)


