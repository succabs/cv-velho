# Diary
Before beginning the project I decided to write this file to explain my thought process while creating the app.
It may also act as a to-do list and note-taking file. We'll see how it evolves.

## Day 1

## Starting the project
Top of the morning to you. I started to polish my portfolio and decided I need a new project in it. After some thinkingI decided that the project will be a CV maker. Another React project for my portfolio, yay. I thought about doing
something in Python or Go, but this seemed like a good learning project, since I intend to use many new tools that I am not so familiar with. After a bit of research, these are the tools and stack I will be using:

- Start the project with Vite
- Github for version control
- Design the app with Figma
- CI/CD with Jenkins
- Automate the testing
- Deploy the app to my VPS NGINX server

I think that's enough for now. Some things may change if I find better alternatives. I will be doing forest clearance work during days, so let's see how much time I have to invest in this project.

The project structure is now created with the latest Vite version. Time to clear the files from unnecessary stuff.

The project files are now ready for the first git commit. After that is time to design the app in Figma. For now I need a simple starting page with a description of the page and a button for creating a cv. Next is the cv creation page that has a sample cv that user can modify. On the left of creation page is the menu that has buttons for cv theme and various settings (TBD). On the bottom of the menu there is a button for exporting to pdf.

The CV structure will be a structure that I learnt on a university course. And oh, if I forgot to mention it, the app will be in Finnish. Hence the name "CV-Velho", "CV-Wizard" in English.

Update after few hours: Watched two hour-long figma tutorials from Youtube (https://www.youtube.com/watch?v=g1uZcsZnkaA and https://www.youtube.com/watch?v=QtkmzRpMPhU). Good hands-on experience to the software. Got the desktop and mobile front pages somewhat ready, still not quite satisfied. But enough to start implementing it on React.

Starting with creating the placeholder components. After that, putting the texts and exporting images from Figma. Then working with CSS to get the desktop site to look somewhat okay, component by component.

Now I am questioning about the time I spent with Figma. I used so much time to do things there pixel perfect, but now If I use responsive flexbox, I can't copy paste things from Figma. What was the point of it? Should I just use it for rapid sketching of the UI? Have to read about it later.

Hmm. Maybe I will use TailwindCSS for the styling. Let's add it to the project.

Tailwind is added, styling is done on front page. I read more about Figma, and decided that it will be used as a wireframing tool. The real styling will be done with Tailwind. Time to commit again.

To sum up, after a few hours we got the project started pretty well. Learnt some Figma and the usage of Tailwind. Still not sure if I am a fan of styling the app in Tailwind way. It makes html code messier, but it is super easy to use.

What to do now? Time to think about what will the actual cv creation page look like. Probably menu on the left, cv on the right. On mobile the menu comes from hamburger menu. Who would use mobile phone to create their cv? After this it is time to end the first day with the project.

Okay, I could not stop the developing for today. The cv creation is in a very good shape considering this is the first day with the project. Sadly this was a day-off from work, so the developing is not this fast during the following days.Anyway. The CV is exportable to pdf now. Had some hassle with the Image. What was wrong? I did not import Image from react-pdf :)

The problem now: I can't get the app to display the same cv in pdf as I am modifying it. How do I get around it? For now the solution seems to be the following: I will display it in the menu bar as a separate smaller window. A bit of a challenge comes from the fact that the styling of the react-pdf is not similar to my styling of the cv modification page. The next step is to make them as similar as they can be. Also, creating the base cv and its forms to be perfectly aligned. In short, the to-do for following days:

- Style the pdf & app
- Add necessary fields and labels to both
- Get the first template to work well
- Buttons to add/delete fields
- Button to change the cv language to English and Swedish
- You forgot Jenkins, it was one of the reasons of this project! Use it!
- More templates
- Get domain
- Publish
- Create new cv with this
- Get a job with it
- Prove it works!
- Sell it to big company
- Get rich

Peace out.

## Day 2

Today was a rather heavy day in the forest. Mind and body are tired. Anyway, let's continue the development. I need this project to my portfolio as soon as possible. I have to wake up tomorrow at 5:30, so not much time today for the project. Last night I made the dropdown options to menu for changing the template and language. The functions are not ready though. Plan for today: Add the right fields and labels to the cv and the editing area. Try to style them a bit. Maybe buttons to add/delete fields. Luckily I have made the same kind of buttons in my previous project (social media app) so I don't have to think about them much.

The styling and adding fields and labels is pretty boring, so I won't write anything about it here. Copy&paste job.

I read about the right font in CV. I picked a few good options: Sans-serifs (Arial,Calibri,Verdana), Serifs(Garamond,Georgia). Font size should be 11-12. Riviväli (idk whats that in english i am too tired to check) 1.15-1.4. Let's put that into use.

Uploading your own picture now works. Got to style the picture to fit better to cv. Also the editor is styled a bit better. Time to commit. Forgot earlier. Many changes, too many.

Added some more fields, labels and styling. Starting to look better, but not at all ready. Still happy with the progress given the little time I had to work on it. Now it's time to watch some movie and sleep.

All work and no play makes Arttu a dull boy
All work and no play makes Arttu a dull boy
All work and no play makes Arttu a dull boy
All work and no play makes Arttu a dull boy
All work and no play makes Arttu a dull boy
All work and no play makes Arttu a dull boy

## Day 3

Not much time to put into the project today. It is already late and I am soon off to sleep.

All the basic fields are now done. Some padding and margin values need to be adjusted on the pdf. The cv editor itself looks horrible, need to adjust it. Much. That is a job for tomorrow. Maybe I will get to it tomorrow? Also, I could save the CV data to localStorage? Maybe when the project is done on other parts. So many ideas, so little time.

## Day 4

Had some time off computer. Now I'm back. Going to add font options to the menu. Maybe some styling. Maybe the options to work. We'll see. Looking at the app with fresh eyes, it looks pretty good, thanks to TailwindCSS.
