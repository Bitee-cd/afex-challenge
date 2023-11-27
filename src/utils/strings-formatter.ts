const useStringFormatter = () => {
  const convertSnakeCaseToTitleCase = (input: string): string => {
    return input
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatChartLabelNumber = (value: number): string => {
    const million = 1000000;
    if (value >= million) {
      return `${(value / million).toFixed(0)}M`;
    }
    return value.toFixed(0);
  };
  const formatDateString = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );

    return formattedDate.replace(/(\d+:\d+)/, (_, time) => time);
  };
  return {
    formatDateString,
    formatChartLabelNumber,
    convertSnakeCaseToTitleCase,
  };
};

export default useStringFormatter;
