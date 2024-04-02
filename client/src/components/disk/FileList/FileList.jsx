import React from 'react'
import '../FileList/FileList.css'
import { useSelector } from 'react-redux'
import File from './File/File'

const FileList = () => {

  const files = useSelector((state) => state.files.files).map((file) => (
    <File key={file.id} file={file} />
  ))
  

  console.log();
  return (
    <div class="fileList">
      <div class="fileList__header">
        <div class="fileList__name">Name</div>
        <div class="fileList__data">Data</div>
        <div class="fileList__size">Size</div>
      </div>
      {files}
    </div>
  )
}

export default FileList
