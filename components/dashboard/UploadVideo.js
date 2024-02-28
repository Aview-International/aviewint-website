import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Border from '../UI/Border';
import ErrorHandler from '../../utils/errorHandler';
import FormInput from '../FormComponents/FormInput';
import Textarea from '../FormComponents/Textarea';
import ButtonText from '../sections/reused/ButtonText';

const UploadVideo = ({ video, uploadProgress, isLoading }) => {
  const [isFileDragging, setIsFileDragging] = useState(false);
  const dropZoneRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior (Prevent file from being opened)
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    try {
      if (files && files.length == 1) {
        const file = files[0];
        if (file.type.startsWith('video/')) {
          setVideo(file);
        } else {
          throw new Error('Please submit a video file.');
        }
      } else {
        throw new Error('Please submit a single video file.');
      }
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    const dropZone = dropZoneRef.current;
    const handleDragOver = (e) => {
      e.preventDefault(); // Prevent default behavior to allow drop
      setIsFileDragging(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsFileDragging(false);
    };

    const handleDrop = (e) => {
      e.preventDefault(); // Prevent default behavior to handle the file drop in JavaScript
      setIsFileDragging(false);
    };

    if (dropZone) {
      dropZone.addEventListener('dragover', handleDragOver);
      dropZone.addEventListener('dragleave', handleDragLeave);
      dropZone.addEventListener('drop', handleDrop);

      // Remove event listeners on cleanup
      return () => {
        dropZone.removeEventListener('dragover', handleDragOver);
        dropZone.removeEventListener('dragleave', handleDragLeave);
        dropZone.removeEventListener('drop', handleDrop);
      };
    }
  }, []);

  return (
    <div
      ref={dropZoneRef}
      className="w-11/12"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <DottedBorder
        classes={`p-s1 relative block md:inline-block w-full ${
          isFileDragging && !video
            ? 'border-gradient border-transparent'
            : 'border-white'
        }`}
      >
        <input
          type="file"
          className="hidden"
          accept="video/mp4"
          onChange={(e) => setVideo(e.target.files[0])}
          id="video_upload"
        />
        {video ? (
          <div>
            <div className="flex flex-row justify-between">
              <video
                controls
                style={{
                  maxWidth: '384px',
                  height: '316px',
                  width: '100%',
                  objectFit: 'contain',
                  backgroundColor: 'black',
                  objectPosition: 'center',
                }}
                className="max-h-sm max-w-[24rem] rounded-lg"
              >
                <source src={URL.createObjectURL(video)} type="video/mp4" />
              </video>

              <button
                onClick={() => {
                  setVideo(null);
                  setVideoUpdated((prevValue) => !prevValue);
                }}
                className={`absolute top-3 right-3 z-50 rounded-full bg-red p-2 text-center text-sm`}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-s6">
            <div className="flex h-[160px] w-[160px] place-content-center rounded-full bg-gray-1">
              <Image src={UploadIcon} alt="Upload" width={80} height={80} />
            </div>

            <label className="mt-s5" htmlFor="video_upload">
              <Border borderRadius="full">
                <span
                  className={`transition-300 mx-auto block rounded-full bg-black px-s3 pt-s1.5 pb-s1 text-center text-white`}
                >
                  Select video
                </span>
              </Border>
            </label>
            <p className="mt-s2 text-base">or drag and drop video here</p>
          </div>
        )}
      </DottedBorder>

      {isLoading && <p>Uploading Video</p>}

      <small className="my-s2 block text-sm">
        You acknowledge that you agree to Aview&#39;s &nbsp;
        <span className="gradient-1 gradient-text">
          <a href="/privacy-policy" target="_blank" rel="noferrer">
            Terms of Service
          </a>
        </span>
        &nbsp;and give us permission to post translated content on your behalf.
      </small>
      {video ? (
        <div className="mb-s4 rounded-md bg-white-transparent p-s2">
          <p className="mb-s1 text-sm font-bold">Uploading...</p>
          <div className="relative mb-1 h-2 rounded-xl border-2 border-white-transparent bg-transparent">
            <div
              className="gradient-1 absolute top-0 block h-[6px] w-1/2 scroll-smooth rounded-xl"
              style={{ width: uploadProgress + '%' }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <p>10%</p>
            <p>10 mins left</p>
          </div>
        </div>
      ) : null}
      <VideoInformation />
    </div>
  );
};

const VideoInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoOptions, setVideoOptions] = useState({
    description: '',
    title: '',
  });

  const handleVideoOptions = (e) => {
    const { name, value } = e.target;
    setVideoOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <ButtonText isOpen={isOpen} setIsOpen={setIsOpen} labelClasses="mb-s3">
        <p className={`text-2xl font-bold`}>
          Video Information{' '}
          <span className="text-base font-light">(optional)</span>
        </p>
      </ButtonText>
      {isOpen && (
        <>
          <FormInput
            label="Title"
            placeholder="Title"
            type="text"
            value={videoOptions.title}
            hideCheckmark={true}
            name="title"
            onChange={handleVideoOptions}
            extraClasses="mb-s0"
          />
          <p className="mt-s2 text-lg">Description</p>
          <Textarea
            placeholder="Describe video information"
            onChange={handleVideoOptions}
            name="description"
            value={videoOptions.description}
            extraClasses={'mb-s2'}
          />
        </>
      )}
    </>
  );
};

export default UploadVideo;
