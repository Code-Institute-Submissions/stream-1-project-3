# Stream 1 - User Centric Front End Development Milestone Project | The Monkees

The Monkees are a band that has a wealth of performing experience, and their website should demonstrate that same professionalism. What I have created in this project is a functional, easy to use website with all the necessary content and features a new or existing fan would need. From information about the band members (available through external links to their wiki pages) to music and video, a booking form to information about upcoming music and gigs, this is a one-stop-shop for anything Monkee related.

The website uses a mobile-first approach to ensure it is easily accessible on any device, whilst a smart piece of JavaScript ensures that it will always respond appropriately, regardless of input.


## UX
### Scope
Reading through the breif for this project, I devised the following requirements and features as follows:
#### Necessary Content/Functionality
1. The site must contain audio and video from the band's back catalog and;
2. The site must contain the ability to add/display new material as it becomes available and;
3. The site must contain a callout highlighting the band's ability to perform private events.

#### Important Content/Functionality
1. The band has provided audio and video files, so these must be present on the site in an easily accessible location and;
2. Along with a callout regarding private events, there should be the ability to book said events and;
3. The band want to add links to their social media, so there must be either a section or grayed-out icons to represent this and;
4. The band declare the site should be for new and potential fans, and have provided images of the members of the band, so info about them should be easily available.

As deduced from the above requirements, there are two main groups of people who will use this site:
1. Long-time fans who have listened to and supported the band over an extended period of time and;
2. People who have not heard of The Monkees before, or who have just been introduced to them.

As such, here are some of the user stories derived from the brief and the above information:
1. As a newcomer/long-time fan, I want to be able to listen to The Monkees' music.
2. As a newcomer/long-time fan, I want to be able to see the back-catalog on The Monkees.
3. As a newcomer/long-time fan, I want to be able to find out more about the band and its members.
4. As a long-time fan, I want to be able to contact The Monkees, and book them for private functions.
5. As a long-time fan, I want to be able to find out about new material and new gigs from The Monkees.

### Structure
No wireframes or mockups were created during the design process, as the template mentioned later on was used instead. This was also part of the reason why I settled on a single-page website being the best choice. There are multiple types of media embedded in the website, and with several JavaScripts also requiring loading it made sense to put it all on one page, so that they only need loading once. This ensures that, whilst a user may have to wait slightly longer than typical for the initial page load, they do not have that recurring across multiple pages, which would detract from the user experience. I set up the page sections as follows:

<strong>Home</strong> - the landing page for the website. Contains a picture of the band as well as a small amount of information about them, letting the user immediately know what this website is about.

<strong>Meet the Band</strong> - a section introducing the band members, with links to their respective wikipedia pages.

<strong>Song List</strong> - this section contains the audio and video media provided by the band, along with a full repertoire of their music.

<strong>Booking</strong> - one of the stipulations of the band was advertising their ability to perform at private functions. Here I added a booking form to be able to do that, as well as an enquiry form for other requests.

