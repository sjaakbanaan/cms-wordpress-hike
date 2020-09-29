import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <Link href="/">
          <a className="hover:underline">[logo]</a>
        </Link>
      </div>       
    </section>
  )
}
