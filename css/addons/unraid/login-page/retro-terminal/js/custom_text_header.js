
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   __  __ya _  __  _   _                      
  / / / /____(_) /_/ /_  (_)________  __      
 / / / / ___/ / __/ __ \\/ / ___/ __ \\/ /      
/ /_/ / /  / / /_/ / / / / /  / /_/ /_/       
\\____/_/  /_/\\__/_/ /_/_/_/   \\____/(_)       
                                              
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
