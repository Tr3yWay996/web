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
  })
  .catch(c => {
    console.error('Error fetching the Markdown content:', c);
    window.location="?page=Error"
  });

  function addGitHubEditButton(page, contentDiv) {
    // Construct the correct GitHub URL for the markdown file
    const githubRepoURL = 'https://github.com/teamblueprint/web/edit/main/docs/pages/';
    const githubEditURL = `${githubRepoURL}${page}.md`;

    const editButton = document.createElement('a');
    editButton.href = githubEditURL;
    editButton.target = '_blank';
    editButton.rel = 'noopener noreferrer';
    editButton.classList = 'float-end'
    editButton.innerHTML = '<button type="button" class="btn btn-dark bg-light-subtle border-light-subtle" style="margin-right: 5px;"><i class="bi bi-git mx-1"></i></button>';

    // Find the parent element of the btn-group in the contentDiv
    const btnGroup = contentDiv.querySelector('.btn-group');
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
