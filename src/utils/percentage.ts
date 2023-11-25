interface UserStats {
  name: string;
  current: number;
  last_month: number;
}

interface ChangeResult {
  name: string;
  percentage: number;
  changeType: "credit" | "debit";
}

export function calculatePercentageChange(stats: UserStats): ChangeResult {
  const { name, current, last_month } = stats;

  const changeAmount = current - last_month;
  const percentageChange = ((changeAmount / last_month) * 100).toFixed(2);

  const changeType = changeAmount > 0 ? "credit" : "debit";

  const result: ChangeResult = {
    name,
    percentage: parseFloat(percentageChange),
    changeType,
  };

  return result;
}

export function formatNumber(num: number): string {
  const absNum = Math.abs(num);

  if (absNum >= 1e6) {
    const formattedNum = absNum / 1e6;
    return num < 0 ? `-${formattedNum} M` : `${formattedNum} M`;
  } else if (absNum >= 1e3) {
    const formattedNum = Math.floor(absNum / 1e3);
    return num < 0 ? `-${formattedNum} K` : `${formattedNum} K`;
  } else {
    return num.toString();
  }
}
