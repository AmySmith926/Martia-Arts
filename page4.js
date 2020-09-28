let saved = JSON.parse(localStorage.getItem("savedElements"));//getting saved items

let html = "";

console.log(saved); 

for (const item in saved) {
    console.log(saved[item]);
    html = html + saved[item].element
}

let show1 = document.getElementById("show1");

show1.innerHTML = 
`
<div class="px-3 py-3 rounded mt-3" id="display">
    ${html}
</div>
`;