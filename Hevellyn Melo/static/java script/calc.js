function soma() {
    console.log("BOTÃO 'SOMAR' FOI CLICADO");
    n1 = document.getElementById("inputN1").value;
    n2 = document.getElementById("inputN2").value;
    resultado = (parseFloat(n1) + parseFloat(n2));
    document.getElementById("resultado").value = resultado;
    }
    
    function diminuir() {
    console.log("BOTÃO 'DIMINUIR' FOI CLICADO");
    n1 = document.getElementById("inputN1").value;
    n2 = document.getElementById("inputN2").value;
    resultado = (parseFloat(n1) - parseFloat(n2));
    document.getElementById("resultado").value = resultado;
    }
    
    function multiplicar() {
    console.log("BOTÃO 'MULTIPLICAR' FOI CLICADO");
    n1 = document.getElementById("inputN1").value;
    n2 = document.getElementById("inputN2").value;
    resultado = (parseFloat(n1) * parseFloat(n2));
    document.getElementById("resultado").value = resultado;
    }
    function dividir() {
    console.log("BOTÃO 'DIVIDIR' FOI CLICADO");
    n1 = document.getElementById("inputN1").value;
    n2 = document.getElementById("inputN2").value;
    resultado = (parseFloat(n1) / parseFloat(n2));
    document.getElementById("resultado").value = resultado;
    }

   
    function limpar() {
        console.log("o botão limpar foi clicado.");
        document.getElementById('inputN1').value = "";
        document.getElementById('inputN2').value = "";
        document.getElementById("resultado").value ="";
      
    
    }

    

    