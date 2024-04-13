# BookUsNow 2024

## Overview
BookUsNow 2024 is a website designed to showcase upcoming and recommended events. The site is built to be responsive, catering to both desktop and mobile screen sizes. It fetches event data from provided APIs and displays them in an organized manner.

## Setup and Local Run Instructions
To set up and run the project locally, follow these steps:

1. Clone the GitHub repository: [repository_link]
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install` or `yarn install`.
4. Start the development server by running `npm run dev` or `yarn dev`.
5. Open your browser and visit `http://localhost:3000` to view the website locally.

## Design and Technical Decisions
### Technologies Used:
- **Next.js:** Used for server-side rendering and routing, providing a seamless user experience.
- **React:** For building the user interface and managing component state.
- **Tailwind CSS:** Used for styling to ensure a clean and modern design with minimal CSS code.
- **Axios:** Utilized for making HTTP requests to fetch event data from the provided APIs.
- **usehooks-ts:** For managing custom hooks.

### Project Structure:
- **Pages:** Contains Next.js page components used for routing.
- **Components:** Contains reusable React components used across different pages.
- **Styles:** Contains Tailwind CSS configuration and global styles.

### Responsiveness:
The website is designed to adapt to various screen sizes, ensuring optimal viewing experience on both desktop and mobile devices. Responsive design principles are implemented using media queries and Tailwind CSS utilities.

### Fetching Events:
Event data is fetched from two provided APIs:
1. Recommended Shows: Fetched from the API endpoint `/api/Events?type=reco`, displaying 8 recommended shows in a horizontally scrolling format.
2. Upcoming Events: Fetched from the API endpoint `/api/Events?page=1&type=upcoming`, displaying several upcoming events in a vertically scrolling format. Additional pages of upcoming events are fetched dynamically as the user scrolls down, with a loading spinner indicating when new data is being fetched.

### Design Choices:
- **Font:** Inter font is used throughout the website for a clean and modern look.
- **Color Scheme:** The color scheme consists of primarily neutral colors with accents of red for branding. Font colors are chosen to ensure readability and contrast.

## Hosted Link
The live site is hosted on [Netlify](https://www.netlify.com/), and you can access it [bookusnow-2024](https://bookusnow-2024.vercel.app/).

Feel free to explore the live site to see upcoming and recommended events!

[repository_link]: <https://github.com/your-username/bookusnow_2024>
