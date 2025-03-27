type NotebookListRowProps = {
  notebook: string;
}

export default function NotebookListRow(props: NotebookListRowProps) {
  return (
    <>
      <div>{props.notebook}</div>
    </>
  )
}