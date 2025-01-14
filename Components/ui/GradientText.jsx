
const GradientText = ({ children }) => {
  return (
    <span className='text-text-light-gray from-blue-green-start to-blue-green-end bg-gradient-to-r transition-all inline-block text-transparent bg-clip-text'>
        {children}
    </span>
  )
}

export default GradientText