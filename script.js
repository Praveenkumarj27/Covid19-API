var div=document.createElement("div");    
div.innerHTML=`<div class="header">
<input class="form-control me-2" type="text" id="txt" placeholder="type country name like India, China...">
<button class="btn btn-success" type="button" onclick="foo()">Search</button>
</div>
<div class='box'>
<p id="active"></p>
<p id="recovered"></p>
<p id="deaths"></p>
</div>`;
div.style.textAlign="center";
document.body.append(div);


async function foo(){
    let cc=document.getElementById('txt').value
    let res=await fetch(`https://api.covid19api.com/total/country/${cc}`);
    let res1=await res.json();
    console.log(res1);

    let index=res1.length-1;
    var result=res1[index].Active;
    console.log(result);
  

    let index1=res1.length-1;
    var result1=res1[index].Recovered;
    console.log(result1);

    let index2=res1.length-1;
    var result2=res1[index].Deaths;
    console.log(result2);

    document.getElementById('active').innerHTML=`<b>Total Active Cases</b>:${result}`
    document.getElementById('recovered').innerHTML=`<b>Total Recoverd Cases</b>:${result1}`
    document.getElementById('deaths').innerHTML=`<b>Total Death Cases</b>:${result2}`
}