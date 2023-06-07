let count = 0;
function increment()
{
    count++
    document.getElementById("count").innerText = count
    console.log(count)
}

function save()
{
    if(count!=0)
    {   let temp = document.getElementById("record")
        document.getElementById("record").innerText = " " + temp.innerText + count + "-"
        count = 0
        document.getElementById("count").innerText = count
    }
}

function download(filename) {
    var text = document.getElementById("record").innerText
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }