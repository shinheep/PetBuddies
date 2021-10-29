# Project Overview

## Project Links

## Project Description

For this project, I plan to make an Adopt-an-Animal React app. I will use the The Dog API. Originally, I wanted to use PetFinder API to display information of animals that actually were in need of adoption, but the API Key for that expired every hour, which meant my data would only display for that hour, and then I would have to fetch for another API Key. Just for project purposes, I chose to use the Dog API, but one day, I hope to actually use an API that displays animals that are in need of adoption to create a project similar to this. Ideally, in the Mobile App version, I would like to have a carousel of the animals the user can swipe through, as well as a search bar where they can filter through the animals to try to find a different type, breed, age, etc. In the Desktop version, I will have more animals on displaying on the front page.

## API

https://api.thedogapi.com/v1/images/search?limit=30&page=3&order=desc


```
Array(30)
0:
breeds: [{…}]
height: 1024
id: "SkZY1e9NQ"
url: "https://cdn2.thedogapi.com/images/SkZY1e9NQ_1280.jpg"
width: 912
[[Prototype]]: Object

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://res.cloudinary.com/dxqwpud0l/image/upload/v1635480186/Screen_Shot_2021-10-28_at_8.59.18_PM_g2xcbh.png)
- [react architecture](https://res.cloudinary.com/dxqwpud0l/image/upload/v1635480490/Screen_Shot_2021-10-28_at_9.07.55_PM_r6xrye.png)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional site that displays the animals up for adoption at PetFinder
    - Dog Component
    - Cat Component
    - "Take Me Home" Component, where users can select all animals they're interested in to be added to this list. At the end of browsing, they can go to this component to thoroughly look through and decide which animal to adopt.
- Carousel that displays the different animal pictures
- Search Bar that allows the user to type in different types/breeds
- Credit to PetFinder

#### PostMVP EXAMPLE

- 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Nav Bar | 
| Animals Component | Displays animals on load | 
| Dog Component | Renders dogs on load | 
| Cat Component | Renders cat on load |
| Take Me Home Component | Where users can look at all the animals they're interested in|



Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 |  |  |
| Basic Navbar & Footer | H | 1 |  | |
| Set up basic React routing | H | 1 |  |  |
| Make PetFinder(Animal, Dog, and Cat) API call | H | 4 |  |  |
| Parse through data, and render important information about dogs | H | 3 |  |  |
| Create button to add/remove animal from "Take me Home" Component | H | 3 |  |  |
| CSS | H | 4 |  |  |
| Style using Bootstrap or Bulma | L | 3 |  |  |

| Total | H | 20 |  |  |

## Additional Libraries
Bootstrap/Bulma

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

```
  const makeApiCall = () => {
    return (
      fetch ('https://api.thedogapi.com/v1/images/search?limit=30&page=3&order=desc?api_key=07b26afd-c760-43a7-b8f9-31834f6d598d')
      .then((response)=>response.json())
      .then((data)=>setDogs(data))
    )
  }

  useEffect(()=>{
    makeApiCall()
    }, [])
```
I'm proud of my API Call because it works! :)
