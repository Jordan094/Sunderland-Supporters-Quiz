## **Sunderland Supporters Quiz - Sunderland AFC Quiz**

### Milestone Project 2 - Interactive Front End Development

### DISCLAIMER: This website is in no way affiliated with Sunderland AFC it is only to be used as my personal portfolio

* The Sunderland Supporters Quiz is a online single player quiz aimed at Supporters of Sunderland football club to test thier knowlegde of Sunderland Facts and Trivia.
* I have designed this quiz to be a continuation of my milestone project 1 - Fan page.
* This website has been designed using Javascript, HTML, CSS and Bootstrap 5. It is my submission for Code Institute's Level 5 Diploma in Web Application Development Milestone Project 2.

## Live Project

[View the live project here](https://jordan094.github.io/Sunderland-Supporters-Quiz/)

## Contents


- [**User Experience**](#user-experience)
  - [Background](#background)
  - [Site Owners Goals](#site-owners-goals)
  - [First Time User Goals](#first-time-user-goals)
  - [Frequent User Goals](#frequent-user-goals)
  - [Features To Be Included](#features-to-be-included)
- [**Design**](#design)
  - [Colour Pallete](#colour-pallete)
  - [Typography](#typography)
  - [Images Used](#images-used)
  - [Icons](#icons)
- [**Structure**](#structure)
- [**Wireframes**](#wireframes)
  - [Website Layout](#website-layout)
  - [Footer](#footer)
- [Features](#features)
  - [Sections](#sections)
    - [Main Menu Screen](#main-menu-screen)
    - [Instructions Section](#instructions-section)
    - [Highscores Section](#highscores-section)
    - [Enter Username](#enter-username)
    - [Play Game (The Quiz Itself)](#play-game-the-quiz-itself)
    - [Game Complete](#game-complete)
    - [404 Page](#404-page)
- [**Technologies Used**](#technologies-used)
- [**Accessibility**](#accessibility)
- [**Deployment \& Local Development**](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)
- [**Testing**](#testing)
  - [Site Wide Testing](#site-wide-testing)
    - [Background](#background-1)
    - [Game Container](#game-container)
    - [Footer](#footer-1)
    - [Mute Button](#mute-button)
  - [Game Testing](#game-testing)
    - [Main Menu](#main-menu)
    - [Main Menu Button Testing](#main-menu-button-testing)
    - [Instructions Section](#instructions-section-1)
    - [Highscores Section](#highscores-section-1)
    - [Username Input Section](#username-input-section)
    - [Game Content Testing](#game-content-testing)
    - [Game Complete Screen Testing](#game-complete-screen-testing)
    - [404 Screen Testing](#404-screen-testing)
  - [Testing User Stories from User Experience (UX) Section](#testing-user-stories-from-user-experience-ux-section)
    - [First Time User Goals](#first-time-user-goals-1)



# **User Experience**

## Background

* Sunderland AFC Football club is one of the biggest football clubs in the north east. The play in the EFL Championship and have a global following. The Sunderland Supporters quiz is designed to test the club knowledge of some of the fans and rank their scores in a friendly competition.

## Site Owners Goals

* The Sunderland Supporters Quiz is a quiz game for Sunderland AFC fans.
* The Sunderland Supporters Quiz also aims to let Sunderland fans test their football knowledge.
* The Site will provide a highscores and a link to external sites in the footer.
  
## First Time User Goals

* To easily navigate the site on any device they chose.
* To easily play the game on any device they chose.
* To understand the purpose of the website and what is on offer to them as a user.
* To see contact details to reach the website owner.
* To have access to links to visit extenal pages such as the official clubs website.
* Be able to view the instructions of how to play the game

## Frequent User Goals

* View the Highscores and see how they rank against other players
* Be able to share the website with friends who might like to play.
* Be able to contact the owner if needed or access social media pages from the footer.

## Features To Be Included

* Total of 20 questions to be displayed in a random order.
* Instructions page
* Highscores page
* Quick access links to external sites in the footer.
* 404 page for invalid content with a report a problem form to inform the site owner.

# **Design**

## Colour Pallete

![Sunderland Supporters Quiz Colour Pallette](/assets/readme-files/design/pallette.png)

[Pallette Created Using Coolors.co](https://coolors.co/)

I have chosen the above colour pallette as I wanted to stay true to the colours of the Sunderland AFC team Red being the primary colour and White the secondary. I chose neutral gray colours to make sure there was no clashes. I have also used the Coolors contrast checker to ensure these are suitable.

## Typography

I have chosen the Fira-Sans Font. This is provided by Google Fonts and [can be found here.](https://fonts.google.com/specimen/Fira+Sans)

I have used the regular font weight for standard text and chosen a weight of 600 when adding emphasis such as on the heading and title text.

I have selected sans-serif to be the default font if Firs Sans can not be loaded.

## Images Used

Due to the nature of the website and quiz game I have only used one image as a background. Which has been provided by [Sky Sports.](https://www.skysports.com/)

The background image was originally in colour however I changed altered the image in photoshop to black and white to stay true to the colour scheme and avoid clashes that would make parts of the quiz unreadable.

## Icons

I have used fontawesome icons for the volume on and off icons and also the external link icons where are present in the footer.

# **Structure**

# **Wireframes**

Here are all of the wireframes designed for this page broken down into device level. I desgined these wireframes with mobile first in mind and due to the nature of the site and the size of the content there was no changes needed to be made in terms of content displayed so I have combined my mobile and tablet wireframes into one.

* Main Menu
  * [Main Menu mobile and tablet wireframe](/assets/readme-files/wireframes/Quiz_Main_Menu_Tablet_Mobile.png)
  * [Main Menu desktop wireframe](/assets/readme-files/wireframes/Quiz_Main_Menu_Desktop.png)
* Highscores
  * [Highscores mobile and tablet wireframe](/assets/readme-files/wireframes/Quiz_Hiscores_Tablet_Mobile.png)
  * [Highscores desktop wireframe](/assets/readme-files/wireframes/Quiz_Hiscores_Desktop.png)
* Instructions
  * [Instructions mobile and tablet wireframe](/assets/readme-files/wireframes/Quiz_Instructions_Tablet_Mobile.png)
  * [Instructions desktop wireframe](/assets/readme-files/wireframes/Quiz_Instructions_Desktop.png)
* Username Selection
  * [Username Selection mobile and tablet wireframe](/assets/readme-files/wireframes/Quiz_Username_Tablet_Mobile.png)
  * [Username Selection desktop wireframe](/assets/readme-files/wireframes/Quiz_Username_Desktop.png)
* Main Game Screen
  * [Main Game mobile and tablet wireframe](/assets/readme-files/wireframes/Quiz_Game_Screen%20_Tablet_Mobile.png)
  * [Main Game desktop wireframe](/assets/readme-files/wireframes/Quiz_Game_Screen_Desktop.png)
* Game Complete
  * [Game Complete mobile and tablet wireframe](/assets/readme-files/wireframes/Quiz_Game_Finished%20_Tablet_Mobile.png)
  * [Game Complete desktop wireframe](/assets/readme-files/wireframes/Quiz_%20Game_Finished_Desktop.png)
* 404 Page
  * [404 Page mobile and tablet wireframe]()
  * [404 Page desktop wireframe]()

## Website Layout

The Website/Quiz has been designed using HTML5, CSS, Javascript and Bootstrap 5 with a mobile first approach
All the main content of the website and quiz is present on the index.html page. the only other page is the 404 page.

* The website contains a homepage and a 404 page.
  * Homepage - This is the only page the user will need. The whole quiz game is held in a container on this page a footer at the bottom.
  * Quiz Section - The quiz section is on the home page. It has been designed to be used on a single page. I will break the sections of the quiz down further on the features section of this document.
  * 404 Page - A page I do not intend users to find. This page should only be displayed when there is a broken URL.


## Footer

![Footer Styles](placeholder)
The footer for the website is simple and clean and easy for the user to understand. There will be contact icons incase the user has an issue and also a share icon to share the url with friends.

# Features

## Sections

As the Sunderland Supporters Quiz is on one single page all the sections found on the page need to be activated by the user. As a default. Depending on the choice of the user. Certain functions will be ran that show the user different parts of the quiz.

### Main Menu Screen
![Responsive image](/assets/readme-files/design/Responsive_Menu_Screen.png)
This is the first screen that the user will see when visting the URL. The user will have a choice of three menu selections: The play game, highscores and lastly the instructions. There will also be a mute button which is constantly present.

### Instructions Section
![Responsive image](/assets/readme-files/design/Responsive_Instructions_Screen.png)
The instructions section is at the bottom of the menu screen. The rationale behind this choice of placement is that although new users will likely visit that section first. Returning users will have little to no use for that menu screen. The layout is very simple and to the point and clearly explains to the user how the game is played and how their scores will be calculated.

### Highscores Section
![Responsive image](/assets/readme-files/design/Responsive_Scores_Screen.png)
The highscores section is the middle choice on the menu selection screen. The rationale behind this choice of placement is that after the user has played and completed a game they will be curious to how their score competes with other players. The highscores itself is a simple table which shows the username of the play and the score they recieved it is displayed with the highest score at the top and the lowest at the bottom. To keep in theme with the Sunderland AFC colours I have made the table display in red and white.

### Enter Username
![Responsive image](/assets/readme-files/design/Responsive_Username_Screen.png)
The play game button takes the user to a simple username input screen. The user is then presented with 2 options. Start the game or return to the main menu. The name field is a required input and the user will need to input a username or the game will not let them continue.

### Play Game (The Quiz Itself)
![Responsive image](/assets/readme-files/design/Responsive_Game_Screen.png)
When the user inputs a username and presses start game the quiz will begin. The user will be presented with a total of 20 questions. The questions all have a total of 4 possible answers, only 1 will be correct. The user will be given an audible feedback if the answered the selected is correct or incorrect. The correct noise is a positive chime. The incorrect answer plays a thud sound. The user will be presented with a total of 20 questions to complete the quiz. The questions will be displayed in a random order.

### Game Complete
![Responsive image](/assets/readme-files/design/Responsive_Complete_Screen.png)
Once the quiz is complete the user will be given imediate feedback as to how many questions out of the total 20 they got correct. The users score will also be logged to the highscores at this point and the user will be thanked for playing.

There will only be 1 choice and that is for the user to return to the main menu screen.

### 404 Page
![Responsive image](/assets/readme-files/design/Responsive_404_Screen.png)
This is the only page other than the index page. I do not intend for users to ever reach this page. I have taken away all of the backgrounds and added a simple page not found text.

# **Technologies Used**

* [HTML5](https://www.w3schools.com/html/html_intro.asp)
  * HTML was used to create my quiz
* [CSS3](https://www.w3schools.com/css/css_intro.asp)
  * CSS was used to style my quiz
* [Javascript](https://en.wikipedia.org/wiki/JavaScript)
  * Javascript was used to add functionality to my quiz
* [GitHub](https://github.com/)
  * I used github to create my repository and store my projects code.
* [Code Anywhere](https://app.codeanywhere.com/)
  * I used Code Anywhere as my IDE
* [Chrome](https://www.google.com/intl/en_uk/chrome/)
  * I tested my website and responsiveness throught creation using chrome developer tools.
* [Balsamiq](https://balsamiq.com/)
  * Balsamiq was used to create the wireframes during the design process.
* [Google Fonts](https://fonts.google.com/)
  * I used the font Fira Sans which is a Google font, with a fallback font of Sans-Serif thoughout my whole project.
* [Am I Responsive?](https://ui.dev/amiresponsive)
  * This was used to test the responsiveness on all devices once the pages were complete.
* [W3 Schools HTML Validation Service](https://validator.w3.org/)
  * This was used to check for any HTML errors in the code.
* [W3 Schools CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  * This was used to check for any HTML errors in the code.


# **Accessibility**

I wanted to ensure that the website was fully accessible. I have done this by doing the following:

* Providing Alternative Text (Alt Text)
  * I've made sure to add descriptive alternative text (alt text) to all images on the website. Alt text adds context to images, enabling users who rely on screen readers to understand the visual content even if they can't see it.
* Ensuring Color Contrast
  * I've chosen color combinations that maintain accessible contrast ratios, ensuring that text remains readable against different background colors. This benefits users with visual impairments or color blindness.
* Responsive Design
  * The site is designed to adapt to various devices and screen sizes. This caters to users who rely on different devices or have specific accessibility requirements.

# **Deployment & Local Development**

## Deployment

The Sunderland Supporters Quiz was made live through GitHub. This is how to deploy the Sunderland Supporters Quiz again:

1. Log in to your GitHub account or sign up if you don't have one.
2. Locate the project's repository Jordan094/Sunderland-Supporters-Quiz.
3. Click on the "Settings" link in the repository menu.
4. Navigate to the "Pages" section on the left-hand side.
5. Under the "Source" section, choose "main" from the branch dropdown menu and "Root" from the folder dropdown menu.
6. Click Save. Your live GitHub Pages site is now deployed at the URL shown.

## Local Development

### How to Fork

To fork the Sunderland Supporters Quiz repository:

1. Log in to your GitHub account or sign up if you don't have one.
2. Visit the repository at Jordan094/Sunderland-Supporters-Quiz.
3. Click the "Fork" button located at the top right corner.

### How to Clone

To clone the Sunderland Supporters Quiz repository:

1. Log in to your GitHub account or sign up if you don't have one..
2. Go to the repository for this project, Jordan094/Sunderland-Supporters-Quiz.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

# **Testing**

I performed manual testing all through the creation of my website. I would test to ensure full functionaility is present across all devices before committing any changes.

Below is an overview of my testing and tests were carried out on the following devices:

* Samsung Galaxy S22 Ultra
* Samsung Galaxy Tab
* ASUS Chromebook with 15.3" Screen
* Windows 11 desktop computer with a 27" Monitor

## Site Wide Testing

### Background

Expectation: Respond to device in which it is displayed on. Only show on index page and not 404 page. Result: Passed all tests.

### Game Container

Expectation: All of the quiz is to be displayed and played inside the one single game container, the container needs to respond to the device which it is displayed on, no content to overlap or strech the quiz border. Result: Passed all tests.

### Footer

Expection: Respond to device in which it is displayed on. Show 4 icons which are a home button, a email contact button a phone contact button and a share button. The thickness of the footer to scale in line with the device it is displayed on also. Result: Passed all tests.

Further Footer testing:

* **Home Button** Expectation: Font-awesome Icon in white. Displayed on right side of screen, hyperlink to index page, displays in Red when hovered over. Result: Passed all tests.

* **Phone Contact Button** Expectation: Font-awesome Icon in white. Displayed on right side of screen, hyperlink to call a contact number, displays in Red when hovered over. Result: Passed all tests.

* **Email Contact Button** Expectation: Font-awesome Icon in white. Displayed on right side of screen, hyperlink to send an email, displays in Red when hovered over. Result: Passed all tests.

* **Share Button** Expectation: Font-awesome Icon in white. Displayed on right side of screen, when pressed a copies URL to clipboard and a java popup alerts the user what has happened, displays in Red when hovered over. Result: Passed all tests.

### Mute Button

Expectation: Present always inside of the game container. Small button that is read and has a volume loud icon when sound is on and when pressed sound to be disabled, the button the change to grey and the icon to change to a mute icon. Result: Passed all tests.

## Game Testing

### Main Menu

* Expectations:
  * Display Main Game Container in the center of the page.
  * Display a responsive footer at the bottom of the page.
  * Dispay the main menu of the game and the 3 sections, Start Game, highscores and instructions.
  * Display a small mute button with a sound on icon at the bottom of the container in red which turns grey and changes to a sound muted icon when pressed.
  * Display footer at the bottom of the page

Result: All main menu testing passed.

### Main Menu Button Testing

* Expectations:
  * 4 buttons to be displayed Play Game, Highscores, Instructions and Mute.
  * Play game button when pressed will hide the highscores button and intstructions button. Volume button to remain.
  * User will be taken to username input screen.

Result: All main menu button testing passed.

### Instructions Section

* Expectations:
  * Instrcutions button when pressed will hide the highscores button and play button button. Volume button to remain.
  * User will be presented with a list of instructions on how to play the game.
  * Main menu button will be present at bottom of container.

Result: All Instructions testing passed.

### Highscores Section

* Expectations:
  * Highscores button when pressed will hide the highscores button and play button button. Volume button to remain.
  * Empty highscores table to be shown if no data held.
  * Once a user completes a game their name and score should be logged to the highscores.
  * Highscores to be held for future use
  * Main menu button will be present at bottom of container.

Result: 1 test failed.
Highscores are logged to the highscores table but the data is lost after page refresh or closure. Fix to be implemented in future revisions.

### Username Input Section

* Expectations:
  * Text input box to be shown and a prompt to enter username will be shown.
  * Start game button underneath text input box and also a button to return to main menu.
  * Validation to make sure that a username is entered and not left blank before continuing.

Result: All testing passed.

### Game Content Testing

* Expectations:
  * Once userchosen and start game button pressed user to be taken straight into game.
  * Question to be shown at the top of the container.
  * Questions to be shown in a random order.
  * 4 Possible answers to be shown with only 1 being correct.
  * When user choses correct answer positviv chime sound to be played.
  * When user choses incorrect answer thud noise to be played.
  * Score to be counted when user gets question correct.
  * 20 Total questions to be shown.
  * Total score to be logged to highscores once complete.
  
Result: All testing passed.

### Game Complete Screen Testing

* Expectations:
  * Once 20 questions answered game to be complete.
  * Message thanking user for playing to be shown.
  * Further message telling the user how many questions they got correct to be shown.
  * Main menu button to be present at the bottom of the game container.

Result: All testing passed.

### 404 Screen Testing

* Expectations:
  * Background to be removed from 404 page.
  * Message shown to user stating that page could not be found.
  * Button to return to main menu/home page.

Result: All testing passed.

## Testing User Stories from User Experience (UX) Section

### First Time User Goals

**As a first-time user, I want to easily navigate the site on different devices, including a desktop computer, a tablet, and a smartphone**

    - The website has been designed with a simplistic mobile first aproach which scales depending on the device it is being viewed on.
    - All of the game has been designed to work on one single page which is also the home page so they will not need to look for it.
    - There is a footer at the bottom of the page containing external links.

**As a first-time user, I want to easily play the game on different devices, including a desktop computer, a tablet, and a smartphone**

    - The game has been desgined to be played in one single container. This eliminated the possibility of accidentally exiting by leaving the website.
    - The main menu is easy to navigate and understand.
    - The game has a instructions section telling the user how to play.
    - The game provides the user with audible feedback for correct and incorrect answers.
    - The game informs the user when the quiz is complete.
    - The total score is shown to the user at the end of the game.
    - The score is logged on the highscores section.

**As a first time user, I want to see contact details to reach the website owner**

    - The email and phone icons in the footer allow the user to contact the website owner if needed.

**As a first time user, I want to understand the purpose of the website and what is on offer to them as a user.**

    - The name of the website is a simple explanation of what the actual content is going to be
    - The instructions provide a further insight.
