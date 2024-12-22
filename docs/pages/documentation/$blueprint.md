# $blueprint

<h4 class="fw-light">Library for extensions to simplify admin notifications, databasing and more.</h4><br/>

<div class="alert mt-2 rounded-4 border" role="alert">
  <i class="bi bi-currency-dollar mt-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>BlueprintExtensionLibrary</b> (or $blueprint) is added automatically when using the default controller by leaving your controller path option blank. For custom controllers, you may refer to <a href="?page=developing-extensions/Custom-controllers" class="alert-link">this guide</a>.</div>
</div><br/>

### **What is $blueprint?**

\$blueprint (short for BlueprintExtensionLibrary) allows extensions to do operations like databasing inside of custom controllers (if imported), admin wrappers and dashboard wrappers.

The BlueprintExtensionLibrary is automatically imported to dashboard wrappers, admin wrappers, admin views and default admin controllers. It's mainly used to carry over configuration options from the extension's admin page to anywhere else but can also be used to read, make and wipe files or display notifications to administrators.

<br/>

### **Functions**

##### Databasing <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Admin <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Client <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Console <i class="bi bi-check"></i></span>

`dbGet(table, record, default: optional)` <tag type="pending" content="beta-2024-12"/></tag>\
Fetch a record from the database. `default` (or `null` if not defined) is returned when the database value is empty.

`dbSet(table, record, value)`\
Set a database record.

`dbForget(table, record)`\
Delete/forget a database record.

`dbGetMany(table, string_array: optional)` <tag type="pending" content="beta-2024-12"/></tag>\
Fetches multiple records from the database in an associative array.

`dbSetMany(table, associative_array)` <tag type="pending" content="beta-2024-12"/></tag>\
Sets multiple records in the database at once.

`dbForgetMany(table, array)` <tag type="pending" content="beta-2024-12"/></tag>\
Deletes/forgets multiple records from the database.

<br/>

##### Notifications <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Admin <i class="bi bi-check"></i></span> <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">Client <i class="bi bi-x"></i></span> <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">Console <i class="bi bi-x"></i></span>

`notify(text)`\
Allows you to show notifications on the admin panel. Appears on next reload.

~~`notifyAfter(delay, text)`~~ <tag type="deprecated" content="beta-2024-12"/></tag>\
Allows you to show notifications on the admin panel after a delay. Admin page automatically reloads after specified delay.

~~`notifyNow(text)`~~ <tag type="deprecated" content="beta-2024-12"/></tag>\
Allows you to show notifications on the admin panel after a delay. This behaves similarly to using a delay of zero with `notifyAfter()`.

<br/>

##### Files <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Admin <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Client <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Console <i class="bi bi-check"></i></span>

`fileRead(path)`\
Returns the contents of the file defined in `path`.

`fileMake(path)`\
Make a new file with the name defined in `path`.

`fileWipe(path)`\
Removes the file defined in `path` from the filesystem.

<br/>

##### Extensions <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Admin <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Client <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Console <i class="bi bi-check"></i></span>

`extension(identifier)`\
Returns true if an extension with the identifier defined in `identifier` is installed, otherwise returns false.

`extensions()` <tag type="pending" content="beta-2024-12"/></tag>\
Returns an array containing all installed extensions's identifiers.

<br/>

##### Import <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Admin <i class="bi bi-check"></i></span> <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">Client <i class="bi bi-check"></i></span> <span class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill opacity-50">Console <i class="bi bi-x"></i></span>

`importStylesheet(url)`\
Returns a HTML link tag importing the specified stylesheet with additional URL params to avoid issues with stylesheet cache.

`importScript(url)`\
Returns a HTML script tag importing the specified script with additional URL params to avoid issues with script cache.
