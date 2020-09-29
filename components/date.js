import { parseISO, format, formatDistance, subDays } from 'date-fns'

export default function DistanceDate({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{formatDistance(subDays(date, 0), new Date())} ago</time>
}
