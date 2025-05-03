import ResearchPaperListRowCSS from "./ResearchPaperListRow.module.css"

type ResearchPaperListRowProps = {
  title: string;
  abstract: string;
  authors: string;
  doi: string;
  datePublished: string;
  keywords: string;
  linkToSource: string;
}

export default function ResearchPaperListRow(props: ResearchPaperListRowProps) {
  return (
    <>
      <div className={ResearchPaperListRowCSS['research-paper-list-row-container']}>
        <div>Type: Research Paper</div>
        <div>Title: {props.title}</div>
        <div>Abstract: {props.abstract}</div>
        <div>Authors: {props.authors}</div>
        <div>doi: {props.doi}</div>
        <div>Date Published: {props.datePublished}</div>
        <div>Keywords: {props.keywords}</div>
        <div>Link to Source: {props.linkToSource}</div>
      </div>
    </>
  )
}