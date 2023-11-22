import React from 'react'
import Image from 'next/image'
import Button from './Button'
import TrashIcon from '../../public/img/icons/trash.svg'
import whiteCheckCircle from '../../public/img/icons/white-check-circle.svg'

const VoiceSample = ({ id, audioData, type, deleteAudioSample, saveAudioSample }) => {
  return (
    <div className='bg-white-transparent p-4 rounded-2xl flex flex-col gap-4 text-white'>
      <div className='flex w-full justify-between items-center'>
       <p>{type == "record" ? "Audio Sample" : "Speaker"}{" "}<span>{id}</span></p>
       <div onClick={() => deleteAudioSample(audioData)} className='cursor-pointer'>
        {!audioData.isSaved ? 
         <Image src={TrashIcon} alt='Delete-Voice' width={20} height={20}/> : 
         <Image src={whiteCheckCircle} alt='sample-saved' width={20} height={20}/> 
        } 
       </div>
      </div>
      
        <audio controls>
           <source src={URL.createObjectURL(audioData.audio)} type='audio/webm'/> 
           Your browser does not support the audio tag.
        </audio>
      
         
        { !audioData.isSaved ?  
         <Button type="primary" purpose="onClick" fullWidth={true} onClick={()=> saveAudioSample(audioData)}>
         Save
         </Button> 
         : 
         <Button type="secondary" fullWidth={true}>
          Saved successfully
         </Button>

        }
         
         
        
        
        
    </div>
  )
}

export default VoiceSample
