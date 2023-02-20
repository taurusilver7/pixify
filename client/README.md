# Pixify - Client

## Available Scripts

```bash
yarn create vite
# follow the prompt to scaffold a project.
yarn install
# install dependencies
yarn dev (start development server)
```

## TailwindCSS Configuration

```bash
yarn add tailwindcdd autoprefixer postcss -D
# and
npx tailwindcss init -p (genertate config files for peer dependencies)
# and
Configure the template paths in tailwind.config.cjs
# and
Add tailwind directives to the stylesheet.
```

## Build

Scaffold a starter template using a script & refactor the directories. Add tailwind directives to the application build.

Create two pages Home & CreatePost for populating the images & creating new ones.

Populte & style the App component with index page with header + main elments. Add routes in the main element for Home & CreatePost pages.

Get you own custom [logo](https://express.adobe.com/) to customize the application with your signature.

The home page has a search form to filter the library for images & a loading component. Create a custom [loading](https://loading.io/) component here.

Create a component to map the rendered search results in a conditional grid layout. The component takes in data + title to map the search results.

The data prop is an arrary which the component maps over. But the prop is given as string in the component, which will make React iterate over the string. Replace the string with an empty array.

Populate the /create page with a form taking two inputs (name & image prompt) to generate a preview image to the element below.

Create a FormField component to dynamically create the input fields in the create-page form. It takes two additional props to add the auto-generated prompts to the field.

Place the image element with the loader component for a better UI/UX. Add the generate & share buttons to the form to complete the action in a single element.

The form input changes are captured by handleChange() function, which update the form state with the previous form values + latest input value in the object.

The SurpriseMe() function handles (updates) the randomly generated prompt from the util function to the setForm() state function.

Customize the Node server that interacts with the DALL-E OpenAI API to get the response for the prompt requests.


