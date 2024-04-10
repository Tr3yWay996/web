var u = new URL(window.location.href);
var d = u.searchParams.get('page');
try { document.querySelector('a[href="?page='+d+'"] button').classList += (" disabled border border-2 text-secondary border-secondary border-top-0 border-end-0 border-bottom-0 rounded-0 text-start") } catch {  }
if(d) { a = './pages/'+d+'.md' } else { a = './pages/Documentation.md' }
fetch(a)
  .then(b => {
    if (!b.ok) {
      throw new Error(`Network response was not ok: ${b.status}`);
      window.location="?page=Error"
    }
    return b.text();
  })
  .then(markdownContent => {
    document.getElementById('content').innerHTML = marked.parse(markdownContent);
    document.querySelectorAll(".hl-escape").forEach(function(element) {
      element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    });
    hljs.highlightAll(document.getElementById('content'));
    
    // Add "Edit on GitHub" button
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
      addGitHubEditButton(d, contentDiv); // Call the function to add the button
    }

    // Snippets
    document.querySelectorAll("tag[type=new]").forEach(function(element) {element.innerHTML = '<span class="badge text-primary-emphasis"><i class="bi bi-stars"></i> New in <b>'+element.getAttribute("content")+'</b></span>'; });
    document.querySelectorAll("tag[type=required]").forEach(function(element) {element.innerHTML = '<span class="badge bg-danger-subtle text-danger-emphasis rounded-pill">Required</span>'; });
    document.querySelectorAll("tag[type=deprecated]").forEach(function(element) {element.innerHTML = '<span class="badge text-danger-emphasis"><i class="bi bi-exclamation-triangle-fill"></i> Deprecated in <b>'+element.getAttribute("content")+'</b></span>'; });
    document.querySelectorAll("tag[type=hotfix]").forEach(function(element) {element.innerHTML = '<span class="badge text-danger-emphasis"><i class="bi bi-exclamation-triangle-fill"></i> Hotfix</b></span>'; });
    //document.querySelectorAll("feature[type=true]").forEach(function(element) {element.outerHTML = '<span class="text-secondary-emphasis"><icon name="check2"></icon> '+element.getAttribute("name")+'</span><br>'; });
    //document.querySelectorAll("feature[type=false]").forEach(function(element) {element.outerHTML = '<span class="text-secondary opacity-75"><icon name="x-lg"></icon> '+element.getAttribute("name")+'</span><br>'; });
    document.querySelectorAll("icon").forEach(function(element) {element.outerHTML = '<i class="bi bi-'+element.getAttribute("name")+'"></i>'; });

    // Bootstrap shortcuts
    //id=0
    //document.querySelectorAll("row").forEach(function(element) {
    //  let inner = element.innerHTML
    //  id = id + 1
    //  element.outerHTML = `<div class="row" id="row-`+id+'"></div>';
    //  document.querySelector("#row-"+id).innerHTML = inner;
    //});
  })
  .catch(c => {
    console.error('Error fetching the Markdown content:', c);
    if(window.location.hostname != "127.0.0.1") {
      window.location="?page=Error"
    }
  });

  function addGitHubEditButton(page, contentDiv) {
    // Construct the correct GitHub URL for the markdown file
    const githubRepoURL = 'https://github.com/BlueprintFramework/web/edit/main/docs/pages/';
    const githubEditURL = `${githubRepoURL}${page}.md`;

    const editButton = document.createElement('a');
    editButton.href = githubEditURL;
    editButton.target = '_blank';
    editButton.rel = 'noopener noreferrer';
    editButton.classList = 'float-end'
    editButton.innerHTML = '<button type="button" class="btn btn-dark bg-light-subtle border-light-subtle git-button" style="margin-right: 5px;"><i class="bi bi-git mx-1"></i></button>';

    // Find the parent element of the btn-group in the contentDiv
    const btnGroup = contentDiv.querySelector('.docs-navigator');
    if (btnGroup) {
      editButton.style.marginLeft = '10px'; // Optional: Adjust margin between the buttons

      const parentElement = btnGroup.parentElement;
      if (parentElement) {
        parentElement.insertBefore(editButton, btnGroup); // Insert the button before the btn-group
      } else {
        console.error('Parent element not found.');
      }
    } else {
      console.error('btn-group element not found.');
    }
  }