<strong>Coming Soon</strong> - a section where the band can post new songs, albums, gigs or anything else they want their fans to know about. I have paraphrased some information from the existing [Monkees website](https://www.monkees.com/) to populate this, and the 'Other' part of this section contains information alerting users to the upcoming social media of the band.

## Features

### Existing Features

1. Navbar at top of screen.
    - The navbar is fixed in position to be always visible, since the links scroll the existing page as opposed to opening new ones. It has functionality to become a dropdown on smaller screen sizes.
2. Smart hover JavaScript
    - This piece of JavaScript is copied from javascriptkit.com, see the smart-hover.js file for the full url and citation. This clever function gets the current input type of the device being used (either touch or direct input) and prevents the hover css state if the input is touch.
3. Smooth scroll JavaScript
    - Added to allow smooth scrolling on links to section of the page across all browsers.
4. Meet the Band
    - This section introduces users to the band members by displaying a picture, their name, a little background info and the instrument they mainly play.
5. Song List
    - This section uses iframe tags for a video and audio tags for several sample songs the band requested I put on their site. Along with the full repertoire of their music, this allows users to have a teaser of what their style is and the kind of songs they sing. The full repertoire is partially hidden in a scrollable box to prevent the page being too long.
6. Booking section
    - Their are two forms in this section as not everyone will be looking to book The Monkees for a wedding, christmas party or festival. Requests for information that is not displayed on the site should be possible to best take advantage of fan interaction.
7. Coming soon section
    - The four sections are those that I believe to be most useful and important to the band, as these can be changed easily to add or remove content without overloading users with information. These parts are probably the most versatile from the bands perspective, as the small size ensures they do not need lots of information to fill the space, making them perfect for teasing new material and features.
8. Fontawesome icons
    - The use of fontawesome icons was made to add a positive user experience by reinforcing what the different sections they are associated with are for (music notes for songs, calendar for bookings, microphone for gigs, etc.)

### Features Left to Implement
- Functionality that takes the values input to the form(s) and puts it on an email to the band or their manager, then sends the email.
- Social Media icons linking to the band members' respective social media pages, when they have them ready.
- Functionality that stops the current music/video playing on the page (if any) when another song/video is started/resumed.

## Technologies Used

- [BootStrap](https://github.com/twbs/bootstrap/tree/v3.3.7)
    - Used for rapid creation of a default styled layout.
- [Fontawesome](https://fontawesome.com/)
    - Used to display custom eye-catching icons.
- [Smart Hover](http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml)
    - Used to prevent the hover css state on touch devices.
- [Smooth scroll](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1)
    - Used to scroll smoothly between page sections on the website.
- [Form Submit Modal](https://codepen.io/hanapiers/pen/EXNrGP)
    - Used to pop-up a confirmation modal on submitting either of the forms.

## Testing

From the user stories:
1. Music and video:
    1. Open website in Chrome.
    2. Click Song List link in navbar (ensure smooth scroll to section).
    3. Check all audio/video plays, pauses, mutes and unmutes.
    4. Check audio/video can be skipped to a certain point by dragging the timeline.
    5. Repeat steps 1-4 with Firefox.
    6. Repeat steps 1-4 with Microsoft Edge.
2. Music back-catalogue:
    1. Navigate to Full Repertoire section within Song List page section.
    2. Ensure scroll bar is present for full song list.
    3. Ensure repertoire scrolls up and down without moving the actual page.
    4. Repeat steps 1-3 in all browsers mentioned previously.
3. Band information:
    1. Click Meet the Band link in navbar (ensure smooth scroll to section).
    2. Ensure band members photos display, and if not then alt text says what the picture is.
    3. Click on picture or name of band member and ensure wiki page opens in new tab.
    4. Repeat steps 1-3 in all browsers mentioned previously.
4. Contacting and booking:
    1. Click Booking link in navbar (ensure smooth scroll to section).
    2. Try to submit empty form and ensure an error message about the required fields appears.
    3. Try to submit the form with an invalid email address and ensure that a relevant error message appears.
    4. Try to submit the form with all inputs valid and ensure that a success message appears.
    5. Check both Booking Form and General Enquiry Form do the above tests.
    6. Repeat steps 1-5 in all browsers mentioned previously.
5. New material:
    1. Click Coming Soon link in navbar (ensure smooth scroll to section).
    2. Ensure any links to sections in the website smooth scroll to the section.
    3. Ensure any links to external pages open in a new tab.

For general functionality:
1. Ensure home button scrolls smoothly to the top of the page.
2. Mobile functionality:
    1. Ensure parts and sections change shape and layout based on resolution.
    2. Ensure all tests derived from user stories work on mobile devices (tested with Nexus 5).
    3. Ensure navbar is replaced with a dropdown on smaller resolutions.

One interesting bug I have noticed whilst submitting forms on a desktop is that on a successful submission, when the confirmation modal appears, the links on the navbar at the top of the page shift slightly to the right. They shift back to their original positions when the modal is closed. I have not yet determind the cause for this, but it is low on the list of prioirities given it does not appear to affect the functionality of the website otherwise. It does not appear to happen when the navbar menu links are replaced by the dropdown menu either.

I would also have liked to have done the tests mentioned above on both Safari and Opera to be able to cover all bases.

## Deployment

I deployed this project to [GitHub](https://github.com/), as it is a platform I am familiar with and has the added bonus of being able to host my code in webpage format through its [GitHub Pages](https://pages.github.com/).
The deployed version has not been separated from the development version, as I used the repository and GitHub Pages' hosting ability to test functionality throughout the project.

I used the inbuilt git editor within [Cloud9](https://en.wikipedia.org/wiki/Cloud9_IDE) to push my code to GitHub. Once I had reached a stage where I believed it good enough to display, I went to the settings tab within my GitHub repository for the project and published it to GitHub Pages.

## Credits

- Smart hover JavaScript
    - Taken from http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml. All credit and rights to this code are property of the designer.
- Modal pop-up on form submit JavaScript
    - Taken from https://codepen.io/hanapiers/pen/EXNrGP. All credit and rights to this code are property of the designer, Hana Piers.
- Smooth scroll JavaScript
    - Taken from https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1.

### Content
- The background information for the band members was pulled from their respective wikipedia pages:
    - [Davy Jones](https://en.wikipedia.org/wiki/Davy_Jones_(musician))
    - [Michael Nesmith](https://en.wikipedia.org/wiki/Michael_Nesmith)
    - [Micky Dolenz](https://en.wikipedia.org/wiki/Micky_Dolenz)
    - [Peter Tork](https://en.wikipedia.org/wiki/Peter_Tork)
- The Full Repertoire was copied from a [wikipedia page](https://en.wikipedia.org/wiki/List_of_songs_recorded_by_the_Monkees) that had compiled all of the songs.

### Media
- The photos used in this site were obtained from a [GitHub Repository](https://github.com/Code-Institute-Org/project-assets) set up specifically for this project.
- The video used on this site would have been from the aforementioned [GitHub Repo](https://github.com/Code-Institute-Org/project-assets), but due to issues with the functionality I opted to use the version uploaded to [YouTube](https://www.youtube.com/embed/xvqeSJlgaNk?t=20&autoplay=0&showinfo=0) instead.

### Acknowledgements

I received inspiration for this project from the following sources:
- [Hullabaloo](https://hullabaloo-uk.com/index.aspx)
    - One of my favourite bands, theirs was the first website I thought to check when I saw the brief. The simple design of their site and the sticky navbar at the top of the pages influenced my decisions in those areas.
- [Bands for Hire](https://www.bandsforhire.net/function-bands/item/289-the-rockin-rhythms)
    - Most of the inspiration came from this website. The combination of sufficient necessary information, compact and simplistic design and reliable functionality made me think this was the ideal site to compare my own to.
- [Whiskey Drop](https://github.com/Code-Institute-Solutions/BootstrapLandingPage)
    - I eventually settled on the design from this working example as my basic layout. A large portion of the CSS used in my own project is directly copied from Timmy O'Mahoney's github page (see the notes on my style.css page for details). I also copied over the basic html layout before changing all of the content and most of the functionality.
    - I felt this particular example code was what I wanted to use for my project as it held a good combination of the elements that I liked most about the two other inspirations mentioned previously. I reasoned that using this pre-prepared code and properly crediting it would be much more efficient than creating my own from scratch.