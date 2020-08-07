window.addEventListener('DOMContentLoaded', init);
const opts = ['*','/','+','-','9','8','7','6','5','4','3','2','1','0','.'];
//all keys in array, these are in the order they will display

const spec = ['*','/','+','-'];//special function keys in array

//function addOutput(e){
    //console.log(e.target.val);
    //let char = e.target.val;


//}//the function for output when keys are clicked 
//this function moved into the init function under the btn

function init() {
    document.title = "JavaScript Calculator";
    console.log('ready');
    //above event listener allows html to be ready once JavaScript is loaded
 
    //decimal and evaluation fix
    let dec = false;
    let eva = false;

    //style bellow for page rather than using css
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);

    //construct the output elements
    const output = document.createElement('input');
    output.setAttribute('type','text');
    output.classList.add('output');
    output.style.width = '100%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    container.appendChild(output);

    //container for all of the keys
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);

    //contruct our keys
    opts.forEach(function (val){
        //console.log(val);
        btnMaker(val,addOutput);
    })

    //the calculation of the expressions within the array
    btnMaker('=',evalOutput);
    btnMaker('C',clearOutput);

    //this will update the color values from red to black for error or valid
    function cOutput(v){
        output.style.border = v + '1px solid';
        output.style.color = v;
    }

    function evalOutput() {
        cOutput('black');
        console.log('=');
        if(output.value===""){
            cOutput('red');
        }
        else if(eva){
            cOutput('red');
        }
        else{
            output.value = eval(output.value);

        }
        dec = output.value.includes('.');
    }
    
    function clearOutput() {
        cOutput('black');
        output.value = "";
    }
    //the function to create the button
    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.style.fontSize ='2em';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);
    }

    function addOutput(e){
        console.log(dec);
        cOutput('black');
        console.log(e.target.val);
        let char = e.target.val;
        
        if(char == '.') {
            if(dec){
                char = '';
                cOutput('red');
            }else{
                dec= true;
            }
        }
        eva = spec.includes(char);
        if(eva){
            dec=false;
        }
        output.value += char; 
    }//the function for output when keys are clicked
   

}
