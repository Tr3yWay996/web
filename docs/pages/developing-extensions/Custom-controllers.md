<div class="position-relative p-4 text-body bg-body border rounded-4 d-flex align-items-center">
  <div class="me-3">
    <i class="bi bi-book h2"></i>
  </div>
  <p class="me-3 my-0">
    Written by those who've walked the path. Want to improve our guides? Contribute and help build something awesome!
  </p>
  <a href="https://github.com/BlueprintFramework/web/tree/main/docs/pages/developing-extensions">
    <button class="btn btn-primary px-4 rounded-pill placeholder-wave" type="button">
      Contribute
    </button>
  </a>
</div><br>

# Custom controllers
<h4 class="fw-light">Write custom controllers instead of using the premade one.</h4><br/>

Controllers allow for added functionality and flexibility to your extension's admin page. This can be useful when making configuration pages, calculating certain things beforehand, query APIs and much more.

Before you start writing your custom controller, you will need to create a `controller.php` file. After doing so, you'll want to define it in your extension's [conf.yml](?page=documentation/confyml):
```yaml
admin:
  controller: "controller.php"
```
<br/>

With that part done, go into your `controller.php` file and start by registering the namespace. You might notice the `{identifier}` text, which is a placeholder that automatically gets replaced by Blueprint, which you can learn more about [here](?page=documentation/placeholders).
```php
<?php
// Register namespace
namespace Pterodactyl\Http\Controllers\Admin\Extensions\{identifier};
```

Below that you want to import `View`, `Factory`, `Controller` and `BlueprintExtensionLibrary` to render blade views and make use of Blueprint's [$blueprint](?page=documentation/$blueprint) library.
```php
// Import libraries.
use Illuminate\View\View;
use Illuminate\View\Factory as ViewFactory;
use Pterodactyl\Http\Controllers\Controller;
use Pterodactyl\BlueprintFramework\Libraries\ExtensionLibrary\Admin\BlueprintAdminLibrary as BlueprintExtensionLibrary;
```

Create the `identifierExtensionController` class as shown below. Functions from this class will be called when loading your extension's admin page.
```php
// Register extension-specific ExtensionController class.
class {identifier}ExtensionController extends Controller
{
  // Construct class variables.
  public function __construct(
    private ViewFactory $view,
    private BlueprintExtensionLibrary $blueprint,
  ) {}

  // ...
}
```
<br/>

When visiting your extension's admin page, your browser sends a `GET` request to your Pterodactyl webserver, which calls a function called `index` on your controller. This also applies to a couple other request types which all have their own function calls:

`GET`: <code class="text-secondary">index($request)</code>\
`PATCH`: <code class="text-secondary">update($request)</code>\
`POST`: <code class="text-secondary">post($request)</code>\
`PUT`: <code class="text-secondary">put($request)</code>\
`DELETE`: <code class="text-secondary">delete($request, $target, $id)</code>

<br/>

To render your admin view when loading your extension's admin page in your browser, add the following code to your `identifierExtensionController` class:
```php
// Render page upon GET request.
public function index(): View
{
  return $this->view->make(
    'admin.extensions.{identifier}.index', [
      'root' => "/admin/extensions/{identifier}",
      'blueprint' => $this->blueprint,
    ]
  );
}
```
After adding this function, you should be able to load your extension's admin page when attempting to visit it and use [`$blueprint`](?page=documentation/$blueprint) inside of the view and controller.


<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Admin-views" class="btn btn-dark bg-light-subtle border-0 rounded-start-pill">Previous</a>
  <a href="?page=developing-extensions/Admin-configuration" class="btn btn-dark bg-light-subtle border-0 rounded-end-pill">Next</a>
</div>
