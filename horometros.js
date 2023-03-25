var unidad;
var iframe_yauricocha = 'https://app.powerbi.com/view?r=eyJrIjoiYjE1MjE1MGQtYzQxMS00YjRhLTkzNDAtY2E0YzY1NTRmNzY2IiwidCI6IjA1MWQ5ZTNlLWE5NjAtNDE2YS05ODY4LThhYjMzMTlmM2Q0YyJ9&pageName=ReportSection'
var iframe_cmh;
var iframe_kolpa;
var iframe_poderosa;


class horometros {
    constructor(){
        let url_string = window.location.href;
        let url = new URL(url_string);
       
        unidad = url.searchParams.get("unidad");
        unidad = unidad.toUpperCase();
        console.log(unidad);
        //sessionStorage.setItem('unidad',unidad);
    }


}

const hrs = new horometros();

document.addEventListener("DOMContentLoaded",function(){
    if(unidad=="YAURICOCHA"){
        document.querySelector("#iframe_content").innerHTML = `
            <div class="main">
                <div class="main-container">
                <iframe src="${iframe_yauricocha}" allowfullscreen>
                </div>
            </div>
        `;
        console.log(unidad)
    }else if(unidad=="CMH"){
        document.querySelector("#iframe_content").innerHTML = `
            <div class="main">
                <div class="main-container">
                <iframe src="${iframe_cmh}" allowfullscreen>
                </div>
            </div>
        `;
        console.log(unidad)
    }else if(unidad=="KOLPA"){
        document.querySelector("#iframe_content").innerHTML = `
            <div class="main">
                <div class="main-container">
                <iframe src="${iframe_kolpa}" allowfullscreen>
                </div>
            </div>
        `;
        console.log(unidad)
    }else if(unidad=="PODEROSA"){
        document.querySelector("#iframe_content").innerHTML = `
            <div class="main">
                <div class="main-container">
                <iframe src="${iframe_poderosa}" allowfullscreen>
                </div>
            </div>
        `;
        console.log(unidad)
    }

});