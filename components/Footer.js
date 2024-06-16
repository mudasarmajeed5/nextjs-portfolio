const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <div className="text-center py-4 text-[--text-color] bg-[--rich-black]">
      &copy;{year} All rights Reserved — @mudassarmajeed5
    </div>
  )
}

export default Footer