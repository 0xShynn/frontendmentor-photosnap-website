import dayjs from 'dayjs'

export default function getFormattedDate(string) {
  return dayjs(string).format('MMMM D YYYY')
}
