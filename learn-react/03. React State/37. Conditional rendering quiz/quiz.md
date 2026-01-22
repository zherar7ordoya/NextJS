1. What is "conditional rendering"?
   Conditional rendering in React refers to the practice of rendering different JSX elements or components based on certain conditions or states within your application.

2. When would you use &&?
   You would use && when you want to render something only if a condition is true. For example, if you have a variable `isLoggedIn` and you want to show a logout button only when the user is logged in, you can write:

    ```jsx
    {
        isLoggedIn && <button>Logout</button>;
    }
    ```

    When it's about an array (which could be empty and, therefore, render a "0" on the screen), you can use it like this:

    ```jsx
    {
        items.length > 0 && <ItemList items={items} />;
    }
    ```

3. When would you use a ternary?
   You would use a ternary operator when you need to choose between two options based on a condition. For example, if you want to display "Welcome back!" or "Please log in" depending on whether the user is logged in, you can write:

    ```jsx
    {
        isLoggedIn ? "Welcome back!" : "Please log in";
    }
    ```

4. What if you need to decide between > 2 options on what to display?
   If there are more than two options, it's best to use an if-else statement or switch statement for better readability and maintainability.
