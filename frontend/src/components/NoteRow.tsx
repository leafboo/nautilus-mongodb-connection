type NoteRowProps = {
  note: string;
}

export default function NoteRow(props: NoteRowProps) {
  return (
    <>
      <div>{props.note}</div>
    </>
  )
}