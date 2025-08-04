# Portfolio Website

This is a modern, responsive portfolio website template built with HTML, CSS, and JavaScript. It's designed to be easily customizable and to provide a professional and feature-rich showcase for your work.

## Features

-   **Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktops.
-   **Theme Switcher:** A button to toggle between light and dark modes, with the user's preference saved in local storage.
-   **Smooth Scrolling:** Smooth, animated scrolling when navigating to different sections of the page.
-   **Active Navigation Highlighting:** The navigation link for the current section is automatically highlighted as you scroll.
-   **Scroll Animations:** Sections subtly fade in and animate as they enter the viewport.
-   **Logo Placeholder:** An area in the header to easily add your own logo.
-   **SVG Placeholders:** Decorative SVG shapes are included to enhance the design, which can be easily replaced.
-   **Comprehensive Sections:**
    -   **About Me:** A section to write a short bio.
    -   **Skills:** A grid to showcase your skills.
    -   **Projects:** A detailed project showcase with images, descriptions, technologies used, and links to the live project and source code.
    -   **Experience:** A section to list your work experience.
    -   **CV Download:** A button to allow visitors to download your CV.
-   **Functional Contact Form:** A clean and simple contact form for visitors to get in touch.
-   **Mobile Navigation:** A hamburger menu for easy navigation on mobile devices.
-   **SEO and Social Sharing:** Includes meta tags for search engine optimization and Open Graph tags for rich social media sharing.
-   **Accessibility:** Built with semantic HTML and ARIA attributes for improved accessibility.
-   **Well-Commented Code:** The code is clean and well-commented to make customization straightforward.
-   **Google Fonts:** Uses the Roboto font for a clean and modern look.
-   **License:** Comes with an MIT license, allowing for free use and modification.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-website.git
    ```
2.  **Open `index.html` in your browser.**
3.  **Customize the content:**
    -   Open `index.html` and replace the placeholder content with your own information.
    -   Update the `css/style.css` file to change the colors, fonts, and other styles.
    -   Replace the placeholder logo and CV in the `images` and `documents` folders with your own files.
    -   Add your own favicon in `images/favicon.ico`.

## Setting Up the Contact Form

This template uses [Formspree](https://formspree.io/) to handle contact form submissions. To get it working, follow these steps:

1.  **Create a Formspree account:** Go to [formspree.io](https://formspree.io/) and sign up for a free account.
2.  **Create a new form:** In your Formspree dashboard, create a new form and give it a name (e.g., "Portfolio Contact").
3.  **Get your form endpoint URL:** Formspree will provide you with a unique URL for your form. It will look something like this: `https://formspree.io/f/your_unique_form_id`.
4.  **Update `index.html`:** Open the `index.html` file and find the `<form>` tag in the "Contact" section. Replace the placeholder `action` URL with your unique Formspree URL:

    ```html
    <!-- Before -->
    <form
      action="https://formspree.io/f/your_form_id"
      method="POST"
      class="contact-form"
    >

    <!-- After (replace with your actual URL) -->
    <form
      action="https://formspree.io/f/your_unique_form_id"
      method="POST"
      class="contact-form"
    >
    ```
5.  **That's it!** When someone submits the form, you will receive an email with the form data.

## Deployment

You can easily deploy this website using GitHub Pages.

1.  **Create a new repository on GitHub.**
2.  **Push the project files to the repository.**
3.  **In the repository settings, go to the "Pages" section.**
4.  **Under "Source," select the `main` branch (or whichever branch you are using) and the `/root` folder, then click "Save."**
5.  **Your website will be live at `https://your-username.github.io/your-repository-name/` in a few minutes.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.