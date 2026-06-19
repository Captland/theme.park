
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   __  __     _ __  __    _           
  / / / /____(_) /_/ /_  (_)______  __
 / / / / ___/ / __/ __ \\/ / ___/ / / /
/ /_/ / /  / / /_/ / / / / /  / /_/ / 
\\____/_/  /_/\\__/_/ /_/_/_/   \\__,_/                                    
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
