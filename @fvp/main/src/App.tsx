import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import './App.css'
import { MainContent } from './components/MainContent'
import { SecondaryContent } from './components/SecondaryContent'
import { DomainContent } from './components/DomainContent'
import { ApplicationCard } from './components/ApplicationCard'
import { domainsWithApps } from './data/applications'

function App() {
  return (
    <>
    <Navigation githubUrl="https://github.com/jcvegan/fvp" />
    <Hero />
    <MainContent title="Welcome to FVP" description="We (as a family) use these tools to manage some aspects of our lives, and we have found them very useful so we would like to share them with you.">
      <SecondaryContent title="List of applications" description='Here we proceed to list and describe all the applications included (organized by domain), but also referencing their official website.' />
      {domainsWithApps.map((domain, domainIndex) => (<DomainContent title={domain.name} key={domainIndex}>
        {domain.applications.map((app, appIndex) => (
          <ApplicationCard key={`${domainIndex}-${appIndex}`}
                          name={app.name} 
                          description={app.description} 
                          imgUrl={app.urls.logo} 
                          urls={{ 
                            app: app.urls.app, 
                            docs: app.urls.docs, 
                            website: app.urls.website 
                          }} />
        ))}
      </DomainContent>))}
    </MainContent>
    </>
  )
}

export default App;
