# Stream 1 - User Centric Front End Development Milestone Project | The Monkees

The Monkees are a band that has a wealth of performing experience, and their website should demonstrate that same professionalism. What I have created in this project is a functional, easy to use website with all the necessary content and features a new or existing fan would need. From information about the band members (available through external links to their wiki pages) to music and video, a booking form to information about upcoming music and gigs, this is a one-stop-shop for anything Monkee related.

The website uses a mobile-first approach to ensure it is easily accessible on any device, whilst a smart piece of JavaScript ensures that it will always respond appropriately, regardless of input.


## UX

Reading through the breif for this project, I devised the following requirements and features as follows:
### Necessary Content/Functionality
1. The site must contain audio and video from the band's back catalog and;
2. The site must contain the ability to add/display new material as it becomes available and;
3. The site must contain a callout highlighting the band's ability to perform private events.

### Important Content/Functionality
1. The band has provided audio and video files, so these must be present on the site in an easily accessible location and;
2. Along with a callout regarding private events, there should be the ability to book said events and;
3. The band want to add links to their social media, so there must be either a section or grayed-out icons to represent this and;
4. The band declare the site should be for new and potential fans, and have provided images of the members of the band, so info about them should be easily available.

As deduced from the above requirements, there are two main groups of people who will use this site:
1. Long-time fans who have listened to and supported the band over an extended period of time and;
2. People who have not heard of the Monkees before, or who have just been introduced to them.



No wireframes or mockups were created during the design process, as the template mentioned later on was used instead.


Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

## Features

### Existing Features

1. Navbar at top of screen.
    - The navbar is fixed in position to be always visible, since the links scroll the existing page as opposed to opening new ones. It has functionality to become a dropdown on smaller screen sizes.
2. Smart hover JavaScript
    - This piece of JavaScript is copied from javascriptkit.com, see the smart-hover.js file for the full url and citation. This clever function gets the current input type of the device being used (either touch or direct input) and prevents the hover css state if the input is touch.
3. Meet the Band
    - This section introduces users to the band members by displaying a picture, their name, a little background info and the instrument they mainly play.
4. Song List
    - This section uses iframe tags for a video and audio tags for several sample songs the band requested I put on their site. Along with the full repertoire of their music, this allows users to have a teaser of what their style is and the kind of songs they sing. The full repertoire is partially hidden in a scrollable box to prevent the page being too long.
5. Booking section
    - Their are two forms in this section as not everyone will be looking to book the Monkees for a wedding, christmas party or festival. Requests for information that is not displayed on the site should be possible to best take advantage of fan interaction.
6. Coming soon section
    - The four sections are those that I believe to be most useful and important to the band, as these can be changed easily to add or remove content without overloading users with information. These parts are probably the most versatile from the bands perspective, as the small size ensures they do not need lots of information to fill the space, making them perfect for teasing new material and features.
7. Fontawesome icons
    - The use of fontawesome icons was made to add a positive user experience by reinforcing what the different sections they are associated with are for (music notes for songs, calendar for bookings, microphone for gigs, etc.)

### Features Left to Implement
- Functionality that takes the values input to the form(s) and puts it on an email to the band or their manager, then sends the email.

## Technologies Used

- [BootStrap](https://github.com/twbs/bootstrap/tree/v3.3.7)
    - Used for rapid creation of a default styled layout.
- [Fontawesome](https://fontawesome.com/)
    - Used to display custom eye-catching icons.
- [Smart Hover](http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml)
    - Used to prevent the hover css state on touch devices.
- [Form Submit Modal](https://codepen.io/hanapiers/pen/EXNrGP)
    - Used to pop-up a confirmation modal on submitting either of the forms.

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

- Smart hover JavaScript
    - Taken from http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml. All credit and rights to this code are property of the designer.
- Modal pop-up on form submit JavaScript
    - Taken from https://codepen.io/hanapiers/pen/EXNrGP. All credit and rights to this code are property of the designer, Hana Piers.

### Content
- The background information for the band members was pulled from their respective wikipedia pages:
    - [Davy Jones](https://en.wikipedia.org/wiki/Davy_Jones_(musician))
    - [Michael Nesmith](https://en.wikipedia.org/wiki/Michael_Nesmith)
    - [Micky Dolenz](https://en.wikipedia.org/wiki/Micky_Dolenz)
    - [Peter Tork](https://en.wikipedia.org/wiki/Peter_Tork)
- The Full Repertoire was copied from a [wikipedia page](https://en.wikipedia.org/wiki/List_of_songs_recorded_by_the_Monkees) that had compiled all of the songs.

### Media
- The photos used in this site were obtained from a [GitHub Repo](https://github.com/Code-Institute-Org/project-assets) set up specifically for this project.
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