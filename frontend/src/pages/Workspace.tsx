import ResearchPaperListRow from "../components/ResearchPaperListRow"
import NewsArticleListRow from "../components/NewsArticleListRow"
import NoteRow from "../components/NoteRow"
import WorkspaceCSS from "./Workspace.module.css"
import { useLocation } from "react-router"

export default function Workspace() {
  const location = useLocation()
  const { name } = location.state
 

  const ResearchPaperList = 
  <>
    <ResearchPaperListRow title= "A Study on Artificial Intelligence"
                          abstract= "This research explores the impact of AI on modern society..."
                          authors = "John Doe, Jane Smith"
                          doi = "10.1234/ai.2025"
                          datePublished = "March 20, 2025"
                          keywords = "Artificial Intelligence, Machine Learning, Deep Learning"
                          linkToSource = "https://example.com/research-paper" />

    <ResearchPaperListRow title="Exploring Quantum Computing Applications" 
                          abstract="This paper discusses the potential of quantum computing in various fields, including cryptography and optimization problems." 
                          authors="Alice Johnson, Bob Williams" 
                          doi="10.5678/qc.2025" 
                          datePublished="February 15, 2025" 
                          keywords="Quantum Computing, Cryptography, Optimization" 
                          linkToSource="https://example.com/quantum-computing" />

    <ResearchPaperListRow title="Blockchain and Its Impact on Cybersecurity" 
                          abstract="An in-depth analysis of how blockchain technology enhances cybersecurity by providing decentralized and tamper-resistant solutions." 
                          authors="Michael Lee, Sarah Brown" 
                          doi="10.9101/bc.2025" 
                          datePublished="April 5, 2025" 
                          keywords="Blockchain, Cybersecurity, Decentralization" 
                          linkToSource="https://example.com/blockchain-security" />
  </>

  const NewsArticleList = 
  <>
    <NewsArticleListRow title="Climate Change Policies Under Debate"
                        authors="Jane Doe, John Smith"
                        linkToSource="https://example.com/article1"
                        summary="A deep dive into the latest climate policies and their global impact."
                        politicalBiasRating={3} />

    <NewsArticleListRow title="Economic Growth Hits New Highs"
                        authors="Alice Johnson"
                        linkToSource="https://example.com/article2"
                        summary="Recent reports indicate a significant rise in GDP, sparking debates on economic sustainability."
                        politicalBiasRating={2} />
  </>




  return (
    <>
      <div>Workspace {name}</div>
      <div className={WorkspaceCSS['workspace-container']}>
        <div className={WorkspaceCSS['workspace-box']}>
          <div className={WorkspaceCSS['notebook-box']}>
            <div>Notes</div>
            <button>Create new Note</button>
            <div className={WorkspaceCSS['notebook-list']}>
              <NoteRow note="Summary.txt" />
              <NoteRow note="Notes.txt" />
              <NoteRow note="FinalPaper.txt" />

            </div>
          </div>
          <div className={WorkspaceCSS['research-paper-box']}>
           
            <button>Search for Research Paper</button> <br />
            <button>Search for News Article</button>
          
            
            <div className={WorkspaceCSS['research-paper-list']}>
              {ResearchPaperList}
              {NewsArticleList}
            </div>
          </div>

        </div>
       
      </div>
    </>
  )
}