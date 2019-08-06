import React from "react"
import Header from "../components/Header"
import PeopleCard from "../components/PeopleCard"
import peopleData from "../assets/people.json"

export default () => (
  <div style={{ margin: `5rem auto`, maxWidth: 1000 }}>
    <Header />
    <h1>Faculty</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(peopleData).map((name, i) => {
          if (peopleData[name]["role"] === "professor") {
            return (
              <PeopleCard
                key={i}
                name={name}
                title={peopleData[name]["title"]}
                researchInterest={peopleData[name]["researchInterest"]}
                googlescholar={peopleData[name]["googlescholar"]}
                github={peopleData[name]["github"]}
                linkedin={peopleData[name]["linkedin"]}
              />
            )
          }
        }
      )}
    </div>
    <h1>PhD Students</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(peopleData).map((name, i) => {
          if (peopleData[name]["title"] === "PhD Student") {
            return (
              <PeopleCard
                key={i}
                name={name}
                title={peopleData[name]["title"]}
                researchInterest={peopleData[name]["researchInterest"]}
                googlescholar={peopleData[name]["googlescholar"]}
                github={peopleData[name]["github"]}
                linkedin={peopleData[name]["linkedin"]}
              />
            )
          }
        }
      )}
    </div>
    <h1>Staffs</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { Object.keys(peopleData).map((name, i) => {
          if (peopleData[name]["role"] === "staff") {
            return (
              <PeopleCard
                key={i}
                name={name}
                title={peopleData[name]["title"]}
                researchInterest={peopleData[name]["researchInterest"]}
                googlescholar={peopleData[name]["googlescholar"]}
                github={peopleData[name]["github"]}
                linkedin={peopleData[name]["linkedin"]}
              />
            )
          }
        }
      )}
    </div>
  </div>
)
