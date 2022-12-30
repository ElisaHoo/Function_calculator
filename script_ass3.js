const data_y = [];
const data_x = [];

const ctx = document.getElementById("id_plotter");

let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data_x,
        datasets: [
            {
                label: "f(x)",
                data: data_y,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                cubicInterpolationMode: 'monotone',
            }
        ]
    },
});

function displayInput(event) {
    let start = parseFloat(document.getElementById("id_startX").value);
    let end = parseFloat(document.getElementById("id_endX").value);
    let step = parseFloat(document.getElementById("id_stepX").value);
    let results1 = "";
    data_y.length = 0;
    data_x.length = 0;
    
    for (let x = start; x <= end; x += step) {
        try {
            let y = funct(x);
            data_y.push(y);
            data_x.push(x);
            results1 += `f(${x}) = ${y}\n`;
        }
        catch(error) {
            alert(error.message); 
        }
    
        }
    chart.update();
    document.getElementById("id_result").innerText = results1;
}
 
function funct(x) {
    let func = document.getElementById("id_function").value;
    let search = "x";
    let f = func.replaceAll(search, x);
    with(Math) {
        return eval(f);
    }
}

document.getElementById("id_button").addEventListener("click", displayInput);


