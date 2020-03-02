// If I uncomment the below Triple-Slash Directive then the project is able to find the @types/pdfmake declaration
// Without the Triple-Slash Directive, the declaration is not found



// /// <reference path="../../sample/node_modules/@types/pdfmake/index.d.ts" />




// Error in vscode will be:
// Could not find a declaration file for module 'pdfmake/build/pdfmake'. '/sample/node_modules/pdfmake/build/pdfmake.js' implicitly has an 'any' type.
// Try `npm install @types/pdfmake` if it exists or add a new declaration (.d.ts) file containing `declare module 'pdfmake/build/pdfmake';`ts(7016)
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;