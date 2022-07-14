import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import Card from '../UI/Card'

import starImg from '../images/icon-star.svg'
import Circle from '../UI/Circle'

const listNote = [
  { id: 1, value: 1, isSelect: false },
  { id: 2, value: 2, isSelect: false },
  { id: 3, value: 3, isSelect: false },
  { id: 4, value: 4, isSelect: false },
  { id: 5, value: 5, isSelect: false },
]

const CardForm = ({onSubmited}) => {
  const [notes, setNotes] = useState(listNote)
  const [noteSelected, setNoteSelected] = useState(null)
  const [error, setError] = useState(false)

  const selectedHandler = (id, value) => {
    const copyNote = [...listNote]
    const currentIndexNote = copyNote.findIndex((note) => note.id === id)
    const updateCurrentNote = { id, value, isSelect: true }

    copyNote[currentIndexNote] = updateCurrentNote

    setNoteSelected(value)
    setNotes(copyNote)
    setError(false)
  }

  const submitHandler = () => {
    if(noteSelected === null) {
      setError(true)
      return
    }
    onSubmited(noteSelected)
    setError(false)
  }

  return (
    <Card>
      <Circle>
        <img src={starImg} alt='star icon' />
      </Circle>
      <TitleH2>How did we do?</TitleH2>
      <Paragraphe>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraphe>
      <ListNote>
        {notes.map((note) => (
          <CircleNote
            key={note.id}
            balise='li'
            className={note.isSelect ? 'selected' : ''}
            onClick={() => selectedHandler(note.id, note.value)}
          >
            {note.value}
          </CircleNote>
        ))}
      </ListNote>

      <SubmitBtn onClick={submitHandler}>Submit</SubmitBtn>
      {error && <ErrorMsg>Please select a note value</ErrorMsg>}
    </Card>
  )
}

const TitleH2 = styled.h2`
  margin: 40px 0 15px;
  font-weight: 500;

  @media screen and (max-width: 375px) {
    margin: 25px 0 10px;
  }
`

const Paragraphe = styled.p`
  color: ${colors.lightGrey};
  font-weight: 500;
  line-height: 25px;
`

const ListNote = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  color: ${colors.lightGrey};
`

const CircleNote = styled(Circle)`
  cursor: pointer;
  transition: 0.2s;

  &.selected {
    background-color: ${colors.lightGrey};
    color: ${colors.white};
    font-weight: 700;
  }

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-weight: 700;
  }
`

const SubmitBtn = styled.button`
  background-color: ${colors.primary};
  border: none;
  border-radius: 50px;
  color: ${colors.white};
  width: 100%;
  padding: 13px 0;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.primary};
    background-color: ${colors.white};
  }
`

const ErrorMsg = styled.p`
  text-align: center;
  color: ${colors.primary};
  margin-top: 5px;
`

export default CardForm
