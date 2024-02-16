import React from 'react';
import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Border from '../UI/Border';
import ErrorHandler from '../../utils/errorHandler';
import { useState, useEffect, useRef } from 'react';
import OnboardingButton from '../Onboarding/button';
import Button from '../UI/Button';
import dropdown_arrow from '../.././public/img/icons/dropdown-arrow.svg';
import FormInput from '../FormComponents/FormInput';
import Cancel from '../../public/img/icons/close.svg';
import Textarea from '../FormComponents/Textarea';

const UploadVideo = ({ setVideo, video, uploadProgress, isLoading }) => {
  const [isFileDragging, setIsFileDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior (Prevent file from being opened)
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    try {
      if (files && files.length === 1) {
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

    // Add event listeners to the window
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <div className="w-11/12" onDragOver={handleDragOver} onDrop={handleDrop}>
      <DottedBorder
        classes={`relative block md:inline-block w-full ${
          isFileDragging && !video ? 'border-green' : 'border-white'
        }`}
      >
        {video && (
          <button
            onClick={() => setVideo(null)}
            className={`gradient-2 absolute top-4 right-4 z-50 mx-auto block w-[80px] cursor-pointer rounded-full pt-s0 pb-s0 text-center text-sm`}
          >
            Remove
          </button>
        )}

        <input
          type="file"
          className="hidden"
          accept="video/mp4"
          onChange={(e) => setVideo(e.target.files[0])}
          id="video_upload"
        />
        {video ? (
          <video
            width="400"
            controls
            className="max-h-sm h-full w-full max-w-sm rounded-lg"
          >
            <source src={URL.createObjectURL(video)} type="video/mp4" />
          </video>
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
                  Select files
                </span>
              </Border>
            </label>
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
      <VideoInformation />
    </div>
  );
};

const VideoInformation = () => {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videoOptions, setVideoOptions] = useState({
    tags: [],
    description: '',
    title: '',
  });

  const [tagOptions, setTagOptions] = useState([
    'influencer',
    'aview',
    'international',
    'aviewint',
    'translation',
    'content',
    'toronto',
    'canada',
  ]);

  const handleVideoOptions = (e) => {
    const { name, value } = e.target;
    setVideoOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const closeHandler = (tag) => {
    const newOptionsArray = videoOptions.tags;
    newOptionsArray.push(tag);
    setVideoOptions((prevState) => ({
      ...prevState,
      tags: newOptionsArray,
    }));

    setTagOptions((prevTagOptions) =>
      prevTagOptions.filter((option) => option != tag)
    );
  };
  return (
    <>
      <div className="my-s4 flex flex-row items-center justify-start gap-x-4">
        <Button type="primary" purpose="submit">
          Download transcript
        </Button>
        <Button type="secondary" purpose="submit">
          Remove
        </Button>
      </div>
      <div className="mb-s4 rounded-md bg-white-transparent p-s2">
        <div className="">
          <p className="mb-s1 text-sm font-bold">Uploading...</p>
          <div className="mb-1 h-2 rounded-xl border-2 border-white-transparent bg-transparent relative">
            <span
              className={`gradient-1 absolute block h-[6px] w-1/2 rounded-xl top-0`}
            ></span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <p>10%</p>
            <p>10 mins left</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between">
        <h3 className="mb-s3 text-2xl font-bold">
          Video Information{' '}
          <span className="text-base font-light">(optional)</span>
        </h3>
        <div className="cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={dropdown_arrow}
            alt="optional-info"
            width={15}
            height={15}
            className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
      </div>
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
          <FormInput
            label="Tags"
            placeholder="Type your tag"
            type="text"
            ref={inputRef}
            hideCheckmark={true}
            name="tags"
            // onChange={handleInputChange}
            value={videoOptions.tags.join(', ')}
            extraClasses="mb-s0"
          />
          <div className="my-s1.5 flex w-full flex-row flex-wrap items-center justify-start gap-3 bg-transparent">
            {tagOptions &&
              tagOptions.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-x-2 rounded-xl bg-white-transparent p-2"
                  >
                    <p>{tag}</p>
                    <div
                      onClick={() => closeHandler(tag)}
                      className="cursor-pointer"
                    >
                      <Image
                        src={Cancel}
                        alt="close-option"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default UploadVideo;
