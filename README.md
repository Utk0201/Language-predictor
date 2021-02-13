# Language-predictor

## Features

* Uses the following npm packages
  * franc - to detect language
  * colors - to change color
  * langs - to convert ISO 639-1/2/3 codes corresponding to a given language into simple English words
* We slice every individual word typed by the user in *Terminal* and add a space after each word using a **for** loop
* We extract the code using **franc** package
* The extracted code return the corresponding language. This conversion of code into an English word is done by **langs** package
* Thereafter, suitable colors are added using **colors** package
* Basic **if** **else** is used to handle ambiguous inputs

You can use above codes to check which language a sentence belongs to. <br>
Just run the following <br>
`node index.js "Example"`

**(Replace "Example" with your desired string)**
