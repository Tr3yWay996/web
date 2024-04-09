# React components
<h4 class="fw-light">Add your own component on specific places in the Pterodactyl panel.</h4><br/>

<div class="alert alert-dark bg-body mt-3 rounded-4 border" role="alert">
  <i class="bi bi-pin-angle-fill mb-1" style="font-size:23px; float: left;"></i>
  <div class="ps-3 ms-3"><b>This guide is still being written.</b> You might run into unfinished explanations, incorrect instructions, outdated or misinformation.</div>
</div><br/>

Blueprint extensions can add custom pages to Pterodactyl and content to existing pages through the [Components.yml](?page=documentation/componentsyml) feature.

Before we can start utilizing this feature, create a directory called `components` and assign it in your [conf.yml](?page=documentation/confyml) configuration like shown below.
```yaml
dashboard:
# css: ""
# wrapper: ""
  components: "components"
```

Inside of that directory, create a file called `Components.yml`, which will contain our Components configuration. Inside of that file, add the example configuration from the [Components.yml](?page=documentation/componentsyml) documentation.

Now create a file called `ExampleComponent.tsx` and define it as a new route in your `Components.yml` configuration.
```tsx
// ExampleComponent.tsx
import React from 'react';
import PageContentBlock from '@/components/elements/PageContentBlock';

const ExampleComponent = () => {
  return (
    <PageContentBlock title={'Example'}>
      <>
        {/* ... */}
      </>
    </PageContentBlock>
  );
};

export default ExampleComponent;
```
```yaml
# Components.yml
Navigation:
  Routes:
    - { Name: "Example", Path: "/example", Type: "server", Component: "ExampleComponent" }
```
When building your extension, you'll now see an "Example" page which you can access when managing servers. You may use `Type: "account"` if you want add a page to the account page group.

You can create additional components and import them from your `ExampleComponent.tsx`. For this example, we'll create a new file called `Content.tsx` inside of the components folder, import it and use it inside of the custom page.
```tsx
// Content.tsx
import React from 'react';

const Content = () => {
  return (
    <>
      <p>This is an example component.</p>
    </>
  );
};

export default Content;
```
```tsx
// ExampleComponent.tsx
import Content from '@blueprint/extensions/{identifier}/Content';
```
```tsx
// ExampleComponent.tsx
return (
  <PageContentBlock title={'Example'}>
    <>
      <Content/>
    </>
  </PageContentBlock>
);
```

With the code mentioned above, you've added the `Content.tsx` component into the `ExampleComponent.tsx`. We can add `Content.tsx` to existing pages as well through the [Components.yml](?page=documentation/componentsyml) configuration. Try assigning it to one of the placement options in the components configuration and see what it does.

<div class="btn-group docs-navigator" role="group" aria-label="Navigation" style="float: right">
  <a href="?page=developing-extensions/Dashboard-wrappers" class="btn btn-dark bg-light-subtle border-light-subtle">Previous</a>
  <a href="?page=developing-extensions/Packaging-extensions" class="btn btn-dark bg-light-subtle border-light-subtle">Next</a>
</div>
