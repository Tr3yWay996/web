# Scripts
<h4 class="fw-light">Advanced feature allowing extensions to go beyond Blueprint's extension API.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-pin-angle-fill mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>This section is still being written.</b> You might run into unfinished explanations, incorrect instructions, outdated or misinformation.</div>
</div>
<div class="alert alert-danger mt-2 rounded-4" role="alert">
  <i class="bi bi-ban mt-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3">Extension scripts can be destructive and collide with each other. <b>Always prioritize compatibility</b> with other extensions and <b>extensively test</b> your scripts before distributing them.</div>
</div><br/>

### **What are scripts?**
Extension scripts are advanced collections of commands allowing extensions to extend parts of Pterodactyl that are out of Blueprint's scope. Due to the nature of the complexity related to these scripts, they are advised against.

Scripts can **prevent extensions from being listed** on the [extension browse list](../browse) if they do not meet **all of the following requirements**:
- Scripts <u>should never</u> cause conflicts with other extensions respecting these guidelines.
- Scripts must stay <u>within the Pterodactyl instance</u> and not edit anything outside of the panel's webserver folder without user consent.
- Extensions must undo all of their changes when removing the extension.
- Updating extensions utilizing scripts must not break their modifications.
- Scripts should use **environment variables** or [placeholders](?page=documentation/placeholders) for detecting the webserver folder.

**Export scripts are free from (most of) these limitations** as they are specifically made to help the developer automate actions upon export. As long as you don't cause permanent damages through export scripts, you should be fine.