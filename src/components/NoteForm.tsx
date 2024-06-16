import React from 'react'

type Props = {
  onSubmit: (content: string) => void
}

const NoteForm = (props: Props) => {

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const content: FormDataEntryValue | null = formData.get('content');
  if (typeof content !== 'string') {
    return;
  }

  props.onSubmit(content);

}

  return (
    <form id='note-form' name='note-form' onSubmit={handleSubmit} className='note'>
      <input className='input' name='content' type="textarea" required/>
      <button className='submit_button' type="submit">
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </button>
    </form>
  )
}

export default NoteForm
