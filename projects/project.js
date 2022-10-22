const Projects = [
    {
        name : "Clone of Anthropologie.com",
        about : "Anthropologie is an American clothing retailer with approximately 200 stores across the U.S., Canada, and the UK that offers an assortment of clothing, jewelry, home furniture, decoration, beauty products,",
        // do it here
        img : "./projects/anthropologie.png",
        gitrepo : "https://github.com/gaurav7ingh/Anthropologie",
        // blog : "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
        tech_stack : "HTML | CSS | JAVASCRIPT ",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
            
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            
            
        ],
        project_link : "https://anthropologie-1.netlify.app/index.html",
        project_type : "Team Project"
    },
    {
        name : "Clone of Rentomojo.com",
        about : "RentoMojo aims to create awareness about ‘renting’ and the ‘access lifestyle’ as a concept in the consumer consideration set. The company is anchored on an asset-light, fintech model that makes it a scalable business venture in the startup ecosystem.",
        img : "./projects/rentomojo-2.jpg",
        gitrepo : "https://github.com/NaziaSayyad/panicky-smash-9541/tree/main/main_frontend",
        // blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
        `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
        ],
        project_link : "https://chipper-caramel-621078.netlify.app/",
        project_type : "Team Project"
    },
    {
        name : "Clone of Rentomojo.com",
        about : "RentoMojo aims to create awareness about ‘renting’ and the ‘access lifestyle’ as a concept in the consumer consideration set. The company is anchored on an asset-light, fintech model that makes it a scalable business venture in the startup ecosystem.",
        img : "./projects/rentomojo-2.jpg",
        gitrepo : "https://github.com/NaziaSayyad/panicky-smash-9541/tree/main/main_frontend",
        // blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
        `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
        ],
        project_link : "https://chipper-caramel-621078.netlify.app/",
        project_type : "Team Project"

    },
    {
        name : "Clone of Rentomojo.com",
        about : "RentoMojo aims to create awareness about ‘renting’ and the ‘access lifestyle’ as a concept in the consumer consideration set. The company is anchored on an asset-light, fintech model that makes it a scalable business venture in the startup ecosystem.",
        img : "./projects/rentomojo-2.jpg",
        gitrepo : "https://github.com/NaziaSayyad/panicky-smash-9541/tree/main/main_frontend",
        // blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
        `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
        ],
        project_link : "https://chipper-caramel-621078.netlify.app/",
        project_type : "Team Project"

    },
    {
        name : "Clone of Rentomojo.com",
        about : "RentoMojo aims to create awareness about ‘renting’ and the ‘access lifestyle’ as a concept in the consumer consideration set. The company is anchored on an asset-light, fintech model that makes it a scalable business venture in the startup ecosystem.",
        img : "./projects/rentomojo-2.jpg",
        gitrepo : "https://github.com/NaziaSayyad/panicky-smash-9541/tree/main/main_frontend",
        // blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
        `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
        ],
        project_link : "https://chipper-caramel-621078.netlify.app/",
        project_type : "Team Project"

    }
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
