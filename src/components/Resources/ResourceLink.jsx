import React from "react"

const ResourceLink = ({ sub, setContentView }) => {
  // console.log(currentContent)
  return (
    <div
      className="rounded w-full flex flex-col md:flex-row mb-10"
      onClick={() => setContentView(sub)}
    >
      <div className="bg-white rounded px-4">
        <span className="text-green-700 text-sm hidden md:block">
          {sub.frontmatter.tag}
        </span>
        <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
          {sub.frontmatter.title}
        </div>
        <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
          {sub.frontmatter.title}
        </p>
      </div>
      <img
        src={sub.frontmatter.image}
        className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
        alt=""
        style={{ width: "200px" }}
      />
    </div>
  )
}

export default ResourceLink
