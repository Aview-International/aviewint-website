const getWidthPercentage = (currentStage) => {
  let percentage = 0;

  const options = [
    'Queued',
    'transcription',
    'translation',
    'dubbing',
    'audio-separation',
    'editing',
    'complete',
  ];

  const getStageNumber = (status) => {
    return options.findIndex(
      (option) => option.toLowerCase() === status.toLowerCase()
    );
  };

  const index = getStageNumber(currentStage);
  if (index > 0) {
    percentage = Math.floor(((index + 1) / 7) * 100);
  }

  return percentage;
};

export default getWidthPercentage;
