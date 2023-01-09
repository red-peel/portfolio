![Alt text](portfolio/public/logo512.png)

# Portfolio

This is a portfolio to help me solidify my front-end development skills, as well as provide a good starting point for employers to see my work.  If you are an employer: Hello!


The site is responsively styled, if you size down to phone format, it will adjust (up to a certain point it will break, still working on that!). It is also highly dynamic in the sense that most repetative components are mapped from arrays. This allows me to implement a request to bring in projects to the project page via an API that returns an array of projects!


## Tech Stack

**Client:** [React.js](https://reactjs.org/), [TailwindCSS](https://tailwindcss.com/)

**Server:** [Firebase](https://firebase.google.com/) 

**CI/CD:** [Firebase-Tools](https://www.npmjs.com/package/firebase-tools)*

**Github actions are enabled. If a branch is created, Firebase-Tools will create a sub-site for testing pre-production (branch) websites and update the sub-site if commits are made to branch. If a commit or merge is made to Main, Firebase-Tools will deploy it to the [main site](https://www.eliasgonzalez.dev/). Firebase-Tools requires a secret, as well as a Firebase account. Any site will not deploy if there are warnings or errors. Website can still deploy locally without Firebase or Firebase-Tools.*


***This site is available online [here](https://www.eliasgonzalez.dev/)***


## Run Locally

Clone the project

```bash
  git clone https://github.com/red-peel/portfolio
```

Go to the project directory

```bash
  cd portfolio
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.eliasgonzalez.dev/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elias-gonzalez-dev/)
