import { gql } from "@apollo/client"

export const ALL_BLOGS_QUERY = gql`
    {
        blogDatas(orderBy: publishedAt_DESC, first: 500) {
            id
            title
            slugBlogs
            image {
                url
            }
        }
    }
`

export const SINGLE_BLOG_QUERY = (slug) => gql`
{
  blogDatas(where: {slugBlogs: "${slug}"}) {
    id
    readTime
    title
    image{
      url
    }
    expandedImagePhone{
      url
    }
    body{
      html
    }
  }
}
`
export const GET_NEXT_BLOG = (id) => gql`
{
  blogDatas(after: "${id}", orderBy: publishedAt_DESC) {
    id,
    slugBlogs
  }
}
`
export const GET_PREVIOUS_BLOG = (id) => gql`
{
  blogDatas(before: "${id}", orderBy: publishedAt_DESC) {
    id,
    slugBlogs
  }
}
`

export const BLOGS_QUICKVIEW_QUERY = gql`
    {
        blogDatas(orderBy: publishedAt_DESC, first: 3) {
            id
            title
            slugBlogs
            image {
                url
            }
        }
    }
`

const getClientData = async (callback) => {
    const data = [
        {
            id: 0,
            iconURL: require("../images/clients/Client1.png"),
            iconDim: "w-[100px]",
            text: "Delivered digital experiences for customers of Kotak Home Loans, Kotak Personal Loan, Retail Banking, and Kotak Wealth Management.",
            countries: [require("../images/clients/IN.png")],
        },
        {
            id: 1,
            iconURL: require("../images/clients/Client2.png"),
            iconDim: "w-[100px]",
            text: "Developed the product experience strategy and design for the in-house AI-powered Marketing Analytics Application.",
            countries: [require("../images/clients/US.png")],
        },
        {
            id: 2,
            iconURL: require("../images/clients/Client3.png"),
            iconDim: "w-[100px]",
            text: "Constructed an experience strategy with a scalable design system for the complete healthcare ecosystem of customers.",
            countries: [require("../images/clients/UAE.png")],
        },
        {
            id: 3,
            iconURL: require("../images/clients/Client4.png"),
            iconDim: "w-[100px]",
            text: "Designed and developed a weight loss app with strategies and designs to help individuals and track their progress. The app includes features to motivate users.",
            countries: [
                require("../images/clients/AUS.png"),
                require("../images/clients/CA.png"),
                require("../images/clients/UK.png"),
                require("../images/clients/US.png"),
            ],
        },
        {
            id: 4,
            iconURL: require("../images/clients/Client5.png"),
            iconDim: "w-[50px]",
            text: "Designed the website and established a visual identity that was implemented across all digital assets and platforms.",
            countries: [require("../images/clients/IN.png")],
        },
        {
            id: 5,
            iconURL: require("../images/clients/Client6.png"),
            iconDim: "w-[70px]",
            text: "Created a product and experience strategy with a flexible design system suitable for any manufacturing company.",
            countries: [require("../images/clients/IN.png")],
        },
    ]
    callback(data)
}

const API = {
    ALL_BLOGS_QUERY,
    SINGLE_BLOG_QUERY,
    GET_NEXT_BLOG,
    GET_PREVIOUS_BLOG,
    BLOGS_QUICKVIEW_QUERY,

    getClientData,
}

export default API
