import React from "react"
import "../tailwind.css"
import "../reset.css"

const Content = ({ meta }) => {
  return (
    <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-3/5 lg:w-3/5 relative rounded block">
      <h1 className="text-gray-800 text-5xl font-bold mt-2 mb-2 leading-tight">
        {meta.frontmatter.title}
      </h1>
      <span className="text-green-700 text-sm hidden md:block mt-4">
        {meta.frontmatter.tag}
      </span>
      <img
        src={meta.frontmatter.image || null}
        className="rounded-md object-cover w-full h-64 mt-4"
        alt=""
      />
      <div dangerouslySetInnerHTML={{ __html: meta.html }} />
    </div>
  )
}

export default Content
