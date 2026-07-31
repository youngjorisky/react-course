import dayjs from "dayjs";

export function getDeliveryPercent(orderTimeMs, estimatedDeliveryTimeMs) {
  const totalDeliveryTimeMs = estimatedDeliveryTimeMs - orderTimeMs;
  const timePassedMs = dayjs().valueOf() - orderTimeMs;

  return (timePassedMs / totalDeliveryTimeMs) * 100;
}
