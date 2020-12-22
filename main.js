//Clear All function with onclick = "clearInputGC()"
function clearInputGC(){
	"use strict";
	document.getElementById("results").style.display = "none";      //hide the table element
	document.getElementById("sequence").value="";
    document.getElementById("sequence").focus();
	document.getElementById("a_count").innerHTML = "0";
	document.getElementById("c_count").innerHTML = "0";
	document.getElementById("g_count").innerHTML = "0";
	document.getElementById("t_count").innerHTML = "0";
	document.getElementById("error_count").innerHTML = "0";

	document.getElementById("a_per").innerHTML = "00.00";
	document.getElementById("c_per").innerHTML = "00.00";
	document.getElementById("g_per").innerHTML = "00.00";
	document.getElementById("t_per").innerHTML = "00.00";
	document.getElementById("error_per").innerHTML = "00.00";
}

//Calculate function with onclick = "clearInputGC()"
function gc(){
            "use strict"; // indicate that the code should be executed in "strict mode"
                          // with strict mode, cannot use undeclared variables.
            var error_per,gc_per,at_per,a_per,c_per,g_per,t_per,      //define the variable
                a = 0,c = 0,g = 0,t = 0,n = 0,i = 0,seq_length = 0;   //define the variable and initialize with 0

            //get the input by id from the textarea and assign as "lines"
            //toUpperCase() = capitalize the character
            //split() =  split between each character
            var lines = document.getElementById("sequence").value.toUpperCase().split("\n");

            for (var i=0; i<lines.length; i++){     //looping function (iterate until i > lines.length)
                if (lines[i][0] != ">"){            // if the first character of the lines is not equal > then execute the "if statement"
                                                    // if  not execute the "else statement"
                    var sequence = lines[i].trim();     //trim() = remove whitespace from both sides of a string

                    seq_length += sequence.length;      //calculate the length & adds value to a variable "seq_length"

                    for (var j = 0; j < sequence.length; j++) {     //looping function (iterate until j > sequence.length)
                            if (sequence[j] === "A") {      //if the character A in the sequence is equal value and equal type with value "A" declared
                                a += 1;                     //then variable a will increase by 1
                            }
                            else if (sequence[j] === "C") {
                                c += 1;
                            }
                            else if (sequence[j] === "G") {
                                g += 1;
                            }
                            else if (sequence[j] === "T" || sequence[j] === "U") {
                                t += 1;
                            }
                            else {
                                n += 1;
                            }
                    }
                }
                else{    //if the "if statement" is false
                        // Fasta header
                 }
            }

            //Show results
            document.getElementById("a_count").innerHTML = a;       //innerHTML is a property
            document.getElementById("c_count").innerHTML = c;       //modify the content of an HTML element by using innerHTML
            document.getElementById("g_count").innerHTML = g;
            document.getElementById("t_count").innerHTML = t;
            document.getElementById("error_count").innerHTML = n;


            if (a == 0) {
                a_per = "0";
            }
            else {
                a_per = (a / seq_length * 100).toFixed(2);      //formula to calculate the percentage of nucleotide A
            }

            if (c == 0) {
                c_per = "0";
            }
            else {
                c_per = (c / seq_length * 100).toFixed(2);      //formula to calculate the percentage of nucleotide C
            }

            if (g == 0) {
                g_per = "0";
            }
            else {
                g_per = (g / seq_length * 100).toFixed(2);      //formula to calculate the percentage of nucleotide G
            }

            if (t == 0) {
                t_per = "0";
            }
            else {
                t_per = (t / seq_length * 100).toFixed(2);      //formula to calculate the percentage of nucleotide T
            }

            if (n == 0) {
                error_per = "0";
            }
            else {
                error_per = (n / seq_length * 100).toFixed(2);  //formula to calculate the percentage of Error character
            }

            if (g == 0 && c == 0) {
                gc_per = "0";
            }
            else {
                gc_per = ((g + c) / seq_length * 100).toFixed(2);     //formula to calculate the percentage of GC content
            }

            if (a == 0 && t == 0) {
                at_per = "0";
            }
            else {
                at_per = ((a + t) / seq_length * 100).toFixed(2);   //formula to calculate the percentage of AT content
            }


            document.getElementById("gc_content").innerHTML = gc_per;
            document.getElementById("at_content").innerHTML = at_per;

            document.getElementById("a_per").innerHTML = a_per;
            document.getElementById("c_per").innerHTML = c_per;
            document.getElementById("g_per").innerHTML = g_per;
            document.getElementById("t_per").innerHTML = t_per;
            document.getElementById("error_per").innerHTML = error_per;

            document.getElementById("results").style.display = "block";    //show the table element

            }

function plot(){
        document.getElementById("plot").onclick = function () {
        location.href = "https://www.w3schools.com/";
        };

}



