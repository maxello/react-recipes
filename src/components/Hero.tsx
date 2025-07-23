const Hero = ({
  title,
  text
}: {
  title: string,
  text?: string
}) => {
  return (
    <div className="py-8 md:py-12 text-center ">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
        {title}
      </h1>
      {text && (
        <p className="mt-8 mb-6 text-lg font-medium text-pretty text-secondary sm:text-xl/8">
          {text}
        </p>
      )}
    </div>
  )
}

export default Hero
