const getWidthPercentage = (currentStage) => {
  let percentage = 0;

  const options = [
    'queued',
    'transcription',
    'translation',
    'dubbing',
    'audio-separation',
    'editing',
    'under review',
    'complete',
  ];

  const getStageNumber = (status) => {
    return options.findIndex(
      (option) => option.toLowerCase() === status.toLowerCase()
    );
  };

  const index = getStageNumber(currentStage);
  if (index > 0) {
    percentage = Math.floor(((index + 1) / options.length) * 100);
  }

  return percentage;
};

export default getWidthPercentage;
