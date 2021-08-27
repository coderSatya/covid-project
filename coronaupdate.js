async function getCovidupdate(){
    const ress = await fetch('https://api.covid19api.com/summary');
   
    const jsdata = await ress.json();
    console.log(jsdata.Global );

    var data =""

    data = `
       <td>${data.Global.TotalConfirmed}</td>`
       $("#data").html(data)

    
}
getCovidupdate();