import React, { useState } from 'react'

import '../FileList/FileList.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupDisplay } from '../../../reducers/fileReducer'
import { createDir } from '../../../actions/file'

const Popup = () => {
  const [dirName, setDirName] = useState('')
  const popupDisplay = useSelector(state => state.files.popupDisplay)
  const currentDir = useSelector(state => state.files.currentDir)
  const dispatch = useDispatch()
  const createHandler = () => {
    dispatch(createDir(currentDir, dirName))
  }

  return (
    <div class="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
      <div class="popup__content" onClick={(event => event.stopPropagation())}>
        <div class='popup__header'>
          <div className="popup__title">Create new directory</div>
          <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}  >X</button>
        </div>
        <input
          class='popup__input'
          type="text"
          placeholder="Input name directory..."
          value={dirName}
          onChange={(e) => setDirName(e.target.value)}
        />
        <button className="popup__create" onClick={() => createHandler()}>Create</button>
      </div>
    </div>
  )
}

export default Popup
