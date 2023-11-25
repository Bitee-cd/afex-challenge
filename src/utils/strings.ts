export function convertSnakeCaseToTitleCase(input: string): string {
  return input
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatDateString(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false, // Set to false for 24-hour format
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );

  return formattedDate.replace(/(\d+:\d+)/, (_, time) => time);
}
