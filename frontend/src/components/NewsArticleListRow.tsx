import NewsArticleListRowCSS from "./NewsArticleListRow.module.css"

type NewsArticleListRowProps = {
  title: string;
  authors: string;
  linkToSource: string;
  summary: string
  politicalBiasRating: number;
}


export default function NewsArticleListRow(props: NewsArticleListRowProps) {

  return (
    <>
      <div className={NewsArticleListRowCSS['news-article-list-row-container']}>
        <div>Title: {props.title}</div>
        <div>Summary: {props.summary}</div>
        <div>Authors: {props.authors}</div>
        <div>Bias Rating: {props.politicalBiasRating}</div>
      
      </div>
    </>
  )
}