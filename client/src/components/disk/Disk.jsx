import React, { useEffect } from 'react'
import '../disk/Disk.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/file'
import FileList from './FileList/FileList'
import Popup from './FileList/Popup'
import { setPopupDisplay } from '../../reducers/fileReducer'

const Disk = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector((state) => state.files.currentDir)
  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir, dispatch])

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))                       
  }

  return (
    <div class="disk">
      <div className="disk__buttons">
        <button className="buttons__back">Back</button>
        <button className="buttons__create" onClick={() => showPopupHandler()}>
          Create new directory
        </button>
      </div>
      <FileList />
      <Popup />
    </div>
  )
}

export default Disk
