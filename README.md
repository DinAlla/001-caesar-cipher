# dinalla-NODEJS2020Q3

Use the command npm i or npm install to install the dependencies

In the app folder write the command "node index [options]", where the options are:

-s, --shift: cipher shift (required, integer)<br/>
-a, --action: action - encode/decode (required)<br/>
-i, --input: input file (default: stdin)<br/>
-o, --output: output file (default: stdout)<br/>

Usage examples:<br/>
$ node index --action encode --shift 11 --input first-file.txt --output second-file.txt<br/>

$ node index -a encode -s 11 -i first-file.txt -o second-file.txt<br/>

$ node index -a encode --shift 52 -o "./output.txt"<br/>

$ node index -a decode -s 52<br/>

p.s. <br/>
NOT IMPLEMENTED:<BR/>

if the text is entered from the console, then the program should not terminate after encrypting / decrypting the entered text, i.e. it should be possible to enter more text