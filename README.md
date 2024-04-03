# Event Management Web Application

## Overview

This repository contains the code for an event management web application. The application fetches event data from an API and displays it to the users in an organized manner. The front end of the application is built using HTML, CSS, and JavaScript, while the back end data is fetched using the Fetch API.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## Instructions to Build and Run

1. Clone this repository to your local machine using the following command:

   ```
   git clone <repository_url>
   ```

2. Navigate to the cloned directory:

   ```
   cd event-management-webapp
   ```

3. Open the `index.html` file in your web browser to view the application.

4. Alternatively, you can serve the application using a local server. If you have Python installed, you can use the following command to start a simple HTTP server:

   ```
   python -m http.server
   ```

5. Once the server is running, open your web browser and navigate to `http://localhost:3000` (or the appropriate URL provided by the server) to view the application.

## Usage

- Upon opening the application, you will see a list of recommended events.
- Scroll down to view upcoming events.
- As you scroll to the bottom of the page, more events will be fetched dynamically.

## Additional Notes

- Ensure that you have a stable internet connection to fetch event data from the API.
- Some features may require specific browser support, so it's recommended to use the latest version of modern web browsers like Google Chrome, Mozilla Firefox, or Microsoft Edge for the best experience.
