export default function cx (...args: any[]): string {
  return args.filter(Boolean).join(' ')
}
