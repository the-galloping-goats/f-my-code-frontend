const axios = require("axios");
const buildElement = require("./utils");



function buildComments (comments) {
  console.log(comments);
  
  comments.forEach(comment => {
    console.log(buildComments(comments));
  });
}






<li>
<div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
<div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
</li>



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});