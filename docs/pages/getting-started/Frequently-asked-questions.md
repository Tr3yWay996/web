# Frequently Asked Questions
<h4 class="fw-light">Answers to questions we get asked on a regular basis</h4><br/>

<div class="accordion" id="accordionFAQ">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Blueprint and why does is exist?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
      <div class="accordion-body">
        Blueprint is a framework for developing, installing and managing versitile extensions for the <a href="https://pterodactyl.io">Pterodactyl panel</a>. It aims to be a full on replacement for overwriting files when making modifications while improving the experience for developers, clients and system administrators.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Where can I discover and download extensions?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
      <div class="accordion-body">
        We have a "browse" section on our website, which you can find <a href="/browse">here</a>. You'll be able to find awesome themes and extensions there which are made with the extension framework.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How can I install, remove and update extensions?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
      <div class="accordion-body">
        To <b>install</b> or <b>update</b> an extension, upload the <code>example.blueprint</code> file to your Pterodactyl installation folder (commonly <code>/var/www/pterodactyl</code>) and run <code>blueprint -install example</code>.
        <br><br>
        To <b>remove</b> an extension, run <code>blueprint -remove example</code>.
      </div>
    </div>
  </div>
</div>
