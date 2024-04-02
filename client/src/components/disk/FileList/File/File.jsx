import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentDir } from "../../../../reducers/fileReducer";

import fileLogo from '../../../../Assets/file.png'
import dirLogo from '../../../../Assets/dir.png'

import '../File/File.css'

const File = ({file}) => {
    const dispatch = useDispatch()
    
    const openDirHandler = () => {
        dispatch(setCurrentDir(file._id))
        console.log(file._id, "******");
    }

    return(file?
        <div class='file' onClick={() => openDirHandler()}>
           <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="fileImg" className="file__img" />
           <div className="file__name">{file.name}</div>
           <div className="file__data">{file.date.slice(0, 10)}</div>
           <div className="file__size">{file.size}</div>
        </div>:<div>4</div>
    )
}

export default File